# CTA Popup & AWS SES Email System - Setup Guide

## 🎯 Overview

This implementation adds a powerful lead generation system to your Samsur Properties website:

1. **CTA Popup**: Automatically appears for new visitors after 10 seconds (once per session)
2. **AWS SES Integration**: Professional email delivery for all contact forms
3. **Lead Management**: Structured email templates for different types of inquiries
4. **Enhanced UX**: Modern, responsive forms with better validation

## 🚀 Features Implemented

### CTA Popup Features
- ✅ **Session-based Display**: Shows only once per browser session
- ✅ **Customizable Delay**: Default 10 seconds (configurable)
- ✅ **Real Estate Context**: Chennai-focused messaging with property benefits
- ✅ **Lead Prioritization**: High-priority email alerts for CTA submissions
- ✅ **Mobile Responsive**: Optimized for all screen sizes
- ✅ **Trust Indicators**: 4.9/5 rating, 1000+ clients, certified agent badges

### Email System Features
- ✅ **AWS SES Integration**: Professional email delivery
- ✅ **Multiple Templates**: Contact forms, CTA leads, newsletter subscriptions
- ✅ **Email Validation**: Proper format and phone number validation
- ✅ **Admin Notifications**: All submissions sent to admin email
- ✅ **User Confirmations**: Welcome emails for newsletter subscribers

## 📋 Setup Instructions

### 1. AWS SES Configuration

1. **Create AWS Account** (if not already done)
2. **Set up SES in AWS Console**:
   ```bash
   - Go to AWS SES Console
   - Verify your sender email address
   - Request production access (if needed)
   - Note your region (e.g., us-east-1)
   ```

3. **Create IAM User** with SES permissions:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "ses:SendEmail",
           "ses:SendRawEmail"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

### 2. Environment Variables

Create or update your `.env.local` file:

```bash
# AWS SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_SES_FROM_EMAIL=noreply@yourdomain.com

# Email Configuration
ADMIN_EMAIL=samsurproperties@gmail.com

# Existing Contentful vars...
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token
```

### 3. DNS Setup (Important!)

For production, verify your domain in AWS SES:
1. Add domain to SES
2. Add DKIM records to your DNS
3. Move out of sandbox mode

## 📧 Email Templates

The system includes 3 professional email templates:

### 1. Contact Form Template
- Clean, structured layout
- Contact details prominently displayed
- Action-required emphasis

### 2. CTA Popup Template (High Priority)
- Red accent for urgency
- "High Priority Lead" designation
- 1-hour response recommendation
- Source tracking (CTA popup)

### 3. Newsletter Template
- Welcome message
- Benefit highlights
- Call-to-action button
- Company branding

## 🎨 CTA Popup Configuration

### Default Settings
```tsx
<CTAPopup delay={10} /> // 10 seconds delay
```

### Customization Options
```tsx
interface CTAPopupProps {
  delay?: number; // Delay in seconds before showing popup
}
```

### Session Management
- Uses `sessionStorage` to track display status
- Key: `samsur_cta_popup_shown`
- Resets when browser session ends

## 🔧 API Endpoints

### 1. `/api/cta-lead` (NEW)
Handles CTA popup submissions with high-priority flagging.

### 2. `/api/contact` (UPDATED)
Enhanced contact form with AWS SES integration.

### 3. `/api/newsletter` (UPDATED)
Newsletter subscriptions with welcome emails.

### 4. `/api/share-property` (UPDATED)
Property sharing via email using AWS SES.

## 📊 Lead Tracking

All submissions are logged with:
- Timestamp
- User Agent
- IP Address (if available)
- Source type (CTA, Contact Form, Newsletter)
- Unique tracking IDs

### Log Format Example:
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+91 98765 43210",
  interest: "Property Purchase",
  timestamp: "2025-01-15T10:30:00.000Z",
  userAgent: "Mozilla/5.0...",
  ip: "203.0.113.1",
  leadId: "CTA_1642248600000_abc123def"
}
```

## 🎯 Lead Prioritization

### High Priority (CTA Popup)
- **Email Subject**: 🎯 New Lead from Website CTA
- **Response Time**: Within 1 hour recommended
- **Styling**: Red accents, urgent formatting

### Standard Priority (Contact Forms)
- **Email Subject**: New Contact Form Submission
- **Response Time**: Within 24 hours
- **Styling**: Blue accents, professional formatting

## 📱 Mobile Optimization

All components are fully responsive:
- CTA popup adapts to mobile screens
- Forms have touch-friendly inputs
- Emails render properly on mobile devices

## 🧪 Testing Checklist

### Before Going Live:

1. **Test CTA Popup**:
   - [ ] Appears after 10 seconds on homepage
   - [ ] Only shows once per session
   - [ ] Form submits successfully
   - [ ] Success message displays

2. **Test Contact Forms**:
   - [ ] Main contact form (/contact)
   - [ ] Property-specific contact forms
   - [ ] Newsletter subscription
   - [ ] Property sharing

3. **Test Email Delivery**:
   - [ ] Admin receives all notifications
   - [ ] Newsletter subscribers get welcome email
   - [ ] Email formatting looks good
   - [ ] Links work correctly

4. **Test Error Handling**:
   - [ ] Invalid email formats rejected
   - [ ] Network errors handled gracefully
   - [ ] User sees appropriate error messages

## 🔐 Security Features

- **Input Validation**: Email and phone format validation
- **XSS Prevention**: All inputs sanitized
- **Rate Limiting**: Consider adding rate limiting for production
- **Environment Variables**: Sensitive data in env vars only

## 📈 Conversion Optimization

### CTA Popup Features for Better Conversion:
- **Urgency**: "Limited Time Offer" messaging
- **Benefits**: Clear value propositions (Zero brokerage, Free legal verification)
- **Trust Signals**: Ratings, client count, certification badges
- **Multiple Options**: 7 different interest categories
- **Privacy Note**: Builds trust with privacy statement

### Form UX Improvements:
- **Better Styling**: Gradient buttons, focused states
- **Loading States**: Animated spinners during submission
- **Clear Feedback**: Success/error states with icons
- **Placeholders**: Helpful placeholder text

## 🚨 Troubleshooting

### Common Issues:

1. **Emails Not Sending**:
   - Check AWS credentials
   - Verify SES domain/email verification
   - Check AWS region settings
   - Review CloudWatch logs

2. **CTA Popup Not Showing**:
   - Clear browser sessionStorage
   - Check browser console for errors
   - Verify component is imported correctly

3. **Form Validation Errors**:
   - Check email regex pattern
   - Verify phone number format
   - Review API error responses

## 📞 Support

For technical support:
- **Email**: tech@samsurproperties.com
- **Phone**: +91 090420 00172
- **Documentation**: This file + code comments

---

**🎉 Congratulations!** Your Samsur Properties website now has a professional lead generation system that will help convert more visitors into clients! 