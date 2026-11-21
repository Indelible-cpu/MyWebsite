import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    let dbSaved = false;
    let emailSent = false;

    // 1. Save subscription to database
    try {
      const existing = await prisma.newsletterSubscription.findUnique({
        where: { email },
      });

      if (existing) {
        return NextResponse.json(
          { message: 'This email is already subscribed. Thank you!' },
          { status: 200 }
        );
      }

      await prisma.newsletterSubscription.create({
        data: { email },
      });
      dbSaved = true;
    } catch (dbError) {
      console.error('Newsletter database save issue:', dbError);
    }

    // 2. Deliver notifications via Email
    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '');

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const htmlEmail = escapeHtml(email);
      const mailOptions = {
        from: gmailUser,
        to: gmailUser,
        subject: 'New Newsletter Subscriber!',
        text: `You have a new subscriber to your newsletter!\n\nEmail: ${email}`,
        html: `<h3>New Newsletter Subscriber!</h3>
               <p>A new user has subscribed to the newsletter.</p>
               <p><strong>Subscriber Email:</strong> ${htmlEmail}</p>`,
      };

      const autoReplyOptions = {
        from: `"Indelible Technologies" <${gmailUser}>`,
        to: email,
        subject: 'Welcome to Indelible Technologies!',
        text: `Hi there,\n\nThank you for subscribing to the Indelible Technologies newsletter! We will occasionally share updates about MsikaFlo, Teachers Bank, helpful technology tips, and new services.\n\nBest regards,\nThe Indelible Technologies Team`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #2563eb;">Welcome to Indelible Technologies!</h2>
            <p>Hi there,</p>
            <p>Thank you for subscribing to our newsletter.</p>
            <p>We'll occasionally send updates about MsikaFlo, Teachers Bank, helpful technology tips, and services for your business or organisation.</p>
            <p>If you have questions or need custom software, you can reply to this email.</p>
            <p>Best regards,<br /><strong>The Indelible Technologies Team</strong></p>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
        try {
          await transporter.sendMail(autoReplyOptions);
        } catch (autoErr) {
          console.warn('Newsletter auto-reply warning:', autoErr);
        }
      } catch (emailError) {
        console.error('Newsletter admin notification failed:', emailError);
      }
    }

    if (dbSaved || emailSent) {
      return NextResponse.json(
        { message: 'Thank you for subscribing to our newsletter!' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
