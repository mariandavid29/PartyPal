import { auth } from '@/auth';

export async function POST(req, res) {
  const session = await auth();
  if (!auth) {
    return res.status(401).json({
      status: 'fail',
      message: 'You are unauthenticated.',
    });
  }

  console.log(session);

  return res.status(200).json({
    status: 'success',
    data: {
      friendRequest: 'test',
    },
  });
}
