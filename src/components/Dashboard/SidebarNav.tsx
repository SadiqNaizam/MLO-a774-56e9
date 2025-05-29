import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingBag,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  ShieldCheck, // Placeholder for Logo BO, using a generic icon
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center px-4 py-2.5 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary',
        isActive ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : 'text-sidebar-foreground',
      )}
    >
      <Icon className="mr-3 h-5 w-5" />
      {label}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const navItemsTop = [
    { href: '#', icon: LayoutGrid, label: 'Dashboard', isActive: true },
    { href: '#', icon: Users, label: 'Leads' },
    { href: '#', icon: User, label: 'Customers' },
    { href: '#', icon: FileText, label: 'Proposals' },
    { href: '#', icon: Receipt, label: 'Invoices' },
    { href: '#', icon: ShoppingBag, label: 'Items' },
    { href: '#', icon: Mail, label: 'Mail' },
    { href: '#', icon: Archive, label: 'Shoebox' },
    { href: '#', icon: CalendarDays, label: 'Calendar' },
  ];

  const navItemsBottom = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={cn('w-60 bg-sidebar fixed top-0 left-0 h-screen flex flex-col p-4 space-y-2', className)}>
      <div className="flex items-center h-16 px-2 mb-4">
        <ShieldCheck className="h-8 w-8 text-primary" /> 
        <span className="ml-2 text-xl font-semibold text-foreground">LeadsApp</span>
      </div>
      <nav className="flex-grow space-y-1">
        {navItemsTop.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
      <div className="space-y-1 border-t border-border pt-2">
        {navItemsBottom.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;
