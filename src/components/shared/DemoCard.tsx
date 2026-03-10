import type { ReactNode } from 'react';

type DemoCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function DemoCard({
  title,
  description,
  children,
}: DemoCardProps) {
  return (
    <section className='rounded-2xl border bg-card p-6 text-card-foreground shadow-sm'>
      <div className='mb-5'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        {description ? (
          <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
