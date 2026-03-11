import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{
        duration: 0.22,
        ease: 'easeOut',
      }}
      className='min-w-0'
    >
      {children}
    </motion.div>
  );
}
