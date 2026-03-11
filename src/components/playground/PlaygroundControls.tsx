import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { PlaygroundSize, PlaygroundVariant } from './playgroundTypes';

type PlaygroundControlsProps = {
  variant: PlaygroundVariant;
  size: PlaygroundSize;
  showIcon: boolean;
  disabled: boolean;
  onVariantChange: (value: PlaygroundVariant) => void;
  onSizeChange: (value: PlaygroundSize) => void;
  onShowIconChange: (value: boolean) => void;
  onDisabledChange: (value: boolean) => void;
};

export default function PlaygroundControls({
  variant,
  size,
  showIcon,
  disabled,
  onVariantChange,
  onSizeChange,
  onShowIconChange,
  onDisabledChange,
}: PlaygroundControlsProps) {
  return (
    <div className='rounded-2xl border bg-card p-6 shadow-sm'>
      <h3 className='text-lg font-semibold'>Controls</h3>
      <p className='mt-1 text-sm text-muted-foreground'>
        Change the same inputs and compare how each system responds.
      </p>

      <div className='mt-5 grid gap-5 md:grid-cols-2'>
        <div className='space-y-2'>
          <Label>Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) =>
              onVariantChange(value as PlaygroundVariant)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='Select variant' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='primary'>Primary</SelectItem>
              <SelectItem value='secondary'>Secondary</SelectItem>
              <SelectItem value='outline'>Outline</SelectItem>
              <SelectItem value='ghost'>Ghost</SelectItem>
              <SelectItem value='destructive'>Destructive</SelectItem>
            </SelectContent>
          </Select>
        </div>

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

        <div className='flex items-center justify-between rounded-xl border p-4'>
          <div>
            <p className='text-sm font-medium'>Show icon</p>
            <p className='text-xs text-muted-foreground'>
              Toggle a leading icon
            </p>
          </div>
          <Switch checked={showIcon} onCheckedChange={onShowIconChange} />
        </div>

        <div className='flex items-center justify-between rounded-xl border p-4'>
          <div>
            <p className='text-sm font-medium'>Disabled</p>
            <p className='text-xs text-muted-foreground'>
              Disable all button examples
            </p>
          </div>
          <Switch checked={disabled} onCheckedChange={onDisabledChange} />
        </div>
      </div>
    </div>
  );
}
