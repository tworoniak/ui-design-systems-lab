import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const libraries = [
  {
    title: 'Radix Primitives',
    description:
      'Low-level accessible building blocks. Great for learning composition, state patterns, and custom styling.',
  },
  {
    title: 'shadcn/ui',
    description:
      'Copy-paste components built with Radix and Tailwind. Great for real-world app architecture and customization.',
  },
  {
    title: 'MUI',
    description:
      'A polished component library with strong defaults, fast delivery, and enterprise-friendly patterns.',
  },
];

export default function HomePage() {
  return (
    <div>
      <PageHeader
        eyebrow='Project Start'
        title='UI Systems Lab'
        description='Build the same UI patterns in Radix, shadcn/ui, and MUI so you can compare APIs, styling, accessibility, and developer experience.'
      />

      <div className='grid gap-6 lg:grid-cols-3'>
        {libraries.map((library) => (
          <Card key={library.title} className='rounded-2xl'>
            <CardHeader>
              <CardTitle>{library.title}</CardTitle>
              <CardDescription>{library.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to='/buttons'>Start with buttons</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
