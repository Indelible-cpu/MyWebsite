import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const subscribers = await prisma.newsletterSubscription.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ subscribers, messages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching data.' },
      { status: 500 }
    );
  }
}
