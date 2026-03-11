import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className='rounded-2xl border bg-card p-4 text-card-foreground shadow-sm sm:p-6'
    >
      <div className='mb-5'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        {description ? (
          <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
        ) : null}
      </div>
      <div className='min-w-0'>{children}</div>
    </motion.section>
  );
}
