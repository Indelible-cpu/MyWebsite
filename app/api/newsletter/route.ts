import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `New Newsletter Subscriber!`,
      text: `You have a new subscriber to your newsletter!\n\nEmail: ${email}`,
      html: `<h3>New Newsletter Subscriber!</h3>
             <p>A new user has just subscribed to your newsletter.</p>
             <p><strong>Subscriber Email:</strong> ${email}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Thank you for subscribing to our newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
