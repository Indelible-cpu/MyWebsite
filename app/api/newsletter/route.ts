import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // In a production environment, you would save this to your database:
    // await prisma.newsletterSubscription.create({ data: { email } });
    console.log('Received newsletter subscription for:', email);

    return NextResponse.json(
      { message: 'Thank you for subscribing to our newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
