// AUTH
import { auth } from '@/auth';
import { Session, User } from 'next-auth';

import UserPop from '../client/userPop';

export default async function NavUser() {
  const { user } = (await auth()) as Session;

  return <UserPop user={user as User} />;
}
