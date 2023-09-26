import React from "react";
import { ColumnTableKitchen } from "./ManagerKitchenStyle";
import OrderTimer from "../../../../components/KitchenComponents/OrderTimer";

export default function KitchenReadOnlyRow({ order }) {
  return (
    <tr>
      <ColumnTableKitchen>{order.order_id}</ColumnTableKitchen>
      <ColumnTableKitchen>{order.waiter_id}</ColumnTableKitchen>
      <ColumnTableKitchen>{order.order_start}</ColumnTableKitchen>
      <ColumnTableKitchen>
        <OrderTimer startDate={order.order_start} />
      </ColumnTableKitchen>
    </tr>
  );
}
