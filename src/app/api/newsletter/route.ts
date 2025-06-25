import { NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/lib/email-aws';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate the request
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Generate welcome email template
    const template = emailTemplates.newsletter(cleanEmail);

    // Send welcome email to subscriber
    await sendEmail({
      to: cleanEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });

    // Notify admin about new subscription
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'samsurproperties@gmail.com',
      subject: `New Newsletter Subscription`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Source:</strong> Website Newsletter Form</p>
        </div>
      `,
      text: `
New Newsletter Subscription

Email: ${cleanEmail}
Date: ${new Date().toLocaleString()}
Source: Website Newsletter Form
      `,
    });

    // Log the subscription
    console.log('Newsletter subscription:', {
      email: cleanEmail,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    });

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter',
        subscriptionId: `NEWSLETTER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    
    // Return a user-friendly error message
    if (error instanceof Error && error.message.includes('Email')) {
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
} 