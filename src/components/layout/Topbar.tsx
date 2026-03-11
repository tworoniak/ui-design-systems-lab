import { Badge } from '@/components/ui/badge';
import MobileNav from '@/components/layout/MobileNav';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Topbar() {
  return (
    <header className='border-b bg-background/80 backdrop-blur'>
      <div className='flex items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-8'>
        <div className='flex min-w-0 items-center gap-3'>
          <MobileNav />

          <div className='min-w-0'>
            <p className='truncate text-sm text-muted-foreground'>
              React + TypeScript + Radix + shadcn/ui + MUI
            </p>
            <h2 className='truncate text-base font-semibold sm:text-lg'>
              Design systems case study
            </h2>
          </div>
        </div>

        <div className='flex shrink-0 items-center gap-2'>
          <Badge variant='secondary' className='hidden sm:inline-flex'>
            Design Systems
          </Badge>
          <Badge variant='outline' className='hidden lg:inline-flex'>
            Case Study
          </Badge>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
