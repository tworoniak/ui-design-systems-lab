type ComparisonNotesProps = {
  items: {
    label: string;
    radix: string;
    shadcn: string;
    mui: string;
  }[];
};

export default function ComparisonNotes({ items }: ComparisonNotesProps) {
  return (
    <div className='rounded-2xl border bg-card p-6 shadow-sm'>
      <h3 className='text-lg font-semibold'>Quick notes</h3>

      <div className='mt-4 space-y-4'>
        {items.map((item) => (
          <div key={item.label} className='rounded-xl border p-4'>
            <h4 className='font-medium'>{item.label}</h4>
            <div className='mt-3 grid gap-3 md:grid-cols-3'>
              <div>
                <p className='text-sm font-semibold'>Radix</p>
                <p className='mt-1 text-sm text-muted-foreground'>
                  {item.radix}
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold'>shadcn/ui</p>
                <p className='mt-1 text-sm text-muted-foreground'>
                  {item.shadcn}
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold'>MUI</p>
                <p className='mt-1 text-sm text-muted-foreground'>{item.mui}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
