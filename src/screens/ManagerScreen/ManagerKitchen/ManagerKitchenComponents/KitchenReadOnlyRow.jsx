import React from "react";
import { ColumnTableKitchen } from "./ManagerKitchenStyle";
import OrderTimer from "../../../../components/KitchenComponents/OrderTimer";

export default function KitchenReadOnlyRow({ order, theme, stheme }) {
  return (
    <tr>
      <ColumnTableKitchen bg={theme}>{order.order_id}</ColumnTableKitchen>
      <ColumnTableKitchen bg={stheme}>{order.waiter_id}</ColumnTableKitchen>
      <ColumnTableKitchen bg={theme}>{order.order_start}</ColumnTableKitchen>
      <ColumnTableKitchen bg={stheme}>
        <OrderTimer startDate={order.order_start} />
      </ColumnTableKitchen>
    </tr>
  );
}
