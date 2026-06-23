import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a full production environment with Prisma ready:
    // await prisma.contactMessage.create({ data: body });
    
    console.log('Received contact message:', body);

    return NextResponse.json(
      { message: 'Message received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
