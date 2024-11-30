import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import prisma from '@/lib/prisma';
export async function POST(
  req: Request,
  { params }: { params: Promise<{ requestId: string }> },
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'You are unauthenticated!',
        },
        { status: 401 },
      );
    }

    const { requestId } = await params;
    const receiverId = session.user.id;
    const receivedRequest = await prisma.friendship.findUnique({
      where: {
        id: requestId,
      },
    });

    if (
      receivedRequest?.receiverId !== receiverId ||
      receivedRequest?.status !== 'PENDING'
    ) {
      return NextResponse.json(
        { status: 'fail', message: 'The request does not exist!' },
        { status: 400 },
      );
    }

    const newFriendship = await prisma.friendship.update({
      where: {
        id: requestId,
      },
      data: {
        status: 'ACCEPTED',
      },
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          friendship: newFriendship,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Something went wrong!',
      },
      { status: 500 },
    );
  }
}
