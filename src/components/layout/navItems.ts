import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  MousePointerClick,
  FormInput,
  Layers3,
  TableProperties,
  PanelTop,
  Palette,
  SlidersHorizontal,
  ShieldCheck,
  MonitorSmartphone,
  CircleDashed,
  Scale,
} from 'lucide-react';

export type AppNavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
};

export const navItems: AppNavItem[] = [
  { to: '/', label: 'Home', icon: LayoutDashboard, end: true },
  { to: '/buttons', label: 'Buttons', icon: MousePointerClick },
  { to: '/forms', label: 'Forms', icon: FormInput },
  { to: '/overlays', label: 'Overlays', icon: Layers3 },
  { to: '/data-display', label: 'Data Display', icon: TableProperties },
  { to: '/navigation-feedback', label: 'Nav & Feedback', icon: PanelTop },
  { to: '/theming', label: 'Theming', icon: Palette },
  { to: '/playground', label: 'Button Playground', icon: SlidersHorizontal },
  {
    to: '/playground/forms',
    label: 'Form Playground',
    icon: SlidersHorizontal,
  },
  { to: '/accessibility', label: 'Accessibility Lab', icon: ShieldCheck },
  { to: '/dashboard-lab', label: 'Mini Dashboard', icon: MonitorSmartphone },
  { to: '/states', label: 'States Lab', icon: CircleDashed },
  { to: '/comparison', label: 'Comparison', icon: Scale },
];
