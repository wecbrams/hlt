// // app/api/programs/route.ts
// import { prisma } from '@/lib/prisma';
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const { name } = await req.json();
//   const program = await prisma.program.create({ data: { name } });
//   return NextResponse.json(program);
// }

// export async function GET() {
//   const programs = await prisma.program.findMany();
//   return NextResponse.json(programs);
// }
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ error: 'Program name is required' }, { status: 400 });
  }

  const program = await prisma.program.create({ data: { name } });

  return NextResponse.json(program); // ✅ important: always return JSON
}

export async function GET() {
  const programs = await prisma.program.findMany();
  return NextResponse.json(programs); // ✅ always return JSON here too
}
