'use client';

// AUTH
import { User } from 'next-auth';

// ICONS
import { ChevronsUpDown, LogOut } from 'lucide-react';

// SHADCN
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

// CUSTOM UI
import CustomButton from './customButton';

// CUSTOM LOGIC
import { signOutAction } from '@/actions/authAction';
import { Separator } from '../ui/separator';

export default function UserPop({ user }: { user: User }) {
  const { name, email, image } = user;

  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='h-8 w-8 rounded-lg'>
                <AvatarImage
                  src={image as string}
                  alt={name as string}
                />
                <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{name as string}</span>
                <span className='truncate text-xs'>{name as string}</span>
              </div>
              <ChevronsUpDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage
                    src={image as string}
                    alt={name as string}
                  />
                  <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>
                    {name as string}
                  </span>
                  <span className='truncate text-xs'>{email as string}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuItem>
              <CustomButton
                variant='link'
                onClickAction={signOutAction}
                className='h-full w-full justify-start p-0 text-inherit hover:no-underline'
              >
                <LogOut />
                Sign out
              </CustomButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
