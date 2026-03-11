import type { ReactNode } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import Footer from './Footer';

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='grid min-h-screen md:grid-cols-[260px_1fr]'>
        <Sidebar />
        <div className='flex min-h-screen min-w-0 flex-col'>
          <Topbar />
          <main className='flex-1 p-4 sm:p-6 md:p-8'>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
