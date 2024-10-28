import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import LinkWithIdicator from '@/components/client/linkWithIndicator';

import NewFriendForm from '@/components/client/newFriendForm';

export default function FriendsLayout({ children }) {
  return (
    <section>
      <div className='flex flex-col items-center justify-center'>
        <NewFriendForm />
        <NavigationMenu>
          <NavigationMenuList>
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
              Received Requests
            </LinkWithIdicator>

            <LinkWithIdicator
              href='/dashboard/friends/sent'
              className='bg-accent'
            >
              Sent Requests
            </LinkWithIdicator>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {children}
    </section>
  );
}
