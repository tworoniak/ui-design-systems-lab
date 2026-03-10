export default function Footer() {
  return (
    <footer className='border-t bg-background/50 p-4 text-center text-sm text-muted-foreground'>
      &copy; {new Date().getFullYear()} UI Systems Lab. All rights reserved.
    </footer>
  );
}
