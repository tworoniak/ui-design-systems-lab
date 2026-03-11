import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div className='mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between'>
      <div className='min-w-0'>
        {eyebrow ? (
          <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
            {eyebrow}
          </p>
        ) : null}
        <h1 className='text-2xl font-bold tracking-tight sm:text-3xl'>
          {title}
        </h1>
        {description ? (
          <p className='mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base'>
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className='shrink-0'>{actions}</div> : null}
    </div>
  );
}
