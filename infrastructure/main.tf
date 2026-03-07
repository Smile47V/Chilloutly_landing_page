# --------------------------
# S3 Bucket for Landing Page
# --------------------------
resource "aws_s3_bucket" "landing_page" {
  bucket        = "chilloutly-landing-nigeria"
  force_destroy = true
}

# --------------------------
# CloudFront Origin Access Identity (OAI)
# --------------------------
resource "aws_cloudfront_origin_access_identity" "landing_page_oai" {
  comment = "OAI for Chilloutly landing page"
}

# --------------------------
# S3 Bucket Policy for OAI (private bucket)
# --------------------------
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.landing_page.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.landing_page_oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "landing_page_policy" {
  bucket = aws_s3_bucket.landing_page.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

# --------------------------
# CloudFront Distribution
# --------------------------
resource "aws_cloudfront_distribution" "landing_page_cf" {
  origin {
    domain_name = aws_s3_bucket.landing_page.bucket_regional_domain_name
    origin_id   = "s3-${aws_s3_bucket.landing_page.id}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.landing_page_oai.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-${aws_s3_bucket.landing_page.id}"

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  # --------------------------
  # SPA routing fix: serve index.html on 403/404
  # --------------------------
  custom_error_response {
    error_code            = 403
    response_page_path    = "/index.html"
    response_code         = 200
    error_caching_min_ttl = 0
  }

  custom_error_response {
    error_code            = 404
    response_page_path    = "/index.html"
    response_code         = 200
    error_caching_min_ttl = 0
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  depends_on = [aws_s3_bucket_policy.landing_page_policy]
}

# --------------------------
# Upload Static Files to S3
# --------------------------
resource "null_resource" "upload_files" {

  triggers = {
    site_hash = sha256(join("", [
      for f in fileset("../out", "**") :
      filesha256("../out/${f}")
    ]))
  }

  provisioner "local-exec" {
    command = "aws s3 sync ../out/ s3://${aws_s3_bucket.landing_page.id} --delete"
  }

  depends_on = [aws_s3_bucket_policy.landing_page_policy]
}

# --------------------------
# CloudFront Cache Invalidation
# --------------------------
resource "null_resource" "invalidate" {
  provisioner "local-exec" {
    command = <<EOT
aws cloudfront create-invalidation \
--distribution-id ${aws_cloudfront_distribution.landing_page_cf.id} \
--paths "/*"
EOT
  }

  depends_on = [null_resource.upload_files]
}
