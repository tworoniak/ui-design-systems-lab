import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AppShell from '@/components/layout/AppShell';
import PageTransition from '@/components/layout/PageTransition';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  const location = useLocation();

  return (
    <>
      <AppShell>
        <AnimatePresence mode='wait' initial={false}>
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </AppShell>

      <Toaster richColors position='top-right' />
    </>
  );
}
