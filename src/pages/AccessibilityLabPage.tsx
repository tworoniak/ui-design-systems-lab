import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import MuiButton from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';

import { ChevronDown, X } from 'lucide-react';

import AccessibilitySection from '@/components/accessibility/AccessibilitySection';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function FocusStateSection() {
  return (
    <AccessibilitySection
      title='Focus states'
      description='Use Tab to move through these controls. A good design system makes focus visible and consistent.'
    >
      <div className='grid gap-6 md:grid-cols-3'>
        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>shadcn/ui</p>
          <div className='flex flex-wrap gap-3'>
            <Button>Primary</Button>
            <Button variant='outline'>Outline</Button>
            <input
              className='h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              placeholder='Tab to me'
            />
          </div>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>MUI</p>
          <div className='flex flex-wrap gap-3'>
            <MuiButton variant='contained'>Primary</MuiButton>
            <MuiButton variant='outlined'>Outline</MuiButton>
            <input
              className='h-10 rounded-md border border-input bg-background px-3 text-sm'
              placeholder='Tab to me'
            />
          </div>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>Custom / Radix-style</p>
          <div className='flex flex-wrap gap-3'>
            <button
              type='button'
              className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
            >
              Primary
            </button>
            <button
              type='button'
              className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
            >
              Outline
            </button>
            <input
              className='h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              placeholder='Tab to me'
            />
          </div>
        </div>
      </div>
    </AccessibilitySection>
  );
}

function KeyboardMenuSection() {
  const [muiAnchor, setMuiAnchor] = React.useState<null | HTMLElement>(null);

  return (
    <AccessibilitySection
      title='Keyboard-friendly menus'
      description='Open these menus with Enter or Space, then try Arrow keys and Escape.'
    >
      <div className='grid gap-6 md:grid-cols-3'>
        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>shadcn/ui</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline'>
                Actions
                <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
              <DropdownMenuItem>Edit profile</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>MUI</p>
          <MuiButton
            variant='outlined'
            onClick={(e) => setMuiAnchor(e.currentTarget)}
            endIcon={<ChevronDown className='h-4 w-4' />}
          >
            Actions
          </MuiButton>
          <MuiMenu
            anchorEl={muiAnchor}
            open={Boolean(muiAnchor)}
            onClose={() => setMuiAnchor(null)}
          >
            <MuiMenuItem onClick={() => setMuiAnchor(null)}>
              Edit profile
            </MuiMenuItem>
            <MuiMenuItem onClick={() => setMuiAnchor(null)}>
              Duplicate
            </MuiMenuItem>
            <MuiMenuItem onClick={() => setMuiAnchor(null)}>
              Archive
            </MuiMenuItem>
          </MuiMenu>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>
            Custom / Radix primitives
          </p>
          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              <button
                type='button'
                className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              >
                Actions
                <ChevronDown className='ml-2 h-4 w-4' />
              </button>
            </DropdownMenuPrimitive.Trigger>

            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.Content
                sideOffset={8}
                className='z-50 min-w-45 rounded-md border bg-popover p-1 text-popover-foreground shadow-md'
              >
                <DropdownMenuPrimitive.Item className='cursor-default rounded-sm px-3 py-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground'>
                  Edit profile
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item className='cursor-default rounded-sm px-3 py-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground'>
                  Duplicate
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item className='cursor-default rounded-sm px-3 py-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground'>
                  Archive
                </DropdownMenuPrimitive.Item>
              </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Root>
        </div>
      </div>
    </AccessibilitySection>
  );
}

