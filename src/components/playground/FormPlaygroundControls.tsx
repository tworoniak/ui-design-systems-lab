import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type {
  PlaygroundDensity,
  PlaygroundSize,
  PlaygroundStack,
} from './playgroundTypes';

type FormPlaygroundControlsProps = {
  size: PlaygroundSize;
  density: PlaygroundDensity;
  favoriteStack: PlaygroundStack;
  checked: boolean;
  enabled: boolean;
  disabled: boolean;
  onSizeChange: (value: PlaygroundSize) => void;
  onDensityChange: (value: PlaygroundDensity) => void;
  onFavoriteStackChange: (value: PlaygroundStack) => void;
  onCheckedChange: (value: boolean) => void;
  onEnabledChange: (value: boolean) => void;
  onDisabledChange: (value: boolean) => void;
};

export default function FormPlaygroundControls({
  size,
  density,
  favoriteStack,
  checked,
  enabled,
  disabled,
  onSizeChange,
  onDensityChange,
  onFavoriteStackChange,
  onCheckedChange,
  onEnabledChange,
  onDisabledChange,
}: FormPlaygroundControlsProps) {
  return (
    <div className='rounded-2xl border bg-card p-6 shadow-sm'>
      <h3 className='text-lg font-semibold'>Form controls</h3>
      <p className='mt-1 text-sm text-muted-foreground'>
        Change one shared set of values and compare how each library expresses
        them.
      </p>

      <div className='mt-5 grid gap-5 md:grid-cols-2'>
        <div className='space-y-2'>
          <Label>Size</Label>
          <Select
            value={size}
            onValueChange={(value) => onSizeChange(value as PlaygroundSize)}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select size' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='sm'>Small</SelectItem>
              <SelectItem value='md'>Medium</SelectItem>
              <SelectItem value='lg'>Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label>Density</Label>
          <Select
            value={density}
            onValueChange={(value) =>
              onDensityChange(value as PlaygroundDensity)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='Select density' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='comfortable'>Comfortable</SelectItem>
              <SelectItem value='compact'>Compact</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label>Favorite stack</Label>
          <Select
            value={favoriteStack}
            onValueChange={(value) =>
              onFavoriteStackChange(value as PlaygroundStack)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='Select stack' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='react'>React</SelectItem>
              <SelectItem value='vue'>Vue</SelectItem>
              <SelectItem value='angular'>Angular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center justify-between rounded-xl border p-4'>
          <div>
            <p className='text-sm font-medium'>Disabled</p>
            <p className='text-xs text-muted-foreground'>
              Disable all form controls
            </p>
          </div>
          <Switch checked={disabled} onCheckedChange={onDisabledChange} />
        </div>

        <div className='flex items-center justify-between rounded-xl border p-4'>
          <div>
            <p className='text-sm font-medium'>Checkbox checked</p>
            <p className='text-xs text-muted-foreground'>
              Toggle terms acceptance state
            </p>
          </div>
          <Switch checked={checked} onCheckedChange={onCheckedChange} />
        </div>

        <div className='flex items-center justify-between rounded-xl border p-4'>
          <div>
            <p className='text-sm font-medium'>Switch enabled</p>
            <p className='text-xs text-muted-foreground'>
              Toggle notification state
            </p>
          </div>
          <Switch checked={enabled} onCheckedChange={onEnabledChange} />
        </div>
      </div>
    </div>
  );
}
