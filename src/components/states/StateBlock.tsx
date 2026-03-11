import type { ReactNode } from 'react';

type StateBlockProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function StateBlock({
  title,
  description,
  children,
}: StateBlockProps) {
  return (
    <section className='rounded-2xl border bg-card p-4 shadow-sm sm:p-6'>
      <div className='mb-5'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
      </div>

      <div className='rounded-xl border border-dashed bg-muted/20 p-4 sm:p-6'>
        {children}
      </div>
    </section>
  );
}
