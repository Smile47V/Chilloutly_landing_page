#!/bin/bash

echo "Building Next.js project...🚀"
npm run build

echo "Deploying infrastructure...!!!!!!!!!!"

cd infrastructure

terraform init
terraform plan
terraform apply 

echo "Deployment complete 🚀"