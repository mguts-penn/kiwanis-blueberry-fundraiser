
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PickupStatusChart } from "./PickupStatusChart";

const metrics = [
  { title: "Total Orders", value: "159", subtitle: "Total Orders", id: "total-orders" },
  { title: "Total Donors", value: "100", subtitle: "Total Donors", id: "total-donors" },
  { title: "Total Boxes Ordered", value: "250", subtitle: "Total Boxes Ordered", id: "total-boxes" },
  { title: "Total Boxes for AFAC", value: "125", subtitle: "Total Boxes for AFAC", id: "afac-boxes" },
];

export function MetricsGrid() {
  return (
    <section aria-labelledby="metrics-heading" className="space-y-4">
      <h2 id="metrics-heading" className="sr-only">
        Key Metrics Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <Card 
            key={index} 
            className="bg-white shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
          >
            <CardContent className="p-6">
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  aria-describedby={`${metric.id}-description`}
                  role="img"
                  aria-label={`${metric.value} ${metric.subtitle}`}
                >
                  {metric.value}
                </div>
                <div 
                  id={`${metric.id}-description`}
                  className="text-sm text-gray-700 font-medium"
                >
                  {metric.subtitle}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* Pickup Status Chart Card */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Pick Up Status
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-2">
            <PickupStatusChart />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
