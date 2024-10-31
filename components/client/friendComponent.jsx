import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import FriendActionBtn from './friendActionBtn';
import { Check, X } from 'lucide-react';

export default function FriendComponent({ data, query }) {
  let user;
  if (query === 'received') {
    user = data.requester;
  } else if (query === 'sent') {
    user = data.receiver;
  } else if (query === 'friends') {
    user = data;
  }

  return (
    <article className='flex w-full max-w-sm items-center justify-between rounded-md sm:px-6 sm:py-3 sm:shadow-md'>
      <div className='flex items-center justify-start gap-3'>
        <Avatar className='sm:h-12 sm:w-12'>
          <AvatarImage src={user.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className='text-base'>
          {user.name.length > 20 ? `${user.name.slice(0, 20)}...` : user.name}
        </p>
      </div>
      <div>
        {query === 'received' && (
          <FriendActionBtn
            friendshipId={data.id}
            action='accept'
            icon={<Check />}
          />
        )}
        {query === 'received' && (
          <FriendActionBtn
            friendshipId={data.id}
            action='decline'
            icon={<X />}
          />
        )}
        {query === 'friends' && (
          <FriendActionBtn
            friendshipId={data.friendshipId}
            action='remove-friend'
            icon={<X />}
          />
        )}
        {query === 'sent' && (
          <FriendActionBtn
            friendshipId={data.id}
            action='remove-request'
            icon={<X />}
          />
        )}
      </div>
    </article>
  );
}
