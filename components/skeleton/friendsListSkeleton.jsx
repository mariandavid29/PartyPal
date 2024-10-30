import { Skeleton } from '@/components/ui/skeleton';

export default function FriendsListSkeleton() {
  return (
    <section className='grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {Array.from({ length: 16 }, (_, index) => (
        <Skeleton
          key={index}
          className='flex h-[40px] w-full max-w-sm items-center justify-between rounded-md sm:h-[80px] sm:px-6 sm:py-3'
        />
      ))}
    </section>
  );
}
