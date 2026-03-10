import * as React from 'react';
import MuiTextField from '@mui/material/TextField';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import MuiSwitch from '@mui/material/Switch';
import MuiMenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';

import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function RadixCheckboxRow() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className='flex items-center gap-3'>
      <CheckboxPrimitive.Root
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
        className='flex h-5 w-5 items-center justify-center rounded border border-input bg-background shadow-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        id='radix-checkbox'
      >
        <CheckboxPrimitive.Indicator>
          <Check className='h-4 w-4' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label htmlFor='radix-checkbox' className='text-sm font-medium'>
        Accept terms
      </label>
    </div>
  );
}

function RadixSwitchRow() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className='flex items-center justify-between rounded-lg border p-3'>
      <label htmlFor='radix-switch' className='text-sm font-medium'>
        Enable notifications
      </label>

      <SwitchPrimitive.Root
        id='radix-switch'
        checked={checked}
        onCheckedChange={setChecked}
        className='relative h-6 w-11 rounded-full border bg-muted transition data-[state=checked]:bg-primary'
      >
        <SwitchPrimitive.Thumb className='block h-5 w-5 translate-x-0.5 rounded-full bg-background shadow transition data-[state=checked]:translate-x-5.5' />
      </SwitchPrimitive.Root>
    </div>
  );
}

function RadixSelectRow() {
  const [value, setValue] = React.useState('react');

  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium'>Favorite stack</label>

      <SelectPrimitive.Root value={value} onValueChange={setValue}>
        <SelectPrimitive.Trigger className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon>
            <ChevronDown className='h-4 w-4 opacity-70' />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className='z-50 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md'>
            <SelectPrimitive.Viewport className='p-1'>
              <SelectPrimitive.Item
                value='react'
                className='relative flex cursor-default select-none items-center rounded-sm py-2 pl-8 pr-3 text-sm outline-none focus:bg-accent focus:text-accent-foreground'
              >
                <SelectPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
                  <Check className='h-4 w-4' />
                </SelectPrimitive.ItemIndicator>
                <SelectPrimitive.ItemText>React</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>

              <SelectPrimitive.Item
                value='vue'
                className='relative flex cursor-default select-none items-center rounded-sm py-2 pl-8 pr-3 text-sm outline-none focus:bg-accent focus:text-accent-foreground'
              >
                <SelectPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
                  <Check className='h-4 w-4' />
                </SelectPrimitive.ItemIndicator>
                <SelectPrimitive.ItemText>Vue</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>

              <SelectPrimitive.Item
                value='angular'
                className='relative flex cursor-default select-none items-center rounded-sm py-2 pl-8 pr-3 text-sm outline-none focus:bg-accent focus:text-accent-foreground'
              >
                <SelectPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
                  <Check className='h-4 w-4' />
                </SelectPrimitive.ItemIndicator>
                <SelectPrimitive.ItemText>Angular</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
}

export default function FormsPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Comparison'
        title='Forms'
        description='Compare how each system handles common form controls, styling, and composition.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='Composable, utility-styled components that feel close to app-level design system code.'
        >
          <div className='space-y-5'>
            <div className='space-y-2'>
              <Label htmlFor='shadcn-name'>Name</Label>
              <Input id='shadcn-name' placeholder='Enter your name' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='shadcn-stack'>Favorite stack</Label>
              <Select defaultValue='react'>
                <SelectTrigger id='shadcn-stack' className='w-full'>
                  <SelectValue placeholder='Select a stack' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='react'>React</SelectItem>
                  <SelectItem value='vue'>Vue</SelectItem>
                  <SelectItem value='angular'>Angular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='flex items-center gap-3'>
              <Checkbox id='shadcn-terms' />
              <Label htmlFor='shadcn-terms'>Accept terms</Label>
            </div>

            <div className='flex items-center justify-between rounded-lg border p-3'>
              <Label htmlFor='shadcn-notifications'>Enable notifications</Label>
              <Switch id='shadcn-notifications' />
            </div>
          </div>
        </DemoCard>

        <DemoCard
          title='MUI'
          description='High-level form controls with consistent behavior and strong defaults out of the box.'
        >
          <Stack spacing={3}>
            <TextFieldBlock />
          </Stack>
        </DemoCard>

        <DemoCard
          title='Radix + custom styling'
          description='Primitive-first controls that give you accessible behavior while you own the presentation layer.'
        >
          <div className='space-y-5'>
            <div className='space-y-2'>
              <label htmlFor='radix-name' className='text-sm font-medium'>
                Name
              </label>
              <input
                id='radix-name'
                placeholder='Enter your name'
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              />
            </div>

            <RadixSelectRow />
            <RadixCheckboxRow />
            <RadixSwitchRow />
          </div>
        </DemoCard>
      </div>
    </div>
  );
}

function TextFieldBlock() {
  const [stack, setStack] = React.useState('react');

  return (
    <>
      <MuiTextField
        label='Name'
        variant='outlined'
        fullWidth
        placeholder='Enter your name'
      />

      <MuiTextField
        select
        label='Favorite stack'
        value={stack}
        onChange={(e) => setStack(e.target.value)}
        fullWidth
      >
        <MuiMenuItem value='react'>React</MuiMenuItem>
        <MuiMenuItem value='vue'>Vue</MuiMenuItem>
        <MuiMenuItem value='angular'>Angular</MuiMenuItem>
      </MuiTextField>

      <MuiFormControlLabel control={<MuiCheckbox />} label='Accept terms' />
      <MuiFormControlLabel
        control={<MuiSwitch />}
        label='Enable notifications'
      />
    </>
  );
}
