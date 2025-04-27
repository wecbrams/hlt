import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Client ID missing' }, { status: 400 });
  }

  const client = await prisma.client.findUnique({
    where: { id: Number(id) },
    include: { enrollments: { include: { program: true } } },
  });

  if (!client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 });
  }

  return NextResponse.json(client);
}
