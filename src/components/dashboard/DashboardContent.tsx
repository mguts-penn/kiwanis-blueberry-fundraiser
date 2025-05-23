
import { MetricsGrid } from "./MetricsGrid";
import { OrdersTable } from "./OrdersTable";

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Blueberry Fundraiser Dashboard
        </h1>
        <p className="text-sm text-gray-600">
          Kiwanis Club of Arlington, VA
        </p>
      </div>
      <MetricsGrid />
      <OrdersTable />
    </div>
  );
}
