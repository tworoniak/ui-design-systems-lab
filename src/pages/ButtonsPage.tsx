import MuiButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Bell, Heart, Trash2 } from 'lucide-react';

import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';
import { Button as ShadcnButton } from '@/components/ui/button';

function CustomButton({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'destructive';
}) {
  const classes = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
    destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
  };

  return (
    <button
      type='button'
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition ${classes[variant]}`}
    >
      {children}
    </button>
  );
}

export default function ButtonsPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Comparison'
        title='Buttons'
        description='Compare prebuilt buttons in shadcn/ui and MUI with a custom button implementation you would typically build yourself alongside Radix primitives.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='Variant-based button component built into your project and easy to extend.'
        >
          <div className='flex flex-wrap gap-3'>
            <ShadcnButton>Primary</ShadcnButton>
            <ShadcnButton variant='secondary'>Secondary</ShadcnButton>
            <ShadcnButton variant='destructive'>Destructive</ShadcnButton>
            <ShadcnButton variant='outline'>Outline</ShadcnButton>
            <ShadcnButton variant='ghost'>Ghost</ShadcnButton>
            <ShadcnButton size='icon' aria-label='Notifications'>
              <Bell className='h-4 w-4' />
            </ShadcnButton>
          </div>
        </DemoCard>

        <DemoCard
          title='MUI'
          description='Prebuilt buttons with a prop-driven API and strong defaults.'
        >
          <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap'>
            <MuiButton variant='contained'>Primary</MuiButton>
            <MuiButton variant='outlined'>Outlined</MuiButton>
            <MuiButton variant='text'>Text</MuiButton>
            <MuiButton
              color='error'
              variant='contained'
              startIcon={<Trash2 className='h-4 w-4' />}
            >
              Destructive
            </MuiButton>
            <MuiButton
              variant='contained'
              startIcon={<Heart className='h-4 w-4' />}
            >
              With icon
            </MuiButton>
          </Stack>
        </DemoCard>

        <DemoCard
          title='Custom buttons (Radix-style workflow)'
          description='Radix gives you primitives for behavior, but for simple controls you often build and style the button yourself.'
        >
          <div className='flex flex-wrap gap-3'>
            <CustomButton>Primary</CustomButton>
            <CustomButton variant='outline'>Outline</CustomButton>
            <CustomButton variant='ghost'>Ghost</CustomButton>
            <CustomButton variant='destructive'>Destructive</CustomButton>
            <CustomButton>
              <Bell className='h-4 w-4' />
              With icon
            </CustomButton>
          </div>
        </DemoCard>
      </div>
    </div>
  );
}
