import type { ReactNode } from 'react';

type AccessibilitySectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function AccessibilitySection({
  title,
  description,
  children,
}: AccessibilitySectionProps) {
  return (
    <section className='rounded-2xl border bg-card p-6 shadow-sm'>
      <div className='mb-5'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
      </div>
      {children}
    </section>
  );
}
