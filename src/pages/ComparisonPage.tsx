import PageHeader from '@/components/shared/PageHeader';
import ComparisonNotes from '@/components/shared/ComparisonNotes';

const notes = [
  {
    label: 'Speed to first result',
    radix:
      'Slowest at first because you assemble structure and styling yourself.',
    shadcn:
      'Fast once installed because components are app-ready and editable.',
    mui: 'Fastest because most UI is available immediately through props.',
  },
  {
    label: 'Styling flexibility',
    radix: 'Highest flexibility because you control the full UI layer.',
    shadcn:
      'Very flexible and practical for product UIs using utility classes.',
    mui: 'Flexible, but often through theme config and component APIs.',
  },
  {
    label: 'Learning value',
    radix: 'Best for understanding primitives, accessibility, and composition.',
    shadcn: 'Best for learning how modern app design systems are structured.',
    mui: 'Best for learning enterprise component APIs and fast delivery.',
  },
];

export default function ComparisonPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Notes'
        title='Comparison'
        description='Document what felt easiest, most customizable, and most production-ready as you build.'
      />

      <ComparisonNotes items={notes} />
    </div>
  );
}
