
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";

const data = [
  { name: 'Picked Up', value: 90, color: '#1e40af' },
  { name: 'Ready for Pick Up', value: 69, color: '#d4af37' },
];

export function PickupStatusChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-4">
      <div 
        className="relative h-32"
        role="img"
        aria-labelledby="chart-title"
        aria-describedby="chart-description"
      >
        <div id="chart-title" className="sr-only">
          Pickup Status Distribution Chart
        </div>
        <div id="chart-description" className="sr-only">
          Pie chart showing 90 items picked up and 69 items ready for pickup, totaling 159 items
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={50}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-2" role="list" aria-label="Chart legend">
        {data.map((item) => (
          <div 
            key={item.name} 
            className="flex items-center justify-between text-sm"
            role="listitem"
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
                role="img"
                aria-label={`${item.name} indicator`}
              />
              <span className="text-gray-700 font-medium">{item.name}</span>
            </div>
            <span className="font-semibold text-gray-900" aria-label={`${item.value} items`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
      
      <Button 
        variant="link" 
        className="w-full text-blue-700 hover:text-blue-900 focus:text-blue-900 p-0 underline font-medium"
        aria-describedby="pickup-link-description"
      >
        Go to Pick Ups
      </Button>
      <div id="pickup-link-description" className="sr-only">
        Navigate to the pickup management page
      </div>
    </div>
  );
}
