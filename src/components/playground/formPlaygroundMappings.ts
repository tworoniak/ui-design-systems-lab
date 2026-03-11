import type { PlaygroundDensity, PlaygroundSize } from './playgroundTypes';

export function getFieldHeight(
  size: PlaygroundSize,
  density: PlaygroundDensity,
) {
  if (size === 'sm') return density === 'compact' ? 'h-8' : 'h-9';
  if (size === 'lg') return density === 'compact' ? 'h-10' : 'h-11';
  return density === 'compact' ? 'h-9' : 'h-10';
}

export function getFieldPadding(size: PlaygroundSize) {
  if (size === 'sm') return 'px-2.5 text-sm';
  if (size === 'lg') return 'px-4 text-base';
  return 'px-3 text-sm';
}

export function mapMuiSize(size: PlaygroundSize): 'small' | 'medium' {
  if (size === 'sm') return 'small';
  return 'medium';
}

export function getContainerGap(density: PlaygroundDensity) {
  return density === 'compact' ? 'space-y-3' : 'space-y-5';
}
