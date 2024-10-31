import prisma from '@/lib/prisma';
import FriendComponent from '@/components/client/friendComponent';
import { auth } from '@/auth';

export default async function FriendsList({ query }) {
  const session = await auth();

  let list;
  if (query === 'received') {
    list = await prisma.friendship.findMany({
      where: {
        receiverId: session.user.id,
        status: 'PENDING',
      },
      include: {
        requester: true,
      },
    });
  } else if (query === 'friends') {
    list = await prisma.friendship.findMany({
      where: {
        AND: [
          {
            OR: [
              { receiverId: session.user.id },
              { requesterId: session.user.id },
            ],
          },
          { status: 'ACCEPTED' },
        ],
      },
      include: {
        requester: true,
        receiver: true,
      },
    });
    list = list.map((friendship) => {
      return friendship.requesterId === session.user.id
        ? { friendshipId: friendship.id, ...friendship.receiver }
        : { friendshipId: friendship.id, ...friendship.requester };
    });
  } else if (query === 'sent') {
    list = await prisma.friendship.findMany({
      where: {
        requesterId: session.user.id,
        status: 'PENDING',
      },
      include: {
        receiver: true,
      },
    });
  }
  return (
    <>
      {list.length ? (
        <div className='grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {list.map((entry) => (
            <FriendComponent
              key={entry.id}
              data={entry}
              query={query}
            />
          ))}
        </div>
      ) : (
        <div className='mt-8 flex w-full items-center justify-center sm:mt-16'>
          <p className='text-center text-lg sm:text-xl lg:text-2xl'>
            Nothing to see here 🥲
          </p>
        </div>
      )}
    </>
  );
}
