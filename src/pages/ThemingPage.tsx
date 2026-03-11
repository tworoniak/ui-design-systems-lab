import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';
import TokenSwatch from '@/components/shared/TokenSwatch';
import ComparisonMatrix from '@/components/shared/ComparisonMatrix';

const rows = [
  {
    category: 'Color system',
    radix: 'You define your own tokens and visual language from scratch.',
    shadcn:
      'Uses CSS variables and local component code, which makes token-based theming very approachable.',
    mui: 'Strong theme object with palette support and global customization patterns.',
  },
  {
    category: 'Border radius',
    radix: 'Whatever scale you design yourself.',
    shadcn: 'Easy to control through variables and utility classes.',
    mui: 'Easy to control centrally through theme shape settings.',
  },
  {
    category: 'Typography',
    radix: 'Entirely custom and flexible.',
    shadcn: 'Usually driven by your app styles and Tailwind utilities.',
    mui: 'Theme typography is powerful and consistent across components.',
  },
  {
    category: 'Dark mode',
    radix: 'You implement the styling strategy yourself.',
    shadcn: 'Very natural with CSS variables and utility-based styling.',
    mui: 'Well-supported through theme mode and palette configuration.',
  },
  {
    category: 'Best fit',
    radix: 'Teams building a custom design system from the ground up.',
    shadcn:
      'Modern product UIs where editable local components are a big advantage.',
    mui: 'Enterprise apps and teams optimizing for speed and consistency.',
  },
];

function ShadcnThemeDemo() {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <TokenSwatch
          label='Primary'
          className='bg-primary'
          textClassName='text-primary'
        />
        <TokenSwatch label='Secondary' className='bg-secondary' />
        <TokenSwatch label='Accent' className='bg-accent' />
        <TokenSwatch label='Muted' className='bg-muted' />
      </div>

      <div className='grid gap-4 sm:grid-cols-3'>
        <div className='rounded-md border p-4'>radius-md</div>
        <div className='rounded-xl border p-4'>radius-xl</div>
        <div className='rounded-2xl border p-4'>radius-2xl</div>
      </div>

      <Card className='rounded-2xl'>
        <CardHeader>
          <div className='flex items-center justify-between gap-3'>
            <div>
              <CardTitle>Why shadcn is strong for theming</CardTitle>
              <CardDescription>
                Components are local, tokens are visible, and styling stays
                close to the UI code.
              </CardDescription>
            </div>
            <Badge>Token-friendly</Badge>
          </div>
        </CardHeader>
        <CardContent className='text-sm text-muted-foreground'>
          This makes shadcn especially good for learning how a modern app design
          system is assembled.
        </CardContent>
      </Card>
    </div>
  );
}

function MuiThemeDemo() {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Palette</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            MUI centralizes colors through the theme object.
          </p>
        </div>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Typography</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Strong control over font sizes, weights, and semantic text variants.
          </p>
        </div>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Shape</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Border radius can be centralized for a consistent component feel.
          </p>
        </div>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Mode</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Dark and light mode are straightforward through theme configuration.
          </p>
        </div>
      </div>

      <div className='rounded-2xl border p-5'>
        <h3 className='text-lg font-semibold'>Why MUI is strong for theming</h3>
        <p className='mt-2 text-sm text-muted-foreground'>
          It gives teams a centralized configuration model, which is great when
          consistency matters more than fully custom UI architecture.
        </p>
      </div>
    </div>
  );
}

function RadixThemeDemo() {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Behavior first</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Radix does not impose a visual design system on you.
          </p>
        </div>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Token freedom</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            You choose the tokens, scale, spacing, typography, and all styling
            decisions.
          </p>
        </div>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Custom UI language</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Ideal when you want a distinct brand system rather than a prebuilt
            component look.
          </p>
        </div>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Higher effort</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            You gain flexibility, but you also own the styling decisions and
            maintenance.
          </p>
        </div>
      </div>

      <div className='rounded-2xl border p-5'>
        <h3 className='text-lg font-semibold'>
          Why Radix is strong for theming
        </h3>
        <p className='mt-2 text-sm text-muted-foreground'>
          It cleanly separates accessibility behavior from presentation, which
          is exactly what many custom design systems need.
        </p>
      </div>
    </div>
  );
}

export default function ThemingPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Case Study'
        title='Theming'
        description='Compare how Radix, shadcn/ui, and MUI approach tokens, dark mode, visual consistency, and customization.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='Visible tokens, local components, and a very practical theming workflow.'
        >
          <ShadcnThemeDemo />
        </DemoCard>

        <DemoCard
          title='MUI'
          description='Centralized theme configuration with strong defaults and consistency.'
        >
          <MuiThemeDemo />
        </DemoCard>

        <DemoCard
          title='Radix + custom styling'
          description='No imposed visual system, which is exactly why it is powerful.'
        >
          <RadixThemeDemo />
        </DemoCard>
      </div>

      <div className='mt-10 rounded-2xl border p-6'>
        <h3 className='text-lg font-semibold'>Live theme preview</h3>

        <p className='mt-2 text-sm text-muted-foreground'>
          Toggle light and dark mode using the theme switch in the header to see
          how the token system adapts across the UI.
        </p>

        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Background</p>
            <div className='mt-2 h-10 rounded bg-background border'></div>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Primary</p>
            <div className='mt-2 h-10 rounded bg-primary'></div>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Accent</p>
            <div className='mt-2 h-10 rounded bg-accent'></div>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <ComparisonMatrix rows={rows} />
      </div>
    </div>
  );
}
