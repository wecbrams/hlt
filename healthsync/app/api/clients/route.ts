// // import { prisma } from '@/lib/prisma';
// // import { NextResponse } from 'next/server';

// // export async function GET(req: Request) {
// //   const { searchParams } = new URL(req.url);
// //   const q = searchParams.get('q');

// //   try {
// //     if (!q) {
// //       // If no search query provided, return all clients
// //       const allClients = await prisma.client.findMany({
// //         include: { enrollments: { include: { program: true } } },
// //       });
// //       return NextResponse.json(allClients);
// //     } else {
// //       // Otherwise, search normally
// //       const clients = await prisma.client.findMany({
// //         where: {
// //           OR: [
// //             { name: { contains: q, mode: 'insensitive' } },
// //             { id: Number(q) || 0 }, // allow searching by ID also
// //           ],
// //         },
// //         include: { enrollments: { include: { program: true } } },
// //       });
// //       return NextResponse.json(clients);
// //     }
// //   } catch (error) {
// //     console.error('GET clients failed', error);
// //     return NextResponse.json({ error: 'Server error' }, { status: 500 });
// //   }
// // }
// import { prisma } from '@/lib/prisma';
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const { name, age, symptoms } = await req.json();

//   if (!name || !age || !symptoms) {
//     return NextResponse.json({ error: 'Name, age and symptoms are required' }, { status: 400 });
//   }

//   const client = await prisma.client.create({
//     data: { name, age, symptoms },
//   });

//   return NextResponse.json(client);
// }

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const q = searchParams.get('q');

//   try {
//     if (!q) {
//       // No search query — return ALL clients
//       const allClients = await prisma.client.findMany({
//         include: { enrollments: { include: { program: true } } },
//       });
//       return NextResponse.json(allClients);
//     }

//     const clients = await prisma.client.findMany({
//       where: {
//         OR: [
//           { name: { contains: q, mode: 'insensitive' } },
//           { id: Number(q) || 0 },
//         ],
//       },
//       include: { enrollments: { include: { program: true } } },
//     });

//     return NextResponse.json(clients);
//   } catch (error) {
//     console.error('GET /api/clients error:', error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, age, symptoms } = await req.json();

  if (!name || !age || !symptoms) {
    return NextResponse.json({ error: 'Name, age and symptoms are required' }, { status: 400 });
  }

  const client = await prisma.client.create({
    data: { name, age, symptoms },
  });

  return NextResponse.json(client);
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q') || '';

    if (q.trim() === '') {
      const allClients = await prisma.client.findMany({
        include: { enrollments: { include: { program: true } } },
      });
      return NextResponse.json(allClients);
    }

    const clients = await prisma.client.findMany({
      where: {
        OR: [
          { name: { contains: q } },

          // { name: { contains: q, mode: 'insensitive' } },
          { id: Number(q) || 0 },
        ],
      },
      include: { enrollments: { include: { program: true } } },
    });

    return NextResponse.json(clients);
  } catch (error) {
    console.error('GET /api/clients error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
