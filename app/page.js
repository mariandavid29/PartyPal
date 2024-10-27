import LoginBtn from '@/components/client/loginBtn';
import Navigation from '@/components/server/navigation';
export default async function Home() {
  return (
    <Navigation>
      <LoginBtn />
    </Navigation>
  );
}
