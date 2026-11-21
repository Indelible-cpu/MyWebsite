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

    let dbSaved = false;
    let emailSent = false;

    // 1. Save to Database (independent try/catch so Postgres issues don't block email delivery)
    try {
      await prisma.contactMessage.create({
        data: {
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        },
      });
      dbSaved = true;
    } catch (dbError) {
      console.error('Database save issue (e.g. database sleeping or free tier limit):', dbError);
    }

    // 2. Deliver via Email (independent try/catch)
    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '');

    if (gmailUser && gmailPass) {
      const htmlName = escapeHtml(cleanName);
      const htmlEmail = escapeHtml(cleanEmail);
      const htmlSubject = escapeHtml(cleanSubject);
      const htmlMessage = escapeHtml(cleanMessage).replace(/\r?\n/g, '<br>');

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

            const mailOptions = {
        from: `"${cleanName} (via Indelible Tech Website)" <${gmailUser}>`,
        to: gmailUser,
        replyTo: `"${cleanName}" <${cleanEmail}>`,
        headers: {
          'Reply-To': `"${cleanName}" <${cleanEmail}>`,
        },
        subject: `New Contact Inquiry from ${cleanName}: ${cleanSubject}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\n---\nReply directly by emailing: ${cleanEmail}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1e293b; line-height: 1.5;">
            <h2 style="color: #2563eb; margin-top: 0;">New Contact Inquiry</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; width: 80px; color: #64748b;">From:</td>
                <td style="padding: 6px 0;">${htmlName} (&lt;<a href="mailto:${htmlEmail}" style="color: #2563eb;">${htmlEmail}</a>&gt;)</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Subject:</td>
                <td style="padding: 6px 0;">${htmlSubject}</td>
              </tr>
            </table>

            <div style="margin-bottom: 24px;">
              <p style="font-weight: bold; margin-bottom: 8px; color: #64748b;">Message:</p>
              <blockquote style="background: #f8fafc; border-left: 4px solid #2563eb; margin: 0; padding: 14px 18px; border-radius: 4px; font-size: 15px; color: #0f172a;">
                ${htmlMessage}
              </blockquote>
            </div>

            <div style="margin: 28px 0; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${htmlEmail}?subject=${encodeURIComponent('Re: ' + cleanSubject)}"
                 style="background: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">
                Reply directly to ${htmlName} (${htmlEmail})
              </a>
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">Tip: In Gmail, make sure the "To" address is set to ${htmlEmail} when you reply.</p>
          </div>
        `,
      };

      const autoReplyOptions = {
        from: `"Indelible Technologies" <${gmailUser}>`,
        to: cleanEmail,
        replyTo: gmailUser,
        subject: `We received your message: ${cleanSubject}`,
        text: `Hi ${cleanName},\n\nThank you for reaching out to Indelible Technologies! Your message regarding "${cleanSubject}" has been received and our team will get back to you within 24 hours.\n\nFor urgent inquiries, feel free to contact us on WhatsApp at +265993732694.\n\nBest regards,\nThe Indelible Technologies Team`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
            <h2 style="color: #2563eb; margin-top: 0;">Thank you for reaching out to Indelible Technologies!</h2>
            <p>Hi ${htmlName},</p>
            <p>Your message regarding <strong>"${htmlSubject}"</strong> has been received and our team will get back to you within 24 hours.</p>
            <p>For urgent inquiries, feel free to <a href="https://wa.me/265993732694" style="color: #2563eb; font-weight: bold;">contact us on WhatsApp</a>.</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 13px; color: #64748b; font-weight: bold;">A copy of your message:</p>
            <blockquote style="background: #f8fafc; padding: 14px 18px; border-left: 4px solid #2563eb; margin: 0; font-size: 14px; border-radius: 4px; color: #334155;">
              ${htmlMessage}
            </blockquote>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="margin-bottom: 4px;">Best regards,</p>
            <p style="margin-top: 0;"><strong>The Indelible Technologies Team</strong><br/><a href="https://indelibletech.vercel.app" style="color: #2563eb; font-size: 13px;">indelibletech.vercel.app</a></p>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
        // Attempt customer auto-reply
        try {
          await transporter.sendMail(autoReplyOptions);
        } catch (autoReplyErr) {
          console.error('Customer auto-reply failed:', autoReplyErr);
        }
      } catch (emailError) {
        console.error('Admin email delivery failed:', emailError);
      }
    } else {
      console.warn('GMAIL_USER or GMAIL_APP_PASSWORD is not defined in this environment.');
    }

    // If message is either saved to DB or sent via email, customer was successfully served
    if (dbSaved || emailSent) {
      return NextResponse.json(
        { message: 'Thank you for reaching out to Indelible Technologies! Your message has been received and our team will get back to you within 24 hours. For urgent inquiries, feel free to contact us on WhatsApp.' },
        { status: 200 }
      );
    }

    // Fallback only if both database and email completely failed
    return NextResponse.json(
      { error: 'We could not submit your message just now. Please contact us directly on WhatsApp at +265993732694.' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or reach out on WhatsApp.' },
      { status: 500 }
    );
  }
}
