'use client';
import { signIn } from 'next-auth/react';
import { Button } from '../ui/button';

export default function LoginBtn() {
  return (
    <Button
      size='lg'
      onClick={() => signIn('google', { redirectTo: '/dashboard' })}
    >
      Sign in
    </Button>
  );
}
