import { NextResponse } from 'next/server';
import { getPropertyBySlug } from '@/lib/contentful';
import { sendEmail } from '@/lib/email-aws';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export async function POST(request: Request) {
  try {
    const {slug, email, propertyUrl } = await request.json();

    // Validate inputs
    if (!slug || !email || !propertyUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get property details
    const property = await getPropertyBySlug(slug);
    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      );
    }

    // Get description safely
    const description = property.description 
      ? (typeof property.description === 'string' 
          ? property.description 
          : documentToPlainTextString(property.description))
      : 'No description available';

    // Send email
    await sendEmail({
      to: email,
      subject: `Check out this property: ${property.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">${property.title}</h1>
          <p style="line-height: 1.6;">${description}</p>
          <p><strong>Price:</strong> ${new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
          }).format(property.price)}</p>
          <p><strong>Location:</strong> ${property.location}</p>
          <div style="margin-top: 20px; text-align: center;">
            <a href="${propertyUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              View Property Details
            </a>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            Shared from Samsur Properties
          </p>
        </div>
      `,
      text: `
${property.title}

${description}

Price: ${new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
}).format(property.price)}

Location: ${property.location}

View more details: ${propertyUrl}

---
Shared from Samsur Properties
      `,
    });

    return NextResponse.json(
      { message: 'Property shared successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sharing property:', error);
    return NextResponse.json(
      { error: 'Failed to share property' },
      { status: 500 }
    );
  }
} 