import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import LinkWithIdicator from '@/components/client/linkWithIndicator';

import NewFriendForm from '@/components/client/newFriendForm';

export default function FriendsLayout({ children }) {
  return (
    <section>
      <div className='mt-10 flex w-full flex-col items-center justify-center gap-6 sm:mt-20 lg:mt-28'>
        <NavigationMenu className='w-full max-w-none'>
          <NavigationMenuList className='sm:gap-4'>
            <LinkWithIdicator
              href='/dashboard/friends'
              className='bg-accent'
            >
              Friends
            </LinkWithIdicator>
            <LinkWithIdicator
              href='/dashboard/friends/received'
              className='bg-accent'
            >
              Received
            </LinkWithIdicator>
            <LinkWithIdicator
              href='/dashboard/friends/sent'
              className='bg-accent'
            >
              Sent
            </LinkWithIdicator>
          </NavigationMenuList>
        </NavigationMenu>
        <NewFriendForm />
      </div>
      {children}
    </section>
  );
}
