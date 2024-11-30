// SHADCN
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

// ICONS
import { Disc3 } from 'lucide-react';

// CUSTOM UI
import InnerNav from '../client/innerNav';
import NavUser from './navUser';

// REACT
import { Suspense } from 'react';

//NEXT
import Link from 'next/link';

const partiesNav = [
  {
    title: 'Parties',
    items: [
      {
        title: 'New Party',
        url: '/dashboard/new-party',
      },
      {
        title: 'Upcoming Parties',
        url: '/dashboard/parties',
      },
      {
        title: 'Memories',
        url: '/dashboard/parties',
      },
    ],
  },
];

const friendsNav = [
  {
    title: 'Friends',
    items: [
      {
        title: 'Your Friends',
        url: '/dashboard/friends',
      },
      {
        title: 'Pending Requests',
        url: '/dashboard/friends',
      },
      {
        title: 'Sent Requests',
        url: '/dashboard/friends',
      },
    ],
  },
];

export default function DashboardSidebar() {
  return (
    <Sidebar variant='inset'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size='lg'
            >
              <Link
                href='/dashboard'
                className='flex items-center justify-start gap-1.5'
              >
                <div className='flex size-9 items-center justify-center'>
                  <Disc3
                    className='h-11/12 w-11/12'
                    width={40}
                    height={40}
                    color='#9333ea'
                  />
                </div>
                <h1 className='text-lg font-bold lg:text-xl xl:text-2xl'>
                  PartyPal
                </h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='mt-10'>
        <InnerNav items={partiesNav} />
        <InnerNav items={friendsNav} />
      </SidebarContent>
      <SidebarFooter>
        <Suspense fallback={<p>Loading...</p>}>
          <NavUser />
        </Suspense>
      </SidebarFooter>
    </Sidebar>
  );
}
