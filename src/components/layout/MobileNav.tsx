import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

import { navItems } from '@/components/layout/navItems';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='md:hidden'
          aria-label='Open navigation menu'
        >
          <Menu className='h-5 w-5' />
        </Button>
      </SheetTrigger>

      <SheetContent side='left' className='w-75 p-0'>
        <SheetHeader className='border-b px-6 py-5 text-left'>
          <p className='text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
            Design Systems
          </p>
          <SheetTitle className='mt-2 text-xl'>UI Systems Lab</SheetTitle>
        </SheetHeader>

        <nav className='p-4'>
          <ul className='space-y-2'>
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                    ].join(' ')
                  }
                >
                  <Icon className='h-4 w-4' />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
