import { Outlet } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <>
      <AppShell>
        <Outlet />
      </AppShell>
      <Toaster richColors position='top-right' />
    </>
  );
}
