import type { ReviewStatus } from '@/data/dashboardData';

export function getStatusBadgeClass(status: ReviewStatus) {
  switch (status) {
    case 'Published':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'Draft':
      return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20';
    case 'Scheduled':
      return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20';
    default:
      return 'bg-muted text-muted-foreground border-border';
  }
}
