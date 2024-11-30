// SHADCN
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

// CUSTOM UI
import DashboardSidebar from '@/components/server/dashbaordSidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <SidebarTrigger />
        <main className='mx-auto w-11/12 lg:w-10/12 xl:max-w-screen-xl'>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
