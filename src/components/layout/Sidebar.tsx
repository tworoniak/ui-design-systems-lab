import { NavLink } from 'react-router-dom';
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
  Scale,
} from 'lucide-react';

const navItems = [
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
  { to: '/comparison', label: 'Comparison', icon: Scale },
];

export default function Sidebar() {
  return (
    <aside className='hidden border-r bg-muted/30 md:block'>
      <div className='flex h-full flex-col'>
        <div className='border-b px-6 py-5'>
          <p className='text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
            Design Systems
          </p>
          <h1 className='mt-2 text-xl font-bold'>UI Systems Lab</h1>
        </div>

        <nav className='flex-1 p-4'>
          <ul className='space-y-2'>
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                    ].join(' ')
                  }
                >
                  <Icon className='h-4 w-4' />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
