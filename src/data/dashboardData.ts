export type ReviewStatus = 'Published' | 'Draft' | 'Scheduled';

export type ReviewItem = {
  id: number;
  artist: string;
  album: string;
  status: ReviewStatus;
  score: string;
  due: string;
};

export const dashboardStats = [
  {
    label: 'Published reviews',
    value: '18',
    helper: '+3 this month',
  },
  {
    label: 'Drafts in progress',
    value: '7',
    helper: '2 due this week',
  },
  {
    label: 'Scheduled posts',
    value: '5',
    helper: 'Next: Friday 9:00 AM',
  },
];

export const reviewItems: ReviewItem[] = [
  {
    id: 1,
    artist: 'Spiritbox',
    album: 'Tsunami Sea',
    status: 'Published',
    score: '9/10',
    due: 'Completed',
  },
  {
    id: 2,
    artist: 'HATE',
    album: 'Bellum Regiis',
    status: 'Draft',
    score: '—',
    due: 'Tomorrow',
  },
  {
    id: 3,
    artist: 'Rwake',
    album: 'The Return Of Magik',
    status: 'Scheduled',
    score: '8.5/10',
    due: 'Friday',
  },
  {
    id: 4,
    artist: 'Avantasia',
    album: 'Here Be Dragons',
    status: 'Published',
    score: '8/10',
    due: 'Completed',
  },
];
