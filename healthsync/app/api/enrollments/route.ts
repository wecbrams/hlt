// app/api/enrollments/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { clientId, programId } = await req.json();
  const enrollment = await prisma.enrollment.create({
    data: { clientId, programId },
  });
  return NextResponse.json(enrollment);
}
