import { NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/lib/email-aws';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest } = body;

    // Validate the request
    if (!name || !email || !phone || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Validate phone format (basic validation for Indian numbers)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    const leadData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      interest: interest.trim(),
    };

    // Generate email template
    const template = emailTemplates.ctaPopup(leadData);

    // Send email to admin/sales team
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'samad@samsurproperties.in',
      subject: template.subject,
      html: template.html,
      text: template.text,
    });

    // Log the lead for tracking
    console.log('CTA Lead submission:', {
      ...leadData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    });

    return NextResponse.json(
      { 
        message: 'Lead submitted successfully',
        leadId: `CTA_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing CTA lead:', error);
    
    // Return a user-friendly error message
    if (error instanceof Error && error.message.includes('Email')) {
      return NextResponse.json(
        { error: 'Failed to send notification. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
} 