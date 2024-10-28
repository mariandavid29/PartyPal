'use client';
import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

export default function LogoutBtn() {
  return (
    <Button
      className='text-red-600'
      variant='link'
      size='sm'
      onClick={() => signOut({ redirectTo: '/' })}
    >
      Sign out
    </Button>
  );
}
