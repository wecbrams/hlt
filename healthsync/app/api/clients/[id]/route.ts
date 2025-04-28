import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import type { RouteHandlerContext } from 'next';

export async function GET(req: NextRequest, context: RouteHandlerContext<{ id: string }>) {
  const { id } = context.params;

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
