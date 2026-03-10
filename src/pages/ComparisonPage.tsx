import PageHeader from '@/components/shared/PageHeader';

export default function ComparisonPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Notes'
        title='Comparison'
        description='Use this page to document what felt easiest, most flexible, and most production-ready.'
      />

      <div className='grid gap-6 md:grid-cols-3'>
        <div className='rounded-2xl border p-6'>
          <h3 className='text-lg font-semibold'>Radix</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Best for primitives, accessibility, and custom design-system work.
          </p>
        </div>

        <div className='rounded-2xl border p-6'>
          <h3 className='text-lg font-semibold'>shadcn/ui</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Best for editable app components and modern Tailwind workflows.
          </p>
        </div>

        <div className='rounded-2xl border p-6'>
          <h3 className='text-lg font-semibold'>MUI</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            Best for speed, consistency, and enterprise-friendly component APIs.
          </p>
        </div>
      </div>
    </div>
  );
}
