// CUSTOM UI
import UserPopover from '../client/userPopover';

// AUTH SES
import { auth } from '@/auth';

export default async function NavUser() {
  const session = await auth();
  const user = session?.user;

  return <UserPopover user={user} />;
}
