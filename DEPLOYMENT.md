# AWS Deployment Guide (S3 + CloudFront + Route 53)

Full from-scratch setup for hosting this static site on AWS with HTTPS and a custom domain.

## Prerequisites

- AWS CLI installed and configured (`aws configure`)
- A registered domain name
- Node.js installed

## Step 1: Build the Site

```bash
npm install
npm run build
```

This produces an `out/` directory with static HTML/CSS/JS.

## Step 2: Create an S3 Bucket

```bash
aws s3 mb s3://YOUR-DOMAIN.com --region us-east-1
```

> Use `us-east-1` — ACM certificates for CloudFront must be in this region.

Block direct public access (CloudFront will handle access):

```bash
aws s3api put-public-access-block \
  --bucket YOUR-DOMAIN.com \
  --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false
```

## Step 3: Create a Route 53 Hosted Zone

Skip this if your domain is already in Route 53.

```bash
aws route53 create-hosted-zone \
  --name YOUR-DOMAIN.com \
  --caller-reference "$(date +%s)"
```

Update your domain registrar's nameservers to the NS records from the output. DNS propagation can take up to 48 hours.

## Step 4: Request an SSL Certificate (ACM)

```bash
aws acm request-certificate \
  --domain-name YOUR-DOMAIN.com \
  --subject-alternative-names "www.YOUR-DOMAIN.com" \
  --validation-method DNS \
  --region us-east-1
```

Save the `CertificateArn` from the output, then get the validation CNAME records:

```bash
aws acm describe-certificate \
  --certificate-arn YOUR_CERT_ARN \
  --region us-east-1 \
  --query "Certificate.DomainValidationOptions"
```

Add those CNAME records to your Route 53 hosted zone (or external DNS). Wait for certificate status to become `ISSUED` (usually a few minutes with Route 53).

## Step 5: Create a CloudFront Origin Access Control

This allows CloudFront to read from your private S3 bucket.

```bash
aws cloudfront create-origin-access-control \
  --origin-access-control-config \
    Name=YOUR-DOMAIN-oac,\
Description="OAC for static site",\
SigningProtocol=sigv4,\
SigningBehavior=always,\
OriginAccessControlOriginType=s3
```

Save the `Id` from the output.

## Step 6: Create the CloudFront Distribution

Create a file called `cf-config.json`:

```json
{
  "CallerReference": "YOUR-DOMAIN-unique-ref",
  "Aliases": {
    "Quantity": 2,
    "Items": ["YOUR-DOMAIN.com", "www.YOUR-DOMAIN.com"]
  },
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-YOUR-DOMAIN",
        "DomainName": "YOUR-DOMAIN.com.s3.us-east-1.amazonaws.com",
        "OriginAccessControlId": "YOUR_OAC_ID",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-YOUR-DOMAIN",
    "ViewerProtocolPolicy": "redirect-to-https",
    "AllowedMethods": {
      "Quantity": 2,
      "Items": ["GET", "HEAD"]
    },
    "CachedMethods": {
      "Quantity": 2,
      "Items": ["GET", "HEAD"]
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": { "Forward": "none" }
    },
    "Compress": true,
    "MinTTL": 0,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000
  },
  "CustomErrorResponses": {
    "Quantity": 1,
    "Items": [
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/404.html",
        "ResponseCode": "404",
        "ErrorCachingMinTTL": 300
      }
    ]
  },
  "ViewerCertificate": {
    "ACMCertificateArn": "YOUR_CERT_ARN",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "PriceClass": "PriceClass_100",
  "Enabled": true,
  "Comment": "Static portfolio site"
}
```

Create the distribution:

```bash
aws cloudfront create-distribution \
  --distribution-config file://cf-config.json
```

Save the `Id` and `DomainName` (e.g., `d3xxxxx.cloudfront.net`) from the output.

## Step 7: Set the S3 Bucket Policy

This grants CloudFront — and only CloudFront — access to your bucket.

```bash
aws s3api put-bucket-policy --bucket YOUR-DOMAIN.com --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-DOMAIN.com/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
        }
      }
    }
  ]
}'
```

## Step 8: Point DNS to CloudFront

Create A and AAAA alias records for both root and www:

```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id YOUR_ZONE_ID \
  --change-batch '{
  "Changes": [
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "YOUR-DOMAIN.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "YOUR_CF_DOMAIN.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "YOUR-DOMAIN.com",
        "Type": "AAAA",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "YOUR_CF_DOMAIN.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "www.YOUR-DOMAIN.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "YOUR_CF_DOMAIN.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "www.YOUR-DOMAIN.com",
        "Type": "AAAA",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "YOUR_CF_DOMAIN.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}'
```

> `Z2FDTNDATAQYW2` is the fixed hosted zone ID for all CloudFront distributions — not specific to your account.

## Step 9: Deploy the Site

```bash
aws s3 sync out/ s3://YOUR-DOMAIN.com --delete

aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

Your site should be live within a few minutes.

## Updating the Site

```bash
npm run build
aws s3 sync out/ s3://YOUR-DOMAIN.com --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Placeholders Reference

| Placeholder | Description |
|---|---|
| `YOUR-DOMAIN.com` | Your registered domain name |
| `YOUR_CERT_ARN` | ACM certificate ARN from Step 4 |
| `YOUR_OAC_ID` | Origin Access Control ID from Step 5 |
| `YOUR_DISTRIBUTION_ID` | CloudFront distribution ID from Step 6 |
| `YOUR_CF_DOMAIN` | CloudFront domain (e.g., `d3xxxxx.cloudfront.net`) from Step 6 |
| `YOUR_ACCOUNT_ID` | Your AWS account ID |
| `YOUR_ZONE_ID` | Route 53 hosted zone ID from Step 3 |
