import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, AlertCircle } from 'lucide-react';

import MuiAlert from '@mui/material/Alert';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiChip from '@mui/material/Chip';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import PageHeader from '@/components/shared/PageHeader';
import DemoCard from '@/components/shared/DemoCard';

const releases = [
  {
    name: 'Spiritbox',
    album: 'Tsunami Sea',
    status: 'Published',
    score: '9/10',
  },
  { name: 'HATE', album: 'Bellum Regiis', status: 'Draft', score: '—' },
  {
    name: 'Rwake',
    album: 'The Return Of Magik',
    status: 'Scheduled',
    score: '8.5/10',
  },
];

function ShadcnDataDisplay() {
  return (
    <div className='space-y-6'>
      <Card className='rounded-xl'>
        <CardHeader>
          <div className='flex items-center justify-between gap-3'>
            <div>
              <CardTitle>Editorial dashboard</CardTitle>
              <CardDescription>
                Recent review activity and publishing status.
              </CardDescription>
            </div>
            <Badge>Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground'>
            This is a typical app card pattern composed from local UI
            components.
          </p>
        </CardContent>
      </Card>

      <Alert>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>
          Two review deadlines are coming up this week.
        </AlertDescription>
      </Alert>

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Why use shadcn for data display?</AccordionTrigger>
          <AccordionContent>
            You get app-ready components that are easy to tweak because the
            source lives in your project.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className='rounded-xl border overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Artist</TableHead>
              <TableHead>Album</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {releases.map((release) => (
              <TableRow key={release.album}>
                <TableCell className='font-medium'>{release.name}</TableCell>
                <TableCell>{release.album}</TableCell>
                <TableCell>{release.status}</TableCell>
                <TableCell>{release.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function MuiDataDisplay() {
  return (
    <div className='space-y-6'>
      <MuiCard
        elevation={0}
        sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
      >
        <MuiCardContent>
          <div className='flex items-center justify-between gap-3'>
            <div>
              <h3 className='text-lg font-semibold'>Editorial dashboard</h3>
              <p className='text-sm text-muted-foreground'>
                Recent review activity and publishing status.
              </p>
            </div>
            <MuiChip label='Active' color='primary' size='small' />
          </div>
        </MuiCardContent>
      </MuiCard>

      <MuiAlert severity='warning'>
        Two review deadlines are coming up this week.
      </MuiAlert>

      <MuiAccordion
        elevation={0}
        sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
      >
        <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
          Why use MUI for data display?
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          MUI gives you polished, high-level components that work quickly with
          consistent defaults.
        </MuiAccordionDetails>
      </MuiAccordion>

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
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            {releases.map((release) => (
              <MuiTableRow key={release.album}>
                <MuiTableCell>{release.name}</MuiTableCell>
                <MuiTableCell>{release.album}</MuiTableCell>
                <MuiTableCell>{release.status}</MuiTableCell>
                <MuiTableCell>{release.score}</MuiTableCell>
              </MuiTableRow>
            ))}
          </MuiTableBody>
        </MuiTable>
      </MuiTableContainer>
    </div>
  );
}

function RadixAccordionDemo() {
  return (
    <AccordionPrimitive.Root
      type='single'
      collapsible
      className='w-full rounded-xl border'
    >
      <AccordionPrimitive.Item
        value='item-1'
        className='border-b last:border-b-0'
      >
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className='group flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium'>
            Why use Radix for data display?
            <ChevronDown className='h-4 w-4 transition-transform group-data-[state=open]:rotate-180' />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className='px-4 pb-4 text-sm text-muted-foreground'>
          Radix gives you accessible behavior primitives. You decide what the
          visual system looks like.
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
}

function RadixDataDisplay() {
  return (
    <div className='space-y-6'>
      <div className='rounded-xl border bg-background p-6 shadow-sm'>
        <div className='flex items-center justify-between gap-3'>
          <div>
            <h3 className='text-lg font-semibold'>Editorial dashboard</h3>
            <p className='text-sm text-muted-foreground'>
              Recent review activity and publishing status.
            </p>
          </div>
          <span className='inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium'>
            Active
          </span>
        </div>
      </div>

      <div className='rounded-xl border border-amber-300/40 bg-amber-500/10 p-4'>
        <div className='flex items-start gap-3'>
          <AlertCircle className='mt-0.5 h-4 w-4' />
          <div>
            <p className='text-sm font-semibold'>Heads up</p>
            <p className='text-sm text-muted-foreground'>
              Two review deadlines are coming up this week.
            </p>
          </div>
        </div>
      </div>

      <RadixAccordionDemo />

      <div className='overflow-hidden rounded-xl border'>
        <table className='w-full text-sm'>
          <thead className='bg-muted/50'>
            <tr>
              <th className='px-4 py-3 text-left font-medium'>Artist</th>
              <th className='px-4 py-3 text-left font-medium'>Album</th>
              <th className='px-4 py-3 text-left font-medium'>Status</th>
              <th className='px-4 py-3 text-left font-medium'>Score</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release) => (
              <tr key={release.album} className='border-t'>
                <td className='px-4 py-3 font-medium'>{release.name}</td>
                <td className='px-4 py-3'>{release.album}</td>
                <td className='px-4 py-3'>{release.status}</td>
                <td className='px-4 py-3'>{release.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function DataDisplayPage() {
  return (
    <div>
      <PageHeader
        eyebrow='Comparison'
        title='Data Display'
        description='Compare cards, alerts, accordion patterns, badges, and tables across shadcn/ui, MUI, and Radix-style custom UI.'
      />

      <div className='grid gap-6 xl:grid-cols-3'>
        <DemoCard
          title='shadcn/ui'
          description='Composable app-level display components that are easy to customize.'
        >
          <ShadcnDataDisplay />
        </DemoCard>

        <DemoCard
          title='MUI'
          description='High-level components with consistent defaults and quick assembly.'
        >
          <MuiDataDisplay />
        </DemoCard>

        <DemoCard
          title='Radix + custom styling'
          description='Primitive-driven behavior paired with fully custom presentation.'
        >
          <RadixDataDisplay />
        </DemoCard>
      </div>
    </div>
  );
}
