import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface InsightCardsProps {
  className?: string;
}

const reasonsLostData = [
  { reason: 'The proposal is unclear', percentage: 40 },
  { reason: 'However venture pursuit', percentage: 20 },
  { reason: 'The proposal is unclear', percentage: 30 }, // This was duplicated in image, keeping for consistency with OCR, or could be different
  { reason: 'Other', percentage: 10 },
];

const otherDataStats = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days' },
];

const InsightCards: React.FC<InsightCardsProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-8 gap-y-6">
          {reasonsLostData.map((item, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-foreground">{item.percentage}%</p>
              <p className="text-sm text-muted-foreground">{item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6">
          {otherDataStats.map((stat, index) => (
            <div key={index}>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                {stat.tooltip && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-1.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightCards;
