import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LeadTrackingChartProps {
  className?: string;
}

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 42 },
  { name: 'April', closedWon: 52, closedLost: 30 },
  { name: 'May', closedWon: 88, closedLost: 65 },
  { name: 'June', closedWon: 60, closedLost: 8 },
  { name: 'July', closedWon: 75, closedLost: 40 },
  { name: 'August', closedWon: 95, closedLost: 32 },
];

const LeadTrackingChart: React.FC<LeadTrackingChartProps> = ({ className }) => {
  const [activeButton, setActiveButton] = React.useState<string>('Leads Converted');
  const [selectedRange, setSelectedRange] = React.useState<string>('last 6 months');

  const dateRanges = [
    'Last 30 days',
    'Last 3 months',
    'Last 6 months',
    'Last 12 months',
    'Year to date',
  ];

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <CardTitle>Leads tracking</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              <span className="text-2xl font-bold text-foreground">680</span> total closed&nbsp;&nbsp;
              <span className="text-2xl font-bold text-foreground">70</span> total lost
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="mt-2 sm:mt-0 w-full sm:w-auto justify-start text-left font-normal">
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
        <div className="mt-4 flex space-x-2">
          {['Leads came', 'Leads Converted', 'Total deals size'].map((btnName) => (
            <Button 
              key={btnName} 
              variant={activeButton === btnName ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveButton(btnName)}
              className={activeButton === btnName ? "bg-primary text-primary-foreground" : ""}
            >
              {btnName}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />
              <YAxis tickLine={false} axisLine={false} dx={-10} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend 
                verticalAlign="top" 
                align="right" 
                height={36}
                iconType="circle"
                formatter={(value, entry) => <span className="text-muted-foreground">{value}</span>}
              />
              <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#10B981" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#10B981' }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#EF4444" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#EF4444' }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadTrackingChart;
