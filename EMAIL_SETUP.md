# Email Setup for Contact Form

## Overview
The contact form now sends emails to `samad@samsurproperties.in` using AWS SES with `info@reignofvision.com` as the sender.

## Required Environment Variables

Add these to your `.env.local` file:

```bash
# AWS SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key_here
AWS_SES_FROM_EMAIL=info@reignofvision.com
```

## AWS SES Setup Requirements

1. **Verify the sender email**: `info@reignofvision.com` must be verified in AWS SES
2. **Verify the recipient email**: `samad@samsurproperties.in` should be verified (optional for production)
3. **SES Permissions**: Your AWS credentials need SES send permissions

## Email Flow

1. User submits contact form
2. Form data is validated
3. Email is sent to `samad@samsurproperties.in`
4. Email appears to come from `info@reignofvision.com`
5. User receives success/error message

## Email Template

The email includes:
- Contact details (name, email, phone)
- Message content
- Service interest (if specified)
- Property ID (if specified)
- Timestamp and metadata

## Testing

To test the email functionality:
1. Fill out the contact form on `/contact`
2. Submit the form
3. Check if email is received at `samad@samsurproperties.in`
4. Check server logs for any errors 