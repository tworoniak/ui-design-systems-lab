import type { PlaygroundSize, PlaygroundVariant } from './playgroundTypes';

export function mapShadcnVariant(variant: PlaygroundVariant) {
  switch (variant) {
    case 'primary':
      return 'default';
    case 'secondary':
      return 'secondary';
    case 'outline':
      return 'outline';
    case 'ghost':
      return 'ghost';
    case 'destructive':
      return 'destructive';
    default:
      return 'default';
  }
}

export function mapShadcnSize(size: PlaygroundSize) {
  switch (size) {
    case 'sm':
      return 'sm';
    case 'md':
      return 'default';
    case 'lg':
      return 'lg';
    default:
      return 'default';
  }
}

export function mapMuiVariant(
  variant: PlaygroundVariant,
): 'contained' | 'outlined' | 'text' {
  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'destructive':
      return 'contained';
    case 'outline':
      return 'outlined';
    case 'ghost':
      return 'text';
    default:
      return 'contained';
  }
}

export function mapMuiColor(
  variant: PlaygroundVariant,
): 'primary' | 'secondary' | 'error' | 'inherit' {
  switch (variant) {
    case 'secondary':
      return 'secondary';
    case 'destructive':
      return 'error';
    case 'ghost':
      return 'inherit';
    default:
      return 'primary';
  }
}

export function mapMuiSize(size: PlaygroundSize): 'small' | 'medium' | 'large' {
  switch (size) {
    case 'sm':
      return 'small';
    case 'md':
      return 'medium';
    case 'lg':
      return 'large';
    default:
      return 'medium';
  }
}

export function customButtonClasses(
  variant: PlaygroundVariant,
  size: PlaygroundSize,
  disabled: boolean,
) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
    destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-6 text-base',
  };

  const disabledClasses = disabled ? 'pointer-events-none opacity-50' : '';

  return `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;
}
