
import { MetricsGrid } from "./MetricsGrid";
import { OrdersTable } from "./OrdersTable";

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <MetricsGrid />
      <OrdersTable />
    </div>
  );
}
