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
    const userId = session.user.id;

    const friendship = await prisma.friendship.findUnique({
      where: {
        id: requestId,
      },
    });

    if (!friendship) {
      return NextResponse.json(
        { status: 'fail', message: 'No friendship to delete!' },
        { status: 404 },
      );
    }

    if (
      (friendship.receiverId !== userId && friendship.requesterId !== userId) ||
      friendship.status !== 'ACCEPTED'
    ) {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'You cant delete this friendship!',
        },
        { status: 403 },
      );
    }

    await prisma.friendship.delete({
      where: {
        id: requestId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Something went wrong!',
      },
      { status: 500 },
    );
  }
}
