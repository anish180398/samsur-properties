import { NextResponse } from 'next/server';
import { getPropertyBySlug } from '@/lib/contentful';
import { sendEmail } from '@/lib/email';

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

    // Send email
    await sendEmail({
      to: email,
      subject: `Check out this property: ${property.title}`,
      html: `
        <h1>Property Details: ${property.title}</h1>
        <p>${property.description}</p>
        <p>Price: ${new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
        }).format(property.price)}</p>
        <p>Location: ${property.location}</p>
        <p>View more details: <a href="${propertyUrl}">${propertyUrl}</a></p>
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