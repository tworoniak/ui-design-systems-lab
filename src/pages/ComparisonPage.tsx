import PageHeader from '@/components/shared/PageHeader';
import ComparisonNotes from '@/components/shared/ComparisonNotes';
import ComparisonMatrix from '@/components/shared/ComparisonMatrix';

const notes = [
  {
    label: 'Speed to first result',
    radix:
      'Slowest at first because you assemble behavior and styling separately.',
    shadcn:
      'Fast once installed because components are app-ready and editable.',
    mui: 'Fastest because many polished components are available immediately.',
  },
  {
    label: 'Styling flexibility',
    radix: 'Highest flexibility because you fully own the presentation layer.',
    shadcn: 'Very flexible and practical for modern product UIs.',
    mui: 'Flexible, but more guided by theme config and component APIs.',
  },
  {
    label: 'Learning value',
    radix:
      'Best for understanding primitives, accessibility, and system design thinking.',
    shadcn:
      'Best for learning how a modern app design system is assembled in practice.',
    mui: 'Best for learning large-library workflows and enterprise-ready APIs.',
  },
];

const matrixRows = [
  {
    category: 'Use when',
    radix: 'You need a truly custom design system.',
    shadcn: 'You want modern editable components in your codebase.',
    mui: 'You want speed, coverage, and strong defaults.',
  },
  {
    category: 'Biggest strength',
    radix: 'Control and accessibility primitives.',
    shadcn: 'Balance of speed and customization.',
    mui: 'Productivity and component breadth.',
  },
  {
    category: 'Biggest tradeoff',
    radix: 'More manual work.',
    shadcn: 'Still requires design decisions and utility-class comfort.',
    mui: 'Can feel more framework-shaped than bespoke.',
  },
];

export default function ComparisonPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Final Takeaways'
        title='Comparison'
        description='Summarize what each library does best and when you would actually choose it on a real project.'
      />

      <ComparisonNotes items={notes} />

      <div className='mt-8'>
        <ComparisonMatrix rows={matrixRows} />
      </div>

      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        <div className='rounded-2xl border p-6'>
          <h3 className='text-lg font-semibold'>My Radix takeaway</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Best when accessibility, composability, and a truly custom visual
            system matter most.
          </p>
        </div>

        <div className='rounded-2xl border p-6'>
          <h3 className='text-lg font-semibold'>My shadcn takeaway</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Best overall balance for modern product apps where you want local
            ownership of the component code.
          </p>
        </div>

        <div className='rounded-2xl border p-6'>
          <h3 className='text-lg font-semibold'>My MUI takeaway</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Best when speed, consistency, and breadth of prebuilt components are
            the top priorities.
          </p>
        </div>
      </div>
    </div>
  );
}
