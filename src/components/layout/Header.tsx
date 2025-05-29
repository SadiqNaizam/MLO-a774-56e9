import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onToggleSidebar }) => {
  // TopHeader is already styled with fixed positioning, height, background, and responsive left margin.
  // It includes the sidebar toggle button for mobile views, hence the onToggleSidebar prop.
  return <TopHeader className={cn(className)} onToggleSidebar={onToggleSidebar} />;
};

export default Header;
