import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { LogOut, ChevronDown, UserRoundPlus } from 'lucide-react';

import { auth } from '@/auth';
import LogoutBtn from './logoutBtn';
import Link from 'next/link';

export default async function UserAvatar() {
  const {
    user: { name, image },
  } = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center justify-center gap-3 sm:justify-start sm:gap-5'>
          <Avatar className='sm:h-12 sm:w-12'>
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className='hidden font-medium sm:block sm:text-lg'>{name}</p>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        className='mr-3 w-48 sm:mr-0 sm:w-56 md:w-60'
      >
        <DropdownMenuLabel className='hidden sm:block sm:text-lg'>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuLabel className='sm:hidden'>
          <p>{name}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserRoundPlus />
          <Button
            asChild
            size='sm'
            variant='link'
            color=''
          >
            <Link href='/dashboard/friends'>Friends</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className='text-red-600' />
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
