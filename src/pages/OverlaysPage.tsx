import PageHeader from '@/components/shared/PageHeader';

export default function OverlaysPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Coming Next'
        title='Overlays'
        description='This page will compare dialogs, dropdown menus, sheets, and tabs.'
      />

      <div className='rounded-2xl border border-dashed p-10 text-muted-foreground'>
        Overlay demos coming next.
      </div>
    </div>
  );
}
