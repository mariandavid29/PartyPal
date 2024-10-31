import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import prisma from '@/lib/prisma';

export async function POST(req, { params }) {
  try {
    const session = await auth();

    if (!auth) {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'You are unauthenticated!',
        },
        { staus: 401 },
      );
    }

    const { requestId } = await params;
    const receiverId = session.user.id;

    console.log('Ai sters prietenu');

    return NextResponse.json({ status: 'YUPI' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Something went wrong!',
      },
      { status: 400 },
    );
  }
}
