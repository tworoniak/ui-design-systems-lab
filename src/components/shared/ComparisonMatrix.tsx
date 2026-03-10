type MatrixRow = {
  category: string;
  radix: string;
  shadcn: string;
  mui: string;
};

type ComparisonMatrixProps = {
  rows: MatrixRow[];
};

export default function ComparisonMatrix({ rows }: ComparisonMatrixProps) {
  return (
    <div className='overflow-hidden rounded-2xl border bg-card shadow-sm'>
      <div className='grid grid-cols-4 border-b bg-muted/40'>
        <div className='p-4 text-sm font-semibold'>Category</div>
        <div className='p-4 text-sm font-semibold'>Radix</div>
        <div className='p-4 text-sm font-semibold'>shadcn/ui</div>
        <div className='p-4 text-sm font-semibold'>MUI</div>
      </div>

      {rows.map((row) => (
        <div
          key={row.category}
          className='grid grid-cols-4 border-b last:border-b-0'
        >
          <div className='p-4 text-sm font-medium'>{row.category}</div>
          <div className='p-4 text-sm text-muted-foreground'>{row.radix}</div>
          <div className='p-4 text-sm text-muted-foreground'>{row.shadcn}</div>
          <div className='p-4 text-sm text-muted-foreground'>{row.mui}</div>
        </div>
      ))}
    </div>
  );
}
