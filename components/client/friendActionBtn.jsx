'use client';

import { Button } from '../ui/button';

export default function FriendActionBtn({ action, icon, friendshipId }) {
  async function onClick() {
    try {
      const res = await fetch(`/api/friends/${friendshipId}/${action}`, {
        method: 'POST',
      });
      const data = await res.json();
      console.log(data);
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