function DialogSection() {
  const [muiOpen, setMuiOpen] = React.useState(false);

  return (
    <AccessibilitySection
      title='Dialog behavior'
      description='Try opening a dialog, then use Tab, Shift+Tab, and Escape. Good dialogs trap focus and restore it when closed.'
    >
      <div className='grid gap-6 md:grid-cols-3'>
        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>shadcn/ui</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>shadcn Dialog</DialogTitle>
                <DialogDescription>
                  Focus should remain inside the dialog while it is open.
                </DialogDescription>
              </DialogHeader>
              <div className='space-y-3'>
                <input
                  className='h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  placeholder='Focusable field'
                />
                <Button variant='outline'>Secondary action</Button>
              </div>
              <DialogFooter>
                <Button variant='outline'>Cancel</Button>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>MUI</p>
          <MuiButton variant='contained' onClick={() => setMuiOpen(true)}>
            Open dialog
          </MuiButton>
          <MuiDialog open={muiOpen} onClose={() => setMuiOpen(false)}>
            <MuiDialogTitle>MUI Dialog</MuiDialogTitle>
            <MuiDialogContent>
              <div className='space-y-3 pt-2'>
                <p className='text-sm'>
                  Focus should stay inside the dialog while open.
                </p>
                <input
                  className='h-10 w-full rounded-md border border-input bg-background px-3 text-sm'
                  placeholder='Focusable field'
                />
              </div>
            </MuiDialogContent>
            <MuiDialogActions>
              <MuiButton onClick={() => setMuiOpen(false)}>Cancel</MuiButton>
              <MuiButton variant='contained' onClick={() => setMuiOpen(false)}>
                Save
              </MuiButton>
            </MuiDialogActions>
          </MuiDialog>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='mb-3 text-sm font-semibold'>
            Custom / Radix primitives
          </p>
          <DialogPrimitive.Root>
            <DialogPrimitive.Trigger asChild>
              <button
                type='button'
                className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              >
                Open dialog
              </button>
            </DialogPrimitive.Trigger>

            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className='fixed inset-0 z-40 bg-black/50' />
              <DialogPrimitive.Content className='fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-background p-6 shadow-lg'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <DialogPrimitive.Title className='text-lg font-semibold'>
                      Radix Dialog
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className='mt-2 text-sm text-muted-foreground'>
                      Radix handles focus trapping and escape behavior while you
                      build the UI.
                    </DialogPrimitive.Description>
                  </div>

                  <DialogPrimitive.Close asChild>
                    <button
                      type='button'
                      className='inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-accent'
                      aria-label='Close'
                    >
                      <X className='h-4 w-4' />
                    </button>
                  </DialogPrimitive.Close>
                </div>

                <div className='mt-5 space-y-3'>
                  <input
                    className='h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                    placeholder='Focusable field'
                  />
                  <button
                    type='button'
                    className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  >
                    Secondary action
                  </button>
                </div>

                <div className='mt-6 flex justify-end gap-3'>
                  <DialogPrimitive.Close asChild>
                    <button
                      type='button'
                      className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-accent'
                    >
                      Cancel
                    </button>
                  </DialogPrimitive.Close>

                  <DialogPrimitive.Close asChild>
                    <button
                      type='button'
                      className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90'
                    >
                      Save
                    </button>
                  </DialogPrimitive.Close>
                </div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </div>
      </div>
    </AccessibilitySection>
  );
}

function ChecklistSection() {
  const items = [
    'Can every interactive element be reached with Tab?',
    'Is the focused element visually obvious?',
    'Can menus be opened and navigated with the keyboard?',
    'Does Escape close dialogs and menus when expected?',
    'Is focus trapped inside dialogs while open?',
    'Does focus return to the trigger after closing a dialog?',
    'Are labels clear for inputs, switches, and checkboxes?',
    'Do hover-only interactions still work for keyboard users?',
  ];

  return (
    <AccessibilitySection
      title='Manual accessibility checklist'
      description='These quick tests are useful any time you compare or build components.'
    >
      <div className='grid gap-3'>
        {items.map((item) => (
          <div
            key={item}
            className='flex items-start gap-3 rounded-xl border p-4'
          >
            <div className='mt-0.5 h-2.5 w-2.5 rounded-full bg-primary' />
            <p className='text-sm'>{item}</p>
          </div>
        ))}
      </div>
    </AccessibilitySection>
  );
}

function TakeawaysSection() {
  return (
    <AccessibilitySection
      title='Accessibility takeaways'
      description='This is the biggest reason Radix and shadcn are so widely respected.'
    >
      <div className='grid gap-4 md:grid-cols-3'>
        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>Radix</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Best when you want accessible behavior primitives without giving up
            control over the UI layer.
          </p>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>shadcn/ui</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Great when you want the benefits of Radix accessibility patterns
            wrapped in app-level components.
          </p>
        </div>

        <div className='rounded-xl border p-4'>
          <p className='text-sm font-semibold'>MUI</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            Strong built-in accessibility defaults, especially helpful when you
            need high-level components quickly.
          </p>
        </div>
      </div>
    </AccessibilitySection>
  );
}

export default function AccessibilityLabPage() {
  return (
    <div className='space-y-8'>
      <PageHeader
        eyebrow='Case Study'
        title='Accessibility Lab'
        description='Test focus visibility, keyboard interaction, menus, and dialog behavior across shadcn/ui, MUI, and Radix primitives.'
      />

      <FocusStateSection />
      <KeyboardMenuSection />
      <DialogSection />
      <ChecklistSection />
      <TakeawaysSection />
    </div>
  );
}
