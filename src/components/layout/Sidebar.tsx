import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav is already styled with fixed positioning, width, height, and background.
  // This component primarily acts as a wrapper to integrate SidebarNav into the layout system.
  // The className prop allows for additional styling adjustments if needed from a parent layout component.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
