import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import MuiCheckbox from '@mui/material/Checkbox';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import MuiSwitch from '@mui/material/Switch';
import MuiTextField from '@mui/material/TextField';

import { Check, ChevronDown } from 'lucide-react';

import FormPlaygroundControls from '@/components/playground/FormPlaygroundControls';
import PlaygroundPreview from '@/components/playground/PlaygroundPreview';
import {
  getContainerGap,
  getFieldHeight,
  getFieldPadding,
  mapMuiSize,
} from '@/components/playground/formPlaygroundMappings';
import type {
  PlaygroundDensity,
  PlaygroundSize,
  PlaygroundStack,
} from '@/components/playground/playgroundTypes';
import PageHeader from '@/components/shared/PageHeader';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

function RadixLikeForm({
  size,
  density,
  favoriteStack,
  checked,
  enabled,
  disabled,
}: {
  size: PlaygroundSize;
  density: PlaygroundDensity;
  favoriteStack: PlaygroundStack;
  checked: boolean;
  enabled: boolean;
  disabled: boolean;
}) {
  const fieldHeight = getFieldHeight(size, density);
  const fieldPadding = getFieldPadding(size);
  const spacing = getContainerGap(density);

  return (
    <div className={spacing}>
      <div className='space-y-2'>
        <label htmlFor='radix-name' className='text-sm font-medium'>
          Name
        </label>
        <input
          id='radix-name'
          disabled={disabled}
          placeholder='Enter your name'
          className={`flex w-full rounded-md border border-input bg-background ${fieldHeight} ${fieldPadding} shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
        />
      </div>

      <div className='space-y-2'>
        <label className='text-sm font-medium'>Favorite stack</label>
        <SelectPrimitive.Root value={favoriteStack} disabled={disabled}>
          <SelectPrimitive.Trigger
            className={`flex w-full items-center justify-between rounded-md border border-input bg-background ${fieldHeight} ${fieldPadding} shadow-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
          >
            <SelectPrimitive.Value />
            <SelectPrimitive.Icon>
              <ChevronDown className='h-4 w-4 opacity-70' />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className='z-50 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md'>
              <SelectPrimitive.Viewport className='p-1'>
                {['react', 'vue', 'angular'].map((option) => (
                  <SelectPrimitive.Item
                    key={option}
                    value={option}
                    className='relative flex cursor-default select-none items-center rounded-sm py-2 pl-8 pr-3 text-sm outline-none focus:bg-accent focus:text-accent-foreground'
                  >
                    <SelectPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
                      <Check className='h-4 w-4' />
                    </SelectPrimitive.ItemIndicator>
                    <SelectPrimitive.ItemText>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>

      <div className='flex items-center gap-3'>
        <CheckboxPrimitive.Root
          checked={checked}
          disabled={disabled}
          className='flex h-5 w-5 items-center justify-center rounded border border-input bg-background shadow-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        >
          <CheckboxPrimitive.Indicator>
            <Check className='h-4 w-4' />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label className='text-sm font-medium'>Accept terms</label>
      </div>

      <div className='flex items-center justify-between rounded-lg border p-3'>
        <label className='text-sm font-medium'>Enable notifications</label>
        <SwitchPrimitive.Root
          checked={enabled}
          disabled={disabled}
          className='relative h-6 w-11 rounded-full border bg-muted transition data-[state=checked]:bg-primary disabled:pointer-events-none disabled:opacity-50'
        >
          <SwitchPrimitive.Thumb className='block h-5 w-5 translate-x-0.5 rounded-full bg-background shadow transition data-[state=checked]:translate-x-5.5' />
        </SwitchPrimitive.Root>
      </div>
    </div>
  );
}

export default function FormPlaygroundPage() {
  const [size, setSize] = React.useState<PlaygroundSize>('md');
  const [density, setDensity] =
    React.useState<PlaygroundDensity>('comfortable');
  const [favoriteStack, setFavoriteStack] =
    React.useState<PlaygroundStack>('react');
  const [checked, setChecked] = React.useState(false);
  const [enabled, setEnabled] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  const spacing = getContainerGap(density);
  const fieldHeight = getFieldHeight(size, density);

  return (
    <div>
      <PageHeader
        eyebrow='Interactive Lab'
        title='Form Control Playground'
        description='Compare how a shared form state maps into shadcn/ui, MUI, and custom Radix-style controls.'
      />

      <FormPlaygroundControls
        size={size}
        density={density}
        favoriteStack={favoriteStack}
        checked={checked}
        enabled={enabled}
        disabled={disabled}
        onSizeChange={setSize}
        onDensityChange={setDensity}
        onFavoriteStackChange={setFavoriteStack}
        onCheckedChange={setChecked}
        onEnabledChange={setEnabled}
        onDisabledChange={setDisabled}
      />

      <div className='mt-6 grid gap-6 xl:grid-cols-3'>
        <PlaygroundPreview
          title='shadcn/ui'
          description='Composable form controls that feel very close to app-owned design system code.'
        >
          <div className={`w-full max-w-md ${spacing}`}>
            <div className='space-y-2'>
              <Label htmlFor='shadcn-playground-name'>Name</Label>
              <Input
                id='shadcn-playground-name'
                disabled={disabled}
                placeholder='Enter your name'
                className={fieldHeight}
              />
            </div>

            <div className='space-y-2'>
              <Label>Favorite stack</Label>
              <Select
                value={favoriteStack}
                onValueChange={(value) =>
                  setFavoriteStack(value as PlaygroundStack)
                }
                disabled={disabled}
              >
                <SelectTrigger className={fieldHeight}>
                  <SelectValue placeholder='Select stack' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='react'>React</SelectItem>
                  <SelectItem value='vue'>Vue</SelectItem>
                  <SelectItem value='angular'>Angular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='flex items-center gap-3'>
              <Checkbox
                checked={checked}
                onCheckedChange={(value) => setChecked(value === true)}
                disabled={disabled}
                id='shadcn-playground-terms'
              />
              <Label htmlFor='shadcn-playground-terms'>Accept terms</Label>
            </div>

            <div className='flex items-center justify-between rounded-lg border p-3'>
              <Label htmlFor='shadcn-playground-notifications'>
                Enable notifications
              </Label>
              <Switch
                id='shadcn-playground-notifications'
                checked={enabled}
                onCheckedChange={setEnabled}
                disabled={disabled}
              />
            </div>
          </div>
        </PlaygroundPreview>

        <PlaygroundPreview
          title='MUI'
          description='High-level form controls with consistent APIs and minimal assembly.'
        >
          <div className={`w-full max-w-md ${spacing}`}>
            <MuiTextField
              fullWidth
              label='Name'
              size={mapMuiSize(size)}
              disabled={disabled}
              placeholder='Enter your name'
            />

            <MuiFormControl
              fullWidth
              size={mapMuiSize(size)}
              disabled={disabled}
              style={{ marginTop: '1rem' }}
            >
              <MuiInputLabel id='mui-playground-stack-label'>
                Favorite stack
              </MuiInputLabel>
              <MuiSelect
                labelId='mui-playground-stack-label'
                value={favoriteStack}
                label='Favorite stack'
                onChange={(e) =>
                  setFavoriteStack(e.target.value as PlaygroundStack)
                }
              >
                <MuiMenuItem value='react'>React</MuiMenuItem>
                <MuiMenuItem value='vue'>Vue</MuiMenuItem>
                <MuiMenuItem value='angular'>Angular</MuiMenuItem>
              </MuiSelect>
            </MuiFormControl>

            <MuiFormControlLabel
              control={
                <MuiCheckbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  disabled={disabled}
                />
              }
              label='Accept terms'
            />

            <MuiFormControlLabel
              control={
                <MuiSwitch
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                  disabled={disabled}
                />
              }
              label='Enable notifications'
            />
          </div>
        </PlaygroundPreview>

        <PlaygroundPreview
          title='Custom / Radix-style'
          description='Behavior primitives plus full control over field sizing, spacing, and UI language.'
        >
          <div className='w-full max-w-md'>
            <RadixLikeForm
              size={size}
              density={density}
              favoriteStack={favoriteStack}
              checked={checked}
              enabled={enabled}
              disabled={disabled}
            />
          </div>
        </PlaygroundPreview>
      </div>

      <div className='mt-8 rounded-2xl border bg-card p-6 shadow-sm'>
        <h3 className='text-lg font-semibold'>What this shows</h3>
        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>shadcn/ui</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Great for building consistent product forms while keeping the
              components editable inside your app.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>MUI</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Great when you want robust form controls fast, with standardized
              APIs and enterprise-friendly defaults.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Custom / Radix-style</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Great when exact spacing, field sizing, and design tokens matter
              more than using prebuilt visuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
