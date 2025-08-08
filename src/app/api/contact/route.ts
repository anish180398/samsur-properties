import { NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/lib/email-aws';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service, propertyId } = body;

    // Validate the request
    if (!name || !email || !phone || !message) {
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

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      service: service?.trim(),
      propertyId: propertyId?.trim(),
    };

    // Generate email template
    const template = emailTemplates.contactForm(contactData);

    // Send email to samad@samsurproperties.in
    await sendEmail({
      to: 'samsurproperties@gmail.com',
      subject: template.subject,
      html: template.html,
      text: template.text,
    });

    // Log the contact form submission
    console.log('Contact form submission:', {
      ...contactData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    });

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        contactId: `CONTACT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return a user-friendly error message
    if (error instanceof Error && error.message.includes('Email')) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
} 