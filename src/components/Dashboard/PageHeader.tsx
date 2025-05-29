import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PageHeaderProps {
  className?: string;
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  className,
  title = 'Dashboard'
}) => {
  const [activeTab, setActiveTab] = React.useState<'sales' | 'leads'>('leads');
  const [selectedRange, setSelectedRange] = React.useState<string>('last 6 months');

  const dateRanges = [
    'Today',
    'Last 7 days',
    'Last 30 days',
    'Last 6 months',
    'Last 12 months',
  ];

  return (
    <div className={cn('flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6', className)}>
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2 sm:mb-0">{title}</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'sales' | 'leads')} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-2 sm:w-auto">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
        </Tabs>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto justify-start text-left font-normal">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{selectedRange}</span>
              <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {dateRanges.map((range) => (
              <DropdownMenuItem key={range} onClick={() => setSelectedRange(range)}>
                {range}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PageHeader;
