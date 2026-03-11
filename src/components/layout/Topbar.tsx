import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Topbar() {
  return (
    <header className='border-b bg-background/80 backdrop-blur'>
      <div className='flex flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8'>
        <div>
          <p className='text-sm text-muted-foreground'>
            React + TypeScript + Radix + shadcn/ui + MUI
          </p>
          <h2 className='text-lg font-semibold'>
            Component comparison playground
          </h2>
        </div>

        <div className='flex items-center gap-3'>
          <Badge variant='secondary'>Design Systems</Badge>
          <Badge variant='outline'>Case Study</Badge>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
