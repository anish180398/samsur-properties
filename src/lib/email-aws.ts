import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize AWS SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  const toAddresses = Array.isArray(to) ? to : [to];
  
  const params = {
    Source: process.env.AWS_SES_FROM_EMAIL!,
    Destination: {
      ToAddresses: toAddresses,
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: html,
          Charset: 'UTF-8',
        },
        ...(text && {
          Text: {
            Data: text,
            Charset: 'UTF-8',
          },
        }),
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    console.log('Email sent successfully:', result.MessageId);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Email templates for different types of submissions
export const emailTemplates = {
  contactForm: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
    service?: string;
    propertyId?: string;
  }) => ({
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ''}
          ${data.propertyId ? `<p><strong>Property ID:</strong> ${data.propertyId}</p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>Samsur Properties</strong> - Contact Management System
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.service ? `Service: ${data.service}` : ''}
${data.propertyId ? `Property ID: ${data.propertyId}` : ''}

Message:
${data.message}

---
Samsur Properties - Contact Management System
    `,
  }),

  ctaPopup: (data: {
    name: string;
    email: string;
    phone: string;
    interest: string;
  }) => ({
    subject: `New Lead from CTA Popup - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
          🎯 New Lead from Website CTA
        </h2>
        
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
          <h3 style="color: #991b1b; margin-top: 0;">High Priority Lead</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Interest:</strong> ${data.interest}</p>
        </div>
        
        <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; border-left: 4px solid #16a34a;">
          <p style="margin: 0; color: #166534;">
            💡 <strong>Quick Action Required:</strong> This lead came from your website's CTA popup, indicating high interest. Consider reaching out within 1 hour for best conversion rates.
          </p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>Samsur Properties</strong> - Lead Management System
          </p>
        </div>
      </div>
    `,
    text: `
🎯 NEW HIGH PRIORITY LEAD FROM WEBSITE CTA

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Interest: ${data.interest}

QUICK ACTION REQUIRED: This lead came from your website's CTA popup. 
Reach out within 1 hour for best conversion rates.

---
Samsur Properties - Lead Management System
    `,
  }),

  newsletter: (email: string) => ({
    subject: `Welcome to Samsur Properties Newsletter!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; text-align: center;">Welcome to Samsur Properties!</h2>
        
        <div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center;">
          <h3 style="color: #374151;">Thank you for subscribing to our newsletter!</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            You'll now receive the latest updates on:
          </p>
          <ul style="text-align: left; color: #6b7280; max-width: 400px; margin: 20px auto;">
            <li>New property listings</li>
            <li>Market insights and trends</li>
            <li>Exclusive deals and offers</li>
            <li>Investment opportunities</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="https://www.samsurproperties.com/properties" 
             style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Browse Properties
          </a>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Samsur Properties - Your trusted partner in real estate</p>
          <p>📞 +91 90420 00172 / +91 9087886786 | ✉️ samsurproperties@gmail.com</p>
        </div>
      </div>
    `,
    text: `
Welcome to Samsur Properties Newsletter!

Thank you for subscribing! You'll receive updates on:
- New property listings
- Market insights and trends  
- Exclusive deals and offers
- Investment opportunities

Visit: https://www.samsurproperties.com/properties

Contact: +91 90420 00172 / +91 9087886786 | samsurproperties@gmail.com
    `,
  }),
}; 