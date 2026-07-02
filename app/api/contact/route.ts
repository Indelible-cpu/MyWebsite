import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // Save message to the database for the Admin Dashboard
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject: subject || 'General Inquiry',
        message,
      }
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
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Contact Message: ${subject || 'No Subject'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<h3>New Contact Message</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    // Auto-reply to the user who contacted
    const autoReplyOptions = {
      from: `"Indelible Technologies" <${process.env.GMAIL_USER}>`,
      to: email, // Send back to the person who filled out the form
      subject: `We received your message!`,
      text: `Hi ${name},\n\nThank you for reaching out to Indelible Technologies!\n\nWe have received your message regarding "${subject || 'your inquiry'}" and our team is reviewing it. We will get back to you within 24 hours.\n\nFor urgent matters, please contact us on WhatsApp at +265993732694.\n\nBest regards,\nThe Indelible Technologies Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We have successfully received your message regarding <strong>"${subject || 'your inquiry'}"</strong>.</p>
          <p>One of our team members is reviewing your request and will get back to you within 24 hours.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;"/>
          <p style="font-size: 14px; color: #666;"><strong>A copy of your message:</strong></p>
          <blockquote style="background: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 0; font-size: 14px;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;"/>
          <p>If your inquiry is urgent, please feel free to <a href="https://wa.me/265993732694" style="color: #2563eb;">contact us on WhatsApp</a>.</p>
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
