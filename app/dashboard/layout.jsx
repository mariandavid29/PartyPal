import Navigation from '@/components/server/navigation';
import UserAvatar from '@/components/client/userAvatar';
import UserAvatarSkeleton from '@/components/skeleton/userAvatarSkeleton';
import { Suspense } from 'react';

export default async function DashboardLayout({ children }) {
  return (
    <>
      <Navigation>
        <Suspense fallback={<UserAvatarSkeleton />}>
          <UserAvatar />
        </Suspense>
      </Navigation>
      {children}
    </>
  );
}
