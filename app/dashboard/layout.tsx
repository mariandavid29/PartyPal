import DashboardHeader from '@/components/server/dashboardHeader';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='mx-auto w-11/12 sm:w-10/12 xl:max-w-screen-xl'>
      <DashboardHeader />
      {children}
    </main>
  );
}
