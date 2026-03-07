#!/bin/bash
set -e

echo "🚀 Building Next.js project..."
rm -rf out
npm run build

echo "📦 Deploying infrastructure..."

cd infrastructure

terraform init
terraform apply -auto-approve

echo "✅ Deployment complete 🚀"