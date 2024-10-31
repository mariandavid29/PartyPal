'use client';

import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function FriendActionBtn({ action, icon, friendshipId }) {
  const router = useRouter();
  async function onClick() {
    try {
      const res = await fetch(`/api/friends/${friendshipId}/${action}`, {
        method: 'POST',
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button
      onClick={onClick}
      variant='ghost'
      type='button'
    >
      {icon}
    </Button>
  );
}
