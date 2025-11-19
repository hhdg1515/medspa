import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 5) { // Max 5 requests per minute
    return false;
  }

  limit.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const { fullName, email, mobile, preferredLanguage, interestedIn, message, agreeToPolicy } = body;

    // Validation
    if (!fullName || !email || !mobile) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, and mobile are required.' },
        { status: 400 }
      );
    }

    if (!agreeToPolicy) {
      return NextResponse.json(
        { error: 'You must agree to the privacy policy.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email),
      mobile: sanitizeInput(mobile),
      preferredLanguage: preferredLanguage || 'en',
      interestedIn: Array.isArray(interestedIn) ? interestedIn : [],
      message: message ? sanitizeInput(message) : '',
      submittedAt: new Date().toISOString(),
      ip: ip,
    };

    // TODO: Implement actual email sending or CRM integration
    // Examples:
    // - Send email via SendGrid, AWS SES, or Resend
    // - Save to database
    // - Send to CRM (HubSpot, Salesforce, etc.)

    console.log('Contact form submission:', sanitizedData);

    // For now, just log and return success
    // In production, you would:
    // 1. Send email notification to clinic
    // 2. Send confirmation email to user
    // 3. Save to database
    // 4. Integrate with CRM

    // Simulate email sending (replace with actual implementation)
    if (process.env.NODE_ENV === 'production') {
      // Example with SendGrid:
      // await sendEmail({
      //   to: process.env.CONTACT_EMAIL,
      //   from: 'noreply@yourdomain.com',
      //   subject: 'New Contact Form Submission',
      //   html: generateEmailHTML(sanitizedData)
      // });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you shortly.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: Helper function to generate email HTML
function generateEmailHTML(data: any): string {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.mobile}</p>
    <p><strong>Language:</strong> ${data.preferredLanguage}</p>
    <p><strong>Interested In:</strong> ${data.interestedIn.join(', ')}</p>
    <p><strong>Message:</strong><br>${data.message || 'No message'}</p>
    <p><strong>Submitted:</strong> ${data.submittedAt}</p>
  `;
}
