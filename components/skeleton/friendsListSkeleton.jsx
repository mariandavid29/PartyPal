import { Skeleton } from '@/components/ui/skeleton';

export default function FriendsListSkeleton() {
  return (
    <div className='flex items-center space-x-5'>
      <Skeleton className='h-10 w-10 rounded-full sm:h-12 sm:w-12' />
      <Skeleton className='hidden h-5 w-[150px] sm:block' />
    </div>
  );
}
