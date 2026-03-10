export default function Topbar() {
  return (
    <header className='border-b bg-background/80 backdrop-blur'>
      <div className='flex items-center justify-between px-6 py-4 md:px-8'>
        <div>
          <p className='text-sm text-muted-foreground'>
            React + TypeScript + Radix + shadcn/ui + MUI
          </p>
          <h2 className='text-lg font-semibold'>
            Component comparison playground
          </h2>
        </div>
      </div>
    </header>
  );
}
