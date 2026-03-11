import type { ReactNode } from 'react';

type PlaygroundPreviewProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function PlaygroundPreview({
  title,
  description,
  children,
}: PlaygroundPreviewProps) {
  return (
    <section className='rounded-2xl border bg-card p-6 shadow-sm'>
      <div className='mb-5'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
      </div>

      <div className='rounded-xl border border-dashed bg-muted/20 p-6'>
        <div className='flex min-h-32 items-center justify-center'>
          {children}
        </div>
      </div>
    </section>
  );
}
