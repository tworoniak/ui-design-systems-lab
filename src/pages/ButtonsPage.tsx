import MuiButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as Dialog from '@radix-ui/react-dialog';
import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';
import { Button as ShadcnButton } from '@/components/ui/button';

function RadixButtonDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='inline-flex h-10 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black'>
          Radix Trigger Button
        </button>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}

export default function ButtonsPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Comparison'
        title='Buttons'
        description='Compare the same button ideas across shadcn/ui, MUI, and Radix-based custom implementation.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='Variant-driven button component with Tailwind styling.'
        >
          <div className='flex flex-wrap gap-3'>
            <ShadcnButton>Primary</ShadcnButton>
            <ShadcnButton variant='secondary'>Secondary</ShadcnButton>
            <ShadcnButton variant='destructive'>Destructive</ShadcnButton>
            <ShadcnButton variant='outline'>Outline</ShadcnButton>
            <ShadcnButton variant='ghost'>Ghost</ShadcnButton>
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
            <MuiButton color='error' variant='contained'>
              Destructive
            </MuiButton>
          </Stack>
        </DemoCard>

        <DemoCard
          title='Radix + custom styling'
          description='Radix is primitive-first, so you often style your own trigger or control.'
        >
          <div className='flex flex-wrap gap-3'>
            <RadixButtonDemo />
            <button className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition hover:bg-accent'>
              Custom Outline
            </button>
            <button className='inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition hover:bg-accent'>
              Custom Ghost
            </button>
          </div>
        </DemoCard>
      </div>
    </div>
  );
}
