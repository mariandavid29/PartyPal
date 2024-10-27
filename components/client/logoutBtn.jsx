'use client';
import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

export default function LogoutBtn() {
  return (
    <Button
      variant='link'
      size='sm'
      onClick={() => signOut({ redirectTo: '/' })}
    >
      Sign out
    </Button>
  );
}
