import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiButton from '@mui/material/Button';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';
import { ChevronDown, X } from 'lucide-react';

function ShadcnOverlayDemo() {
  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap gap-3'>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>shadcn Dialog</DialogTitle>
              <DialogDescription>
                This is a prebuilt app-level dialog component built on Radix
                primitives.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant='outline'>Cancel</Button>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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

      <Tabs defaultValue='account' className='w-full'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='billing'>Billing</TabsTrigger>
          <TabsTrigger value='team'>Team</TabsTrigger>
        </TabsList>
        <TabsContent value='account' className='rounded-xl border p-4 text-sm'>
          Account settings content.
        </TabsContent>
        <TabsContent value='billing' className='rounded-xl border p-4 text-sm'>
          Billing settings content.
        </TabsContent>
        <TabsContent value='team' className='rounded-xl border p-4 text-sm'>
          Team settings content.
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MuiOverlayDemo() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const [tab, setTab] = React.useState(0);

  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap gap-3'>
        <MuiButton variant='contained' onClick={() => setDialogOpen(true)}>
          Open dialog
        </MuiButton>

        <MuiButton
          variant='outlined'
          onClick={(e) => setMenuAnchor(e.currentTarget)}
          endIcon={<ChevronDown className='h-4 w-4' />}
        >
          Actions
        </MuiButton>

        <MuiDialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <MuiDialogTitle>MUI Dialog</MuiDialogTitle>
          <MuiDialogContent>
            This is a higher-level modal component with strong defaults and a
            prop-driven API.
          </MuiDialogContent>
          <MuiDialogActions>
            <MuiButton onClick={() => setDialogOpen(false)}>Cancel</MuiButton>
            <MuiButton variant='contained' onClick={() => setDialogOpen(false)}>
              Save changes
            </MuiButton>
          </MuiDialogActions>
        </MuiDialog>

        <MuiMenu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => setMenuAnchor(null)}
        >
          <MuiMenuItem onClick={() => setMenuAnchor(null)}>
            Edit profile
          </MuiMenuItem>
          <MuiMenuItem onClick={() => setMenuAnchor(null)}>
            Duplicate
          </MuiMenuItem>
          <MuiMenuItem onClick={() => setMenuAnchor(null)}>Archive</MuiMenuItem>
        </MuiMenu>
      </div>

      <Box>
        <MuiTabs value={tab} onChange={(_, value) => setTab(value)}>
          <MuiTab label='Account' />
          <MuiTab label='Billing' />
          <MuiTab label='Team' />
        </MuiTabs>

        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 2,
            mt: 1,
          }}
        >
          {tab === 0 && <p>Account settings content.</p>}
          {tab === 1 && <p>Billing settings content.</p>}
          {tab === 2 && <p>Team settings content.</p>}
        </Box>
      </Box>
    </div>
  );
}

function RadixDialogDemo() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <button className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90'>
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
                Radix provides the accessible behavior and structure. You build
                the presentation.
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
                Save changes
              </button>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function RadixDropdownDemo() {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          type='button'
          className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-accent'
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
  );
}

function RadixTabsDemo() {
  return (
    <TabsPrimitive.Root defaultValue='account' className='w-full'>
      <TabsPrimitive.List className='grid w-full grid-cols-3 rounded-lg bg-muted p-1'>
        <TabsPrimitive.Trigger
          value='account'
          className='rounded-md px-3 py-2 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm'
        >
          Account
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value='billing'
          className='rounded-md px-3 py-2 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm'
        >
          Billing
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value='team'
          className='rounded-md px-3 py-2 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm'
        >
          Team
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>

      <TabsPrimitive.Content
        value='account'
        className='mt-3 rounded-xl border p-4 text-sm'
      >
        Account settings content.
      </TabsPrimitive.Content>
      <TabsPrimitive.Content
        value='billing'
        className='mt-3 rounded-xl border p-4 text-sm'
      >
        Billing settings content.
      </TabsPrimitive.Content>
      <TabsPrimitive.Content
        value='team'
        className='mt-3 rounded-xl border p-4 text-sm'
      >
        Team settings content.
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}

function RadixOverlayDemo() {
  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap gap-3'>
        <RadixDialogDemo />
        <RadixDropdownDemo />
      </div>

      <RadixTabsDemo />
    </div>
  );
}

export default function OverlaysPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Comparison'
        title='Overlays'
        description='Compare dialog, menu, and tabs patterns across shadcn/ui, MUI, and raw Radix primitives.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='App-ready overlay components built on top of Radix primitives.'
        >
          <ShadcnOverlayDemo />
        </DemoCard>

        <DemoCard
          title='MUI'
          description='High-level overlay components with prop-driven APIs and built-in visual defaults.'
        >
          <MuiOverlayDemo />
        </DemoCard>

        <DemoCard
          title='Radix + custom styling'
          description='Radix provides behavior, focus management, and accessibility while you fully own the UI layer.'
        >
          <RadixOverlayDemo />
        </DemoCard>
      </div>
    </div>
  );
}
