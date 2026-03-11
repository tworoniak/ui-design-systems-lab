import { Link } from 'react-router-dom';
import {
  Blocks,
  Brush,
  FolderKanban,
  LayoutDashboard,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import ExploreSection from '@/components/home/ExploreSection';
import FeatureHighlightCard from '@/components/home/FeatureHighlightCard';

const libraries = [
  {
    title: 'Radix Primitives',
    description:
      'Low-level accessible building blocks focused on behavior, composition, and control.',
  },
  {
    title: 'shadcn/ui',
    description:
      'Editable local components built on Radix primitives with a modern app-focused workflow.',
  },
  {
    title: 'MUI',
    description:
      'A polished component library with strong defaults, broad coverage, and fast implementation speed.',
  },
];

const comparisonPages = [
  { title: 'Buttons', to: '/buttons' },
  { title: 'Forms', to: '/forms' },
  { title: 'Overlays', to: '/overlays' },
  { title: 'Data Display', to: '/data-display' },
  { title: 'Nav & Feedback', to: '/navigation-feedback' },
  { title: 'Theming', to: '/theming' },
  { title: 'States Lab', to: '/states' },
];

const interactiveLabs = [
  { title: 'Button Playground', to: '/playground' },
  { title: 'Form Playground', to: '/playground/forms' },
  { title: 'Accessibility Lab', to: '/accessibility' },
  { title: 'Mini Dashboard', to: '/dashboard-lab' },
];

export default function HomePage() {
  return (
    <div className='space-y-8'>
      <PageHeader
        eyebrow='Design Systems Case Study'
        title='UI Systems Lab'
        description='A React + TypeScript project that compares Radix, shadcn/ui, and MUI through real interface patterns, interactive playgrounds, accessibility testing, and product-style surfaces.'
        actions={
          <Button asChild>
            <Link to='/comparison'>View final takeaways</Link>
          </Button>
        }
      />

      <section className='rounded-3xl border bg-card p-6 shadow-sm sm:p-8'>
        <div className='grid gap-8 lg:grid-cols-[1.4fr_1fr]'>
          <div>
            <p className='text-sm font-medium text-muted-foreground'>
              Compare implementation speed, customization, accessibility,
              theming, and product fit.
            </p>

            <h2 className='mt-3 text-3xl font-bold tracking-tight sm:text-4xl'>
              Learn design systems by building the same UI multiple ways.
            </h2>

            <p className='mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base'>
              Instead of only using one component library, this project rebuilds
              the same patterns with three different approaches. That makes
              tradeoffs easier to understand in a real, side-by-side way.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <Button asChild>
                <Link to='/buttons'>Start with comparisons</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link to='/playground'>Open playground</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link to='/dashboard-lab'>View dashboard lab</Link>
              </Button>
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
            {libraries.map((library) => (
              <Card key={library.title} className='rounded-2xl'>
                <CardHeader className='pb-3'>
                  <CardTitle className='text-base'>{library.title}</CardTitle>
                  <CardDescription>{library.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant='ghost' className='px-0'>
                    <Link to='/comparison'>Why it matters</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>What this project explores</h2>
          <p className='mt-1 text-sm text-muted-foreground'>
            The strongest design systems work is not just visual. It also
            includes behavior, accessibility, state management, and theming
            strategy.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <FeatureHighlightCard
            icon={<Blocks className='h-5 w-5' />}
            title='Component patterns'
            description='Compare buttons, forms, overlays, data display, and navigation patterns across all three systems.'
          />
          <FeatureHighlightCard
            icon={<SlidersHorizontal className='h-5 w-5' />}
            title='Interactive playgrounds'
            description='Use shared controls to see how each system maps the same internal model into different APIs.'
          />
          <FeatureHighlightCard
            icon={<ShieldCheck className='h-5 w-5' />}
            title='Accessibility testing'
            description='Check focus states, keyboard interaction, menu behavior, and dialog patterns in a practical way.'
          />
          <FeatureHighlightCard
            icon={<Brush className='h-5 w-5' />}
            title='Theming and tokens'
            description='Explore how design tokens, visual consistency, dark mode, and customization differ between approaches.'
          />
        </div>
      </section>

      <div className='grid gap-6 xl:grid-cols-2'>
        <ExploreSection
          title='Comparison Pages'
          description='Structured side-by-side pages focused on one UI category at a time.'
          links={comparisonPages}
        />

        <ExploreSection
          title='Interactive Labs'
          description='More hands-on areas that test behavior, states, accessibility, and real dashboard surfaces.'
          links={interactiveLabs}
        />
      </div>

      <section className='rounded-2xl border bg-card p-6 shadow-sm'>
        <div className='flex items-start gap-3'>
          <div className='mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-muted/40'>
            <FolderKanban className='h-5 w-5' />
          </div>

          <div>
            <h2 className='text-lg font-semibold'>
              Why this is portfolio-worthy
            </h2>
            <p className='mt-2 max-w-3xl text-sm text-muted-foreground'>
              This project demonstrates more than component usage. It shows
              evaluation of tradeoffs, design-system thinking, accessibility
              awareness, theming strategy, and the ability to compare product
              decisions across multiple UI architectures.
            </p>

            <div className='mt-4 flex flex-wrap gap-3'>
              <Button asChild variant='outline'>
                <Link to='/theming'>Explore theming</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link to='/accessibility'>Open accessibility lab</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link to='/states'>Review product states</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='rounded-2xl border bg-card p-6 shadow-sm'>
        <div className='flex items-start gap-3'>
          <div className='mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-muted/40'>
            <LayoutDashboard className='h-5 w-5' />
          </div>

          <div>
            <h2 className='text-lg font-semibold'>
              Suggested path through the lab
            </h2>
            <p className='mt-2 text-sm text-muted-foreground'>
              Start with the comparison pages, then move into the interactive
              labs, and finish on the comparison summary.
            </p>

            <div className='mt-4 flex flex-wrap gap-3'>
              <Button asChild>
                <Link to='/buttons'>1. Buttons</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link to='/playground'>2. Playground</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link to='/accessibility'>3. Accessibility</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link to='/comparison'>4. Final Comparison</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
