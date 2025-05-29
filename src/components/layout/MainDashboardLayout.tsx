import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainDashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainDashboardLayout: React.FC<MainDashboardLayoutProps> = ({ children, className }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  const toggleMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className={cn('min-h-screen bg-background text-foreground', className)}>
      {/* Desktop Sidebar: Always visible on md screens and up */}
      {/* SidebarNav (wrapped by Sidebar) handles its own fixed positioning and styling */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar: Toggles as an overlay */}
      {isMobileSidebarOpen && (
        <>
          {/* Backdrop to close sidebar on click outside */}
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={toggleMobileSidebar}
            aria-hidden="true"
          />
          {/* Sidebar content for mobile */}
          <div className="fixed top-0 left-0 h-full z-40 md:hidden">
            <Sidebar />
          </div>
        </>
      )}

      {/* Header: Fixed position, TopHeader (wrapped by Header) handles responsive left margin */}
      <Header onToggleSidebar={toggleMobileSidebar} />

      {/* Main Content Area */}
      {/* Layout Requirements: overall.sizing.sidebar: "w-60" -> md:ml-60 for main content */}
      {/* Layout Requirements: overall.sizing.header: "h-16" -> mt-16 for main content (4rem) */}
      {/* Layout Requirements: overall.sizing.mainContent: "flex-1 overflow-y-auto" -> achieved by min-h-[calc(100vh-4rem)] and overflow-y-auto */}
      {/* Layout Requirements: mainContent.layout: "p-6" */}
      <main className="md:ml-60 mt-16 p-6 overflow-y-auto min-h-[calc(100vh-4rem)]">
        {/* Inner container for content structure as per Layout Requirements.mainContent.container: "flex flex-col gap-6" */}
        <div className="flex flex-col gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainDashboardLayout;
