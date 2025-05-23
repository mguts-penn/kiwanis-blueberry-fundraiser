
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PickupStatusChart } from "./PickupStatusChart";

const metrics = [
  { title: "Total Orders", value: "159", subtitle: "Total Orders" },
  { title: "Total Donors", value: "100", subtitle: "Total Donors" },
  { title: "Total Boxes Ordered", value: "250", subtitle: "Total Boxes Ordered" },
  { title: "Total Boxes for AFAC", value: "125", subtitle: "Total Boxes for AFAC" },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">
                {metric.subtitle}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      {/* Pickup Status Chart Card */}
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Pick Up Status</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <PickupStatusChart />
        </CardContent>
      </Card>
    </div>
  );
}
