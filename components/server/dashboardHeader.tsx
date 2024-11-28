'use client';

// NEXT
import Link from 'next/link';

// ICONS
import { Disc3 } from 'lucide-react';
import ActiveTabNav from '../client/activeTabNav';

export default function DashboardHeader() {
  const linkRenderer = (href: string, text: string) => {
    return (pathname: string) => {
      return (
        <Link
          href={href}
          key={href}
          className={`${pathname === href ? 'text-red-600' : ''}`}
        >
          {text}
        </Link>
      );
    };
  };

  return (
    <header className='flex h-32 w-full items-center justify-between'>
      <div className='flex items-center justify-start gap-1.5'>
        <Disc3
          className='size-9'
          width={40}
          height={40}
          color='#9333ea'
        />
        <h1 className='text-lg font-bold lg:text-xl'>PartyPal</h1>
      </div>
      <ActiveTabNav
        links={[
          linkRenderer('/dashboard/new-party', 'New Party'),
          linkRenderer('/dashboard/parties', 'Parties'),
          linkRenderer('/dashboard/friends', 'Friends'),
        ]}
      ></ActiveTabNav>
    </header>
  );
}
