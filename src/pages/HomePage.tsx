import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const libraries = [
  {
    title: 'Radix Primitives',
    description:
      'Low-level accessible building blocks. Great for learning composition, state patterns, and custom styling.',
  },
  {
    title: 'shadcn/ui',
    description:
      'Copy-paste components built with Radix and utility-first styling. Great for modern app architecture.',
  },
  {
    title: 'MUI',
    description:
      'A polished component library with strong defaults, fast delivery, and enterprise-friendly patterns.',
  },
];

const sections = [
  { title: 'Buttons', to: '/buttons' },
  { title: 'Forms', to: '/forms' },
  { title: 'Overlays', to: '/overlays' },
  { title: 'Data Display', to: '/data-display' },
  { title: 'Nav & Feedback', to: '/navigation-feedback' },
  { title: 'Theming', to: '/theming' },
  { title: 'Button Playground', to: '/playground' },
  { title: 'Form Playground', to: '/playground/forms' },
  { title: 'Accessibility Lab', to: '/accessibility' },
  { title: 'Mini Dashboard', to: '/dashboard-lab' },
  { title: 'States Lab', to: '/states' },
  { title: 'Comparison', to: '/comparison' },
];

export default function HomePage() {
  return (
    <div>
      <PageHeader
        eyebrow='Project Start'
        title='UI Systems Lab'
        description='Build the same UI patterns in Radix, shadcn/ui, and MUI so you can compare APIs, styling, accessibility, theming, and developer experience.'
      />

      <div className='grid gap-6 lg:grid-cols-3'>
        {libraries.map((library) => (
          <Card key={library.title} className='rounded-2xl'>
            <CardHeader>
              <CardTitle>{library.title}</CardTitle>
              <CardDescription>{library.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to='/buttons'>Start exploring</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='mt-8 rounded-2xl border p-6'>
        <h3 className='text-lg font-semibold'>Explore the lab</h3>
        <p className='mt-2 text-sm text-muted-foreground'>
          Work through each section and document what feels fastest, most
          flexible, and most production-ready.
        </p>

        <div className='mt-4 flex flex-wrap gap-3'>
          {sections.map((section) => (
            <Button key={section.to} asChild variant='outline'>
              <Link to={section.to}>{section.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
