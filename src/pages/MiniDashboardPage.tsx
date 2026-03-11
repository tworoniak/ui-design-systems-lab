import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import MuiButton from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiChip from '@mui/material/Chip';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiTextField from '@mui/material/TextField';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { MoreHorizontal, Search, SlidersHorizontal } from 'lucide-react';

import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  dashboardStats,
  reviewItems,
  type ReviewItem,
} from '@/data/dashboardData';
import { getStatusBadgeClass } from '@/lib/statusStyles';

function ShadcnDashboardDemo() {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 sm:grid-cols-3'>
        {dashboardStats.map((stat) => (
          <Card key={stat.label} className='rounded-xl'>
            <CardContent className='p-5'>
              <p className='text-sm text-muted-foreground'>{stat.label}</p>
              <p className='mt-2 text-2xl font-bold'>{stat.value}</p>
              <p className='mt-1 text-xs text-muted-foreground'>
                {stat.helper}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
        <div className='relative w-full lg:max-w-sm'>
          <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input className='pl-9' placeholder='Search reviews...' />
        </div>

        <div className='flex gap-2'>
          <Button variant='outline'>
            <SlidersHorizontal className='mr-2 h-4 w-4' />
            Filters
          </Button>
          <Button>New review</Button>
        </div>
      </div>

      <div className='overflow-hidden rounded-xl border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Artist</TableHead>
              <TableHead>Album</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Due</TableHead>
              <TableHead className='w-17.5'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviewItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className='font-medium'>{item.artist}</TableCell>
                <TableCell>{item.album}</TableCell>
                <TableCell>
                  <Badge
                    className={`border ${getStatusBadgeClass(item.status)}`}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.score}</TableCell>
                <TableCell>{item.due}</TableCell>
                <TableCell>
                  <RowActionsShadcn />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className='rounded-xl border p-4'>
        <p className='text-sm font-semibold'>Why this matters</p>
        <p className='mt-2 text-sm text-muted-foreground'>
          shadcn/ui feels especially strong for dashboard-style apps because the
          components are app-owned and easy to align to your product’s visual
          system.
        </p>
      </div>
    </div>
  );
}

function RowActionsShadcn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Open row actions'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MuiDashboardDemo() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <div className='space-y-6'>
      <div className='grid gap-4 sm:grid-cols-3'>
        {dashboardStats.map((stat) => (
          <MuiCard
            key={stat.label}
            elevation={0}
            sx={{
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <MuiCardContent>
              <p className='text-sm text-muted-foreground'>{stat.label}</p>
              <p className='mt-2 text-2xl font-bold'>{stat.value}</p>
              <p className='mt-1 text-xs text-muted-foreground'>
                {stat.helper}
              </p>
            </MuiCardContent>
          </MuiCard>
        ))}
      </div>

      <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
        <MuiTextField
          size='small'
          fullWidth
          placeholder='Search reviews...'
          sx={{ maxWidth: 320 }}
        />
        <div className='flex gap-2'>
          <MuiButton
            variant='outlined'
            startIcon={<SlidersHorizontal className='h-4 w-4' />}
          >
            Filters
          </MuiButton>
          <MuiButton variant='contained'>New review</MuiButton>
        </div>
      </div>

      <MuiTableContainer
        component={Paper}
        elevation={0}
        sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
      >
        <MuiTable>
          <MuiTableHead>
            <MuiTableRow>
              <MuiTableCell>Artist</MuiTableCell>
              <MuiTableCell>Album</MuiTableCell>
              <MuiTableCell>Status</MuiTableCell>
              <MuiTableCell>Score</MuiTableCell>
              <MuiTableCell>Due</MuiTableCell>
              <MuiTableCell>Actions</MuiTableCell>
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            {reviewItems.map((item) => (
              <MuiTableRow key={item.id}>
                <MuiTableCell>{item.artist}</MuiTableCell>
                <MuiTableCell>{item.album}</MuiTableCell>
                <MuiTableCell>
                  <MuiChip
                    label={item.status}
                    size='small'
                    color={getMuiChipColor(item.status)}
                    variant='outlined'
                  />
                </MuiTableCell>
                <MuiTableCell>{item.score}</MuiTableCell>
                <MuiTableCell>{item.due}</MuiTableCell>
                <MuiTableCell>
                  <MuiButton
                    size='small'
                    variant='text'
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                  >
                    <MoreHorizontal className='h-4 w-4' />
                  </MuiButton>
                </MuiTableCell>
              </MuiTableRow>
            ))}
          </MuiTableBody>
        </MuiTable>
      </MuiTableContainer>

      <MuiMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MuiMenuItem onClick={() => setAnchorEl(null)}>Edit</MuiMenuItem>
        <MuiMenuItem onClick={() => setAnchorEl(null)}>Duplicate</MuiMenuItem>
        <MuiMenuItem onClick={() => setAnchorEl(null)}>Archive</MuiMenuItem>
      </MuiMenu>

      <div className='rounded-xl border p-4'>
        <p className='text-sm font-semibold'>Why this matters</p>
        <p className='mt-2 text-sm text-muted-foreground'>
          MUI is very fast for dashboard work because cards, chips, tables,
          menus, and form controls all share a consistent API model.
        </p>
      </div>
    </div>
  );
}

function getMuiChipColor(
  status: ReviewItem['status'],
): 'success' | 'warning' | 'info' {
  switch (status) {
    case 'Published':
      return 'success';
    case 'Draft':
      return 'warning';
    case 'Scheduled':
      return 'info';
    default:
      return 'info';
  }
}

function CustomDashboardDemo() {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 sm:grid-cols-3'>
        {dashboardStats.map((stat) => (
          <div
            key={stat.label}
            className='rounded-xl border bg-background p-5 shadow-sm'
          >
            <p className='text-sm text-muted-foreground'>{stat.label}</p>
            <p className='mt-2 text-2xl font-bold'>{stat.value}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{stat.helper}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
        <div className='relative w-full lg:max-w-sm'>
          <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <input
            className='h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
            placeholder='Search reviews...'
          />
        </div>

        <div className='flex gap-2'>
          <button
            type='button'
            className='inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          >
            <SlidersHorizontal className='mr-2 h-4 w-4' />
            Filters
          </button>
          <button
            type='button'
            className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          >
            New review
          </button>
        </div>
      </div>

      <div className='overflow-hidden rounded-xl border'>
        <table className='w-full text-sm'>
          <thead className='bg-muted/40'>
            <tr>
              <th className='px-4 py-3 text-left font-medium'>Artist</th>
              <th className='px-4 py-3 text-left font-medium'>Album</th>
              <th className='px-4 py-3 text-left font-medium'>Status</th>
              <th className='px-4 py-3 text-left font-medium'>Score</th>
              <th className='px-4 py-3 text-left font-medium'>Due</th>
              <th className='px-4 py-3 text-left font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviewItems.map((item) => (
              <tr key={item.id} className='border-t'>
                <td className='px-4 py-3 font-medium'>{item.artist}</td>
                <td className='px-4 py-3'>{item.album}</td>
                <td className='px-4 py-3'>
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusBadgeClass(item.status)}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className='px-4 py-3'>{item.score}</td>
                <td className='px-4 py-3'>{item.due}</td>
                <td className='px-4 py-3'>
                  <CustomRowActions />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='rounded-xl border p-4'>
        <p className='text-sm font-semibold'>Why this matters</p>
        <p className='mt-2 text-sm text-muted-foreground'>
          A custom or Radix-style workflow is strongest when your dashboard
          needs a more bespoke visual identity than a library default can easily
          provide.
        </p>
      </div>
    </div>
  );
}

function CustomRowActions() {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          type='button'
          className='inline-flex h-9 w-9 items-center justify-center rounded-md border transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          aria-label='Open row actions'
        >
          <MoreHorizontal className='h-4 w-4' />
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={8}
          align='end'
          className='z-50 min-w-45 rounded-md border bg-popover p-1 text-popover-foreground shadow-md'
        >
          <DropdownMenuPrimitive.Item className='cursor-default rounded-sm px-3 py-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground'>
            Edit
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

export default function MiniDashboardPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Case Study'
        title='Mini Dashboard'
        description='Compare how the same dashboard surface feels when built with shadcn/ui, MUI, and a custom Radix-style approach.'
      />

      <div className='space-y-6'>
        <DemoCard
          title='shadcn/ui'
          description='A strong fit for modern app dashboards where local ownership and cohesive styling matter.'
        >
          <ShadcnDashboardDemo />
        </DemoCard>

        <DemoCard
          title='MUI'
          description='Fast, consistent, and productive when you want robust dashboard building blocks immediately.'
        >
          <MuiDashboardDemo />
        </DemoCard>

        <DemoCard
          title='Custom / Radix-style'
          description='Most flexible when you want the dashboard to feel distinct and tightly aligned to your own tokens.'
        >
          <CustomDashboardDemo />
        </DemoCard>
      </div>

      <div className='mt-8 rounded-2xl border bg-card p-6 shadow-sm'>
        <h3 className='text-lg font-semibold'>What this demonstrates</h3>
        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>shadcn/ui</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Gives you a very practical dashboard foundation while keeping the
              component code inside your repo.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>MUI</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Makes it easy to assemble full product surfaces quickly because
              the library coverage is broad and consistent.
            </p>
          </div>

          <div className='rounded-xl border p-4'>
            <p className='text-sm font-semibold'>Custom / Radix-style</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              Gives you the strongest control over layout rhythm, data density,
              status styling, and overall visual tone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
