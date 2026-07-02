import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { subject, message } = await request.json();

    if (!subject || !message) {
      return NextResponse.json({ error: 'Subject and message are required.' }, { status: 400 });
    }

    const subscribers = await prisma.newsletterSubscription.findMany();

    if (subscribers.length === 0) {
      return NextResponse.json({ error: 'No subscribers found to send to.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const bccList = subscribers.map((sub) => sub.email).join(', ');

    const mailOptions = {
      from: `"Indelible Technologies" <${process.env.GMAIL_USER}>`,
      bcc: bccList, // BCC hides everyone's email from each other
      subject: subject,
      text: message,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #2563eb;">Indelible Technologies</h2>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #888;">
            <p>You received this email because you are subscribed to the Indelible Technologies newsletter.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: `Newsletter successfully sent to ${subscribers.length} subscribers!` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending newsletter:', error);
    return NextResponse.json(
      { error: 'Failed to send the newsletter. Please check the logs.' },
      { status: 500 }
    );
  }
}
