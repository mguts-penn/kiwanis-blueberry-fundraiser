
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
    <section aria-labelledby="orders-heading">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle id="orders-heading" className="text-xl font-semibold text-gray-900">
            Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table role="table" aria-labelledby="orders-heading">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-900" scope="col">
                    No.
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900" scope="col">
                    Name
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900" scope="col">
                    Boxes Ordered
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900" scope="col">
                    Total Amount
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900" scope="col">
                    Paid
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900" scope="col">
                    Status
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900" scope="col">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow 
                    key={order.id} 
                    className="hover:bg-gray-50 focus-within:bg-gray-50"
                  >
                    <TableCell className="font-medium text-gray-900">
                      {order.id}
                    </TableCell>
                    <TableCell className="text-gray-900">
                      {order.name}
                    </TableCell>
                    <TableCell className="text-gray-900">
                      <span aria-label={`${order.boxes} boxes`}>
                        {order.boxes}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-900">
                      {order.amount}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={order.paid === "Yes" ? "default" : "destructive"}
                        className={
                          order.paid === "Yes" 
                            ? "bg-green-700 text-white hover:bg-green-800" 
                            : "bg-red-700 text-white hover:bg-red-800"
                        }
                        aria-label={`Payment status: ${order.paid}`}
                      >
                        {order.paid}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className="bg-yellow-600 text-white hover:bg-yellow-700"
                        aria-label={`Order status: ${order.status}`}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="link" 
                        className="text-blue-700 hover:text-blue-900 focus:text-blue-900 p-0 underline font-medium"
                        aria-label={`View details for order ${order.id} by ${order.name}`}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              variant="link" 
              className="text-blue-700 hover:text-blue-900 focus:text-blue-900 underline font-medium"
              aria-label="Load more orders"
            >
              + See More
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
