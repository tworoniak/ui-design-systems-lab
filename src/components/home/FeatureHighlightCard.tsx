import type { ReactNode } from 'react';

type FeatureHighlightCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function FeatureHighlightCard({
  title,
  description,
  icon,
}: FeatureHighlightCardProps) {
  return (
    <div className='rounded-2xl border bg-card p-5 shadow-sm'>
      <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-muted/40'>
        {icon}
      </div>

      <h3 className='text-base font-semibold'>{title}</h3>
      <p className='mt-2 text-sm text-muted-foreground'>{description}</p>
    </div>
  );
}
