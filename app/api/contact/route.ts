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
    const { name, email, subject, message, website } = body ?? {};

    // Honeypot: real visitors never see or fill this field. Silently accept bot submissions.
    if (typeof website === 'string' && website.trim()) {
      return NextResponse.json(
        { message: 'Your message was received. Thank you for contacting us.' },
        { status: 200 }
      );
    }

    if (
      typeof name !== 'string' || !name.trim() ||
      typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== 'string' || !message.trim()
    ) {
      return NextResponse.json(
        { error: 'Please provide a name, valid email address, and message.' },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 254 || message.length > 10000 ||
        (subject !== undefined && subject !== null && (typeof subject !== 'string' || subject.length > 160))) {
      return NextResponse.json(
        { error: 'One or more fields exceed the allowed length.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = typeof subject === 'string' && subject.trim()
      ? subject.trim().replace(/[\r\n]+/g, ' ').slice(0, 160)
      : 'General Inquiry';
    const cleanMessage = message.trim();

    // Escape user-controlled content before embedding it in HTML emails.
    const htmlName = escapeHtml(cleanName);
    const htmlEmail = escapeHtml(cleanEmail);
    const htmlSubject = escapeHtml(cleanSubject);
    const htmlMessage = escapeHtml(cleanMessage).replace(/\r?\n/g, '<br>');

    await prisma.contactMessage.create({
      data: {
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
      },
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: cleanEmail,
      subject: `New Contact Message: ${cleanSubject}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      html: `<h3>New Contact Message</h3>
             <p><strong>Name:</strong> ${htmlName}</p>
             <p><strong>Email:</strong> ${htmlEmail}</p>
             <p><strong>Subject:</strong> ${htmlSubject}</p>
             <p><strong>Message:</strong></p>
             <p>${htmlMessage}</p>`,
    };

    const autoReplyOptions = {
      from: `"Indelible Technologies" <${process.env.GMAIL_USER}>`,
      to: cleanEmail,
      subject: 'We received your message!',
      text: `Hi ${cleanName},\n\nThank you for reaching out to Indelible Technologies! We have received your message regarding "${cleanSubject}" and will get back to you as soon as we can.\n\nFor urgent matters, please contact us on WhatsApp at +265993732694.\n\nBest regards,\nThe Indelible Technologies Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Hi ${htmlName},</p>
          <p>We have received your message regarding <strong>"${htmlSubject}"</strong>.</p>
          <p>Our team will review your request and get back to you as soon as we can.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 14px; color: #666;"><strong>A copy of your message:</strong></p>
          <blockquote style="background: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 0; font-size: 14px;">
            ${htmlMessage}
          </blockquote>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p>If your inquiry is urgent, please feel free to <a href="https://wa.me/265993732694" style="color: #2563eb;">contact us on WhatsApp</a>.</p>
          <p>Best regards,<br /><strong>The Indelible Technologies Team</strong></p>
        </div>
      `,
    };

    try {
      await Promise.all([
        transporter.sendMail(mailOptions),
        transporter.sendMail(autoReplyOptions),
      ]);
    } catch (emailError) {
      // The message is already stored. Do not tell the visitor to retry and create a duplicate record.
      console.error('Contact message saved, but email delivery failed:', emailError);
      return NextResponse.json(
        { message: 'Your message was saved, but email delivery is temporarily unavailable. For urgent enquiries, please contact us on WhatsApp.' },
        { status: 202 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
