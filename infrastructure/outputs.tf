output "s3_bucket_name" {
  value = aws_s3_bucket.landing_page.id
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.landing_page_cf.domain_name
}
