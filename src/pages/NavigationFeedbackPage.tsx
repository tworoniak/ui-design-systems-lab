import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as ToastPrimitive from '@radix-ui/react-toast';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import MuiButton from '@mui/material/Button';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MuiLinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';

function ShadcnNavFeedbackDemo() {
  const [progress, setProgress] = React.useState(62);

  return (
    <div className='space-y-6'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Navigation & Feedback</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='flex flex-wrap gap-3'>
        <Button
          onClick={() =>
            toast.success('Changes saved', {
              description: 'Your component settings were updated successfully.',
            })
          }
        >
          Show success toast
        </Button>

        <Button
          variant='outline'
          onClick={() => setProgress((p) => Math.min(100, p + 10))}
        >
          Increase progress
        </Button>
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between text-sm'>
          <span>Migration progress</span>
          <span className='text-muted-foreground'>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className='rounded-xl border p-4'>
        <p className='text-sm font-medium'>Why it feels modern</p>
        <p className='mt-2 text-sm text-muted-foreground'>
          shadcn navigation and feedback patterns feel lightweight because the
          components are local, composable, and utility-styled.
        </p>
      </div>
    </div>
  );
}

function MuiNavFeedbackDemo() {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(62);

  return (
    <div className='space-y-6'>
      <MuiBreadcrumbs aria-label='breadcrumb'>
        <MuiLink underline='hover' color='inherit' href='#'>
          Dashboard
        </MuiLink>
        <MuiLink underline='hover' color='inherit' href='#'>
          Components
        </MuiLink>
        <span>Navigation & Feedback</span>
      </MuiBreadcrumbs>

      <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap'>
        <MuiButton variant='contained' onClick={() => setOpen(true)}>
          Show snackbar
        </MuiButton>

        <MuiButton
          variant='outlined'
          onClick={() => setProgress((p) => Math.min(100, p + 10))}
        >
          Increase progress
        </MuiButton>
      </Stack>

      <div className='space-y-2'>
        <div className='flex items-center justify-between text-sm'>
          <span>Migration progress</span>
          <span className='text-muted-foreground'>{progress}%</span>
        </div>
        <MuiLinearProgress variant='determinate' value={progress} />
      </div>

      <div className='rounded-xl border p-4'>
        <p className='text-sm font-medium'>Why it feels fast</p>
        <p className='mt-2 text-sm text-muted-foreground'>
          MUI gives you polished feedback and nav helpers quickly with minimal
          custom assembly.
        </p>
      </div>

      <MuiSnackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert
          onClose={() => setOpen(false)}
          severity='success'
          variant='filled'
        >
          Your component settings were updated successfully.
        </MuiAlert>
      </MuiSnackbar>
    </div>
  );
}

function RadixToastDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <ToastPrimitive.Provider swipeDirection='right'>
      <div className='flex flex-wrap gap-3'>
        <button
          type='button'
          onClick={() => setOpen(true)}
          className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90'
        >
          Show toast
        </button>
      </div>

      <ToastPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        className='rounded-xl border bg-background p-4 shadow-lg'
      >
        <ToastPrimitive.Title className='text-sm font-semibold'>
          Changes saved
        </ToastPrimitive.Title>
        <ToastPrimitive.Description className='mt-1 text-sm text-muted-foreground'>
          Your component settings were updated successfully.
        </ToastPrimitive.Description>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className='fixed bottom-4 right-4 z-50 flex w-90 max-w-[calc(100vw-2rem)] flex-col gap-2 outline-none' />
    </ToastPrimitive.Provider>
  );
}

function RadixProgressDemo() {
  const [progress, setProgress] = React.useState(62);

  return (
    <div className='space-y-4'>
      <button
        type='button'
        onClick={() => setProgress((p) => Math.min(100, p + 10))}
        className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-accent'
      >
        Increase progress
      </button>

      <div className='space-y-2'>
        <div className='flex items-center justify-between text-sm'>
          <span>Migration progress</span>
          <span className='text-muted-foreground'>{progress}%</span>
        </div>

        <ProgressPrimitive.Root
          value={progress}
          className='relative h-2 w-full overflow-hidden rounded-full bg-muted'
        >
          <ProgressPrimitive.Indicator
            className='h-full bg-primary transition-all'
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </ProgressPrimitive.Root>
      </div>
    </div>
  );
}

function RadixNavFeedbackDemo() {
  return (
    <div className='space-y-6'>
      <nav aria-label='Breadcrumb' className='text-sm text-muted-foreground'>
        <ol className='flex flex-wrap items-center gap-2'>
          <li>
            <a href='#' className='hover:text-foreground'>
              Dashboard
            </a>
          </li>
          <li>/</li>
          <li>
            <a href='#' className='hover:text-foreground'>
              Components
            </a>
          </li>
          <li>/</li>
          <li className='text-foreground'>Navigation & Feedback</li>
        </ol>
      </nav>

      <RadixToastDemo />
      <RadixProgressDemo />

      <div className='rounded-xl border p-4'>
        <p className='text-sm font-medium'>Why it feels flexible</p>
        <p className='mt-2 text-sm text-muted-foreground'>
          With Radix, behavior primitives are separate from presentation, so you
          can make the UI feel exactly like your own design system.
        </p>
      </div>
    </div>
  );
}

export default function NavigationFeedbackPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Comparison'
        title='Navigation & Feedback'
        description='Compare breadcrumbs, toasts/snackbars, progress indicators, and lightweight navigation patterns across shadcn/ui, MUI, and Radix.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='App-ready nav and feedback components that feel very natural in modern product UIs.'
        >
          <ShadcnNavFeedbackDemo />
        </DemoCard>

        <DemoCard
          title='MUI'
          description='High-level navigation and feedback components that are fast to assemble and consistent.'
        >
          <MuiNavFeedbackDemo />
        </DemoCard>

        <DemoCard
          title='Radix + custom styling'
          description='Primitive-based approach that gives you control over both accessibility behavior and final visuals.'
        >
          <RadixNavFeedbackDemo />
        </DemoCard>
      </div>
    </div>
  );
}
