// SHADCN
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

//CUSTOM UI
import DashboardSidebar from '@/components/server/dashboardSidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
