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
    const requesterId = session.user.id;

    const friendshipRequest = await prisma.friendship.findUnique({
      where: {
        id: requestId,
      },
    });

    if (!friendshipRequest) {
      return NextResponse.json(
        { status: 'fail', message: 'No request to delete!' },
        { status: 404 },
      );
    }

    if (
      friendshipRequest.requesterId !== requesterId ||
      friendshipRequest.status !== 'PENDING'
    ) {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'You cant delete this request!',
        },
        { status: 403 },
      );
    }

    await prisma.friendship.delete({
      where: {
        id: requestId,
      },
    });

    // TODO test this out
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
