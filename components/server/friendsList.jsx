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
        // status: 'PENDING'
      },
      include: {
        requester: true,
      },
    });
  }

  return (
    <div className='grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {list.length ? (
        list.map((entry, index) => (
          <FriendComponent
            key={index}
            data={entry}
            query={query}
          />
        ))
      ) : (
        <span>NO RECEIVED REQUESTS</span>
      )}
    </div>
  );
}
