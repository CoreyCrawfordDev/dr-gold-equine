import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';

// GET all content
export async function GET() {
  try {
    const content = await prisma.content.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

// POST new content
export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { title, content, section } = await request.json();
    const newContent = await prisma.content.create({
      data: {
        title,
        content,
        section
      }
    });
    return NextResponse.json(newContent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create content' }, { status: 500 });
  }
} 