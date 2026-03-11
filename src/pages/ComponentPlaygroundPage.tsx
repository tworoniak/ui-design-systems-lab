import * as React from 'react';
import MuiButton from '@mui/material/Button';
import { Rocket } from 'lucide-react';

import PageHeader from '@/components/shared/PageHeader';
import type {
  PlaygroundSize,
  PlaygroundVariant,
} from '@/components/playground/playgroundTypes';
import PlaygroundControls from '@/components/playground/PlaygroundControls';
import PlaygroundPreview from '@/components/playground/PlaygroundPreview';
import {
  customButtonClasses,
  mapMuiColor,
  mapMuiSize,
  mapMuiVariant,
  mapShadcnSize,
  mapShadcnVariant,
} from '@/components/playground/playgroundMappings';
import { Button as ShadcnButton } from '@/components/ui/button';

export default function ComponentPlaygroundPage() {
  const [variant, setVariant] = React.useState<PlaygroundVariant>('primary');
  const [size, setSize] = React.useState<PlaygroundSize>('md');
  const [showIcon, setShowIcon] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  const icon = showIcon ? <Rocket className='h-4 w-4' /> : null;

  return (
    <div>
      <PageHeader
        eyebrow='Interactive Lab'
        title='Component Playground'
        description='Use one set of controls to compare how the same button configuration is expressed across shadcn/ui, MUI, and custom UI.'
      />

      <PlaygroundControls
        variant={variant}
        size={size}
        showIcon={showIcon}
        disabled={disabled}
        onVariantChange={setVariant}
        onSizeChange={setSize}
        onShowIconChange={setShowIcon}
        onDisabledChange={setDisabled}
      />

      <div className='mt-6 grid gap-6 xl:grid-cols-3'>
        <PlaygroundPreview
          title='shadcn/ui'
          description='Variant and size are built into the local button component API.'
        >
          <ShadcnButton
            variant={mapShadcnVariant(variant)}
            size={mapShadcnSize(size)}
            disabled={disabled}
          >
            {icon}
            Launch feature
          </ShadcnButton>
        </PlaygroundPreview>

        <PlaygroundPreview
          title='MUI'
          description='Behavior comes from a prop-driven API with variant and color combinations.'
        >
          <MuiButton
            variant={mapMuiVariant(variant)}
            color={mapMuiColor(variant)}
            size={mapMuiSize(size)}
            disabled={disabled}
            startIcon={showIcon ? <Rocket className='h-4 w-4' /> : undefined}
          >
            Launch feature
          </MuiButton>
        </PlaygroundPreview>

        <PlaygroundPreview
          title='Custom buttons (Radix-style workflow)'
          description='You own the variant and size model directly because the visual layer is yours.'
        >
          <button
            type='button'
            disabled={disabled}
            className={customButtonClasses(variant, size, disabled)}
          >
            {icon}
            Launch feature
          </button>
        </PlaygroundPreview>
      </div>

      <div className='mt-8 rounded-2xl border bg-card p-6 shadow-sm'>
        <h3 className='text-lg font-semibold'>What this shows</h3>
        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>shadcn/ui</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Strong for app-owned components with a clean variant API that you
              can extend yourself.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>MUI</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Strong for fast implementation using props and built-in component
              conventions.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Custom / Radix-style</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Strong when you want full control over naming, styling, tokens,
              and behavior composition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
