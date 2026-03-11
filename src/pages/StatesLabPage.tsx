import MuiAlert from '@mui/material/Alert';
import MuiButton from '@mui/material/Button';
import MuiSkeleton from '@mui/material/Skeleton';

import { AlertCircle, Inbox, RefreshCcw, SearchX } from 'lucide-react';

import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';
import StateBlock from '@/components/states/StateBlock';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

function ShadcnStatesDemo() {
  return (
    <div className='space-y-6'>
      <StateBlock
        title='Loading'
        description='Skeleton placeholders help preserve layout and reduce visual jumping.'
      >
        <div className='space-y-3'>
          <Skeleton className='h-5 w-32' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-[90%]' />
          <Skeleton className='h-10 w-full rounded-md' />
        </div>
      </StateBlock>

      <StateBlock
        title='Empty'
        description='A good empty state explains what is missing and what the user should do next.'
      >
        <div className='flex flex-col items-center justify-center py-6 text-center'>
          <Inbox className='h-10 w-10 text-muted-foreground' />
          <h4 className='mt-4 text-base font-semibold'>No reviews yet</h4>
          <p className='mt-2 max-w-sm text-sm text-muted-foreground'>
            Create your first review to start building out the editorial
            pipeline.
          </p>
          <Button className='mt-4'>Create review</Button>
        </div>
      </StateBlock>

      <StateBlock
        title='Error'
        description='Error states should be clear, actionable, and visually distinct.'
      >
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Unable to load reviews</AlertTitle>
          <AlertDescription>
            There was a problem fetching data. Try refreshing the page or try
            again in a moment.
          </AlertDescription>
        </Alert>

        <div className='mt-4'>
          <Button variant='outline'>
            <RefreshCcw className='mr-2 h-4 w-4' />
            Retry
          </Button>
        </div>
      </StateBlock>
    </div>
  );
}

function MuiStatesDemo() {
  return (
    <div className='space-y-6'>
      <StateBlock
        title='Loading'
        description='MUI includes flexible skeleton components with good defaults.'
      >
        <div className='space-y-3'>
          <MuiSkeleton variant='text' width={120} height={28} />
          <MuiSkeleton variant='text' width='100%' />
          <MuiSkeleton variant='text' width='90%' />
          <MuiSkeleton variant='rounded' width='100%' height={40} />
        </div>
      </StateBlock>

      <StateBlock
        title='Empty'
        description='Empty states work best when they pair clear copy with a next action.'
      >
        <div className='flex flex-col items-center justify-center py-6 text-center'>
          <SearchX className='h-10 w-10 text-muted-foreground' />
          <h4 className='mt-4 text-base font-semibold'>No matching reviews</h4>
          <p className='mt-2 max-w-sm text-sm text-muted-foreground'>
            Try adjusting your filters or creating a new review entry.
          </p>
          <MuiButton variant='contained' sx={{ mt: 2 }}>
            Create review
          </MuiButton>
        </div>
      </StateBlock>

      <StateBlock
        title='Error'
        description='High-level alert components make it easy to communicate problems quickly.'
      >
        <MuiAlert severity='error'>
          Unable to load reviews. There was a problem fetching data.
        </MuiAlert>

        <div className='mt-4'>
          <MuiButton
            variant='outlined'
            startIcon={<RefreshCcw className='h-4 w-4' />}
          >
            Retry
          </MuiButton>
        </div>
      </StateBlock>
    </div>
  );
}

function CustomStatesDemo() {
  return (
    <div className='space-y-6'>
      <StateBlock
        title='Loading'
        description='With a custom approach, you define the visual language of placeholders yourself.'
      >
        <div className='space-y-3'>
          <div className='h-5 w-32 animate-pulse rounded bg-muted' />
          <div className='h-4 w-full animate-pulse rounded bg-muted' />
          <div className='h-4 w-[90%] animate-pulse rounded bg-muted' />
          <div className='h-10 w-full animate-pulse rounded-md bg-muted' />
        </div>
      </StateBlock>

      <StateBlock
        title='Empty'
        description='Custom states are helpful when you want the product tone to feel more distinctive.'
      >
        <div className='flex flex-col items-center justify-center py-6 text-center'>
          <Inbox className='h-10 w-10 text-muted-foreground' />
          <h4 className='mt-4 text-base font-semibold'>Nothing here yet</h4>
          <p className='mt-2 max-w-sm text-sm text-muted-foreground'>
            Add your first review item to populate this dashboard area.
          </p>
          <button
            type='button'
            className='mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          >
            Create review
          </button>
        </div>
      </StateBlock>

      <StateBlock
        title='Error'
        description='A custom system can make error states feel fully aligned with your tokens and component patterns.'
      >
        <div className='rounded-xl border border-destructive/20 bg-destructive/10 p-4'>
          <div className='flex items-start gap-3'>
            <AlertCircle className='mt-0.5 h-4 w-4 text-destructive' />
            <div>
              <p className='text-sm font-semibold text-destructive'>
                Unable to load reviews
              </p>
              <p className='mt-1 text-sm text-muted-foreground'>
                There was a problem fetching data. Try again in a moment.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <button
            type='button'
            className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          >
            <RefreshCcw className='mr-2 h-4 w-4' />
            Retry
          </button>
        </div>
      </StateBlock>
    </div>
  );
}

export default function StatesLabPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Case Study'
        title='States Lab'
        description='Compare loading, empty, and error patterns across shadcn/ui, MUI, and a custom Radix-style approach.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='App-friendly state patterns that feel natural in modern product interfaces.'
        >
          <ShadcnStatesDemo />
        </DemoCard>

        <DemoCard
          title='MUI'
          description='Fast, consistent states with high-level components and strong defaults.'
        >
          <MuiStatesDemo />
        </DemoCard>

        <DemoCard
          title='Custom / Radix-style'
          description='Most flexible when you want state patterns to match your own product tone exactly.'
        >
          <CustomStatesDemo />
        </DemoCard>
      </div>

      <div className='mt-8 rounded-2xl border bg-card p-6 shadow-sm'>
        <h3 className='text-lg font-semibold'>Why this matters</h3>
        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Loading</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Good loading states preserve structure and reduce jarring layout
              shifts.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Empty</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Good empty states explain what is missing and guide the next
              action.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Error</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Good error states communicate the problem clearly and offer
              recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
