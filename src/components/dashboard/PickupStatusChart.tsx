
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
      <div className="relative h-32">
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
      
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
      
      <Button variant="link" className="w-full text-blue-600 hover:text-blue-800 p-0">
        Go to Pick Ups
      </Button>
    </div>
  );
}
