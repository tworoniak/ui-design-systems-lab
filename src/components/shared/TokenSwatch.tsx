type TokenSwatchProps = {
  label: string;
  className: string;
  textClassName?: string;
};

export default function TokenSwatch({
  label,
  className,
  textClassName = 'text-foreground',
}: TokenSwatchProps) {
  return (
    <div className='space-y-2'>
      <div className={`h-16 rounded-xl border ${className}`} />
      <p className={`text-sm font-medium ${textClassName}`}>{label}</p>
    </div>
  );
}
