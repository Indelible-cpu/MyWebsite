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

    // Auto-reply to the subscriber
    const autoReplyOptions = {
      from: `"Indelible Technologies" <${process.env.GMAIL_USER}>`,
      to: email, // Send to the subscriber
      subject: `Welcome to Indelible Technologies!`,
      text: `Hi there,\n\nThank you for subscribing to the Indelible Technologies newsletter! We are excited to have you on board.\n\nWe will keep you updated with the latest news on our software systems, technology tips, and exclusive offers.\n\nBest regards,\nThe Indelible Technologies Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb;">Welcome to Indelible Technologies!</h2>
          <p>Hi there,</p>
          <p>Thank you for subscribing to our newsletter! We are absolutely thrilled to have you on board.</p>
          <p>We'll occasionally send you updates about our latest software systems (like Teachers Bank and MsikaPos), helpful technology tips for your business, and exclusive insights.</p>
          <p>If you ever have any questions or need custom software developed, just reply to this email!</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Indelible Technologies Team</strong></p>
        </div>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

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
