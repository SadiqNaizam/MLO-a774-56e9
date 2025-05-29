import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface MetricsSectionProps {
  className?: string;
}

const funnelData = [
  { name: 'Discovery', value: 200, budget: 200, time: '2 days', color: 'bg-red-500', textColor: 'text-red-500' },
  { name: 'Qualified', value: 100, budget: 100, time: '2 days', color: 'bg-yellow-500', textColor: 'text-yellow-500' },
  { name: 'In conversation', value: 50, budget: 100, time: 'average time on this stage', color: 'bg-indigo-600', textColor: 'text-indigo-600' },
  { name: 'Negotiations', value: 20, budget: 50, time: '8 days', color: 'bg-green-500', textColor: 'text-green-500' },
  { name: 'Closed won', value: 20, budget: 50, time: '10 days', color: 'bg-purple-600', textColor: 'text-purple-600' },
];

const totalFunnelValue = funnelData.reduce((sum, item) => sum + item.value, 0);

const sourcesData = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444' }, // red-500
  { name: 'Behance', value: 1500, percentage: 25, color: '#F59E0B' }, // yellow-500 (accentYellow)
  { name: 'Instagram', value: 1000, percentage: 15, color: '#10B981' }, // green-500 (accentGreen)
  { name: 'Dribbble', value: 500, percentage: 10, color: '#8B5CF6' }, // purple-500 (accentPurple)
];

const CustomPieLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="mt-4 space-y-2 text-sm">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground">{entry.value}</span>
          </div>
          <span className="text-foreground font-medium">${sourcesData[index].value.toLocaleString()}</span>
          <span className="text-muted-foreground">{sourcesData[index].percentage}%</span>
        </li>
      ))}
       <li className="flex justify-end items-center pt-1 border-t border-border mt-2">
        <span className="text-xs text-muted-foreground italic">from leads total</span>
      </li>
    </ul>
  );
};

const MetricsSection: React.FC<MetricsSectionProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-5 gap-6', className)}>
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Funnel count</CardTitle>
          <CardDescription><span className="text-2xl font-bold text-foreground">600</span> active leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full h-3 rounded-full overflow-hidden mb-6">
            {funnelData.map(item => (
              <div
                key={item.name}
                className={cn(item.color)}
                style={{ width: `${(item.value / totalFunnelValue) * 100}%` }}
                title={`${item.name}: ${item.value}`}
              />
            ))}
          </div>
          <div className="space-y-3">
            {funnelData.map(item => (
              <div key={item.name} className="grid grid-cols-4 items-center text-sm">
                <div className="flex items-center col-span-2 sm:col-span-1">
                  <span className={cn('w-2.5 h-2.5 rounded-full mr-2', item.color)} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-foreground font-medium text-right sm:text-left">{item.value}</span>
                <span className="text-foreground font-medium text-right sm:text-left">$ {item.budget.toLocaleString()}</span>
                <div className="text-muted-foreground text-right sm:text-left">
                  <span>{item.time}</span>
                  {item.name === 'Qualified' && <div className="text-xs text-muted-foreground/80">average time on this stage</div>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="percentage"
                  labelLine={false}
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number, name: string, props) => [`${props.payload.value.toLocaleString()}`, props.payload.name]} />
                <Legend content={<CustomPieLegend />} verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsSection;
