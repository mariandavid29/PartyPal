import { Suspense } from 'react';

import FriendsList from '@/components/server/friendsList';
import FriendsListSkeleton from '@/components/skeleton/friendsListSkeleton';

export default function ReceivedRequestsPage() {
  return (
    <section className='mx-auto mt-10 max-w-screen-xl'>
      <Suspense fallback={<FriendsListSkeleton />}>
        <FriendsList query='received' />
      </Suspense>
    </section>
  );
}
