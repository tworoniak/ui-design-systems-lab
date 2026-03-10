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
    <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
      <div>
        {eyebrow ? (
          <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
            {eyebrow}
          </p>
        ) : null}
        <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
        {description ? (
          <p className='mt-2 max-w-3xl text-muted-foreground'>{description}</p>
        ) : null}
      </div>

      {actions ? <div>{actions}</div> : null}
    </div>
  );
}
