
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  { id: "01", name: "Ava Miller", boxes: 5, amount: "$200", paid: "Yes", status: "Ready" },
  { id: "02", name: "James Cole", boxes: 2, amount: "$80", paid: "Yes", status: "Ready" },
  { id: "03", name: "Vivian Eggers", boxes: 10, amount: "$360", paid: "Yes", status: "Ready" },
  { id: "04", name: "Ellijah Sandis", boxes: 4, amount: "$80", paid: "No", status: "Ready" },
  { id: "05", name: "Anjali Sharma", boxes: 2, amount: "$80", paid: "Yes", status: "Ready" },
];

export function OrdersTable() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">No.</TableHead>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Boxes Ordered</TableHead>
              <TableHead className="font-semibold">Total Amount</TableHead>
              <TableHead className="font-semibold">Paid</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.boxes}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Badge 
                    variant={order.paid === "Yes" ? "default" : "destructive"}
                    className={order.paid === "Yes" ? "bg-green-100 text-green-800" : ""}
                  >
                    {order.paid}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0">
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="mt-4 text-center">
          <Button variant="link" className="text-blue-600 hover:text-blue-800">
            + See More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
