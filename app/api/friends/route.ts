import { auth } from '@/auth';
import prisma from '@/lib/prisma';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
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

    const { email: friendEmail } = await req.json();

    const futureFriend = await prisma.user.findUnique({
      where: {
        email: friendEmail,
      },
    });

    if (!futureFriend) {
      return NextResponse.json(
        { status: 'fail', message: 'The user does not exist!' },
        { status: 404 },
      );
    }

    const requesterId = session.user.id;
    const receiverId = futureFriend.id;

    if (requesterId === receiverId) {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'Why friend yourself?',
        },
        { status: 400 },
      );
    }

    const friendRequest = await prisma.friendship.findFirst({
      where: {
        OR: [
          { requesterId: requesterId, receiverId: receiverId },
          { requesterId: receiverId, receiverId: requesterId },
        ],
      },
    });

    if (friendRequest?.status === 'ACCEPTED') {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'You are already friends!',
        },
        { status: 400 },
      );
    }

    if (friendRequest?.requesterId === requesterId) {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'Request already sent!',
        },
        { status: 400 },
      );
    }

    if (
      friendRequest?.status === 'PENDING' &&
      friendRequest?.requesterId === receiverId
    ) {
      const newFriend = await prisma.friendship.update({
        where: {
          requesterId_receiverId: {
            requesterId: receiverId,
            receiverId: requesterId,
          },
        },
        data: {
          status: 'ACCEPTED',
        },
      });
      return NextResponse.json(
        {
          status: 'success',
          data: {
            newFriend,
          },
        },
        { status: 200 },
      );
    }

    const newFriendRequest = await prisma.friendship.create({
      data: { requesterId, receiverId },
    });
    return NextResponse.json(
      {
        status: 'success',
        data: {
          friendRequest: newFriendRequest,
        },
      },
      { status: 201 },
    );
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
