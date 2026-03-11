import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type ExploreSectionProps = {
  title: string;
  description: string;
  links: {
    title: string;
    to: string;
  }[];
};

export default function ExploreSection({
  title,
  description,
  links,
}: ExploreSectionProps) {
  return (
    <section className='rounded-2xl border bg-card p-5 shadow-sm sm:p-6'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='mt-2 text-sm text-muted-foreground'>{description}</p>

      <div className='mt-4 flex flex-wrap gap-3'>
        {links.map((link) => (
          <Button key={link.to} asChild variant='outline'>
            <Link to={link.to}>{link.title}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
