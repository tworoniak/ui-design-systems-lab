import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className='flex items-center gap-2'>
      <Button
        size='icon'
        variant={theme === 'light' ? 'default' : 'outline'}
        onClick={() => setTheme('light')}
      >
        <Sun className='h-4 w-4' />
      </Button>

      <Button
        size='icon'
        variant={theme === 'dark' ? 'default' : 'outline'}
        onClick={() => setTheme('dark')}
      >
        <Moon className='h-4 w-4' />
      </Button>
    </div>
  );
}
