import React from "react";
import { useState } from "react";
import {
  TableConainer,
  TableKitchen,
  RowTableKitchen,
} from "./ManagerKitchenStyle";
import KitchenReadOnlyRow from "./KitchenReadOnlyRow";
import { Fragment } from "react";

export default function KitchenTableOrder({ data, name }) {
  const [orderData, setOrderData] = useState(data);
  console.log(orderData);

  return (
    <div>
      {name}
      <TableConainer>
        <TableKitchen>
          <thead>
            <tr>
              <RowTableKitchen>Order ID</RowTableKitchen>
              <RowTableKitchen>Waiter ID</RowTableKitchen>
              <RowTableKitchen>Start Date</RowTableKitchen>
              <RowTableKitchen>Timer</RowTableKitchen>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <KitchenReadOnlyRow order={order} />
            ))}
          </tbody>
        </TableKitchen>
      </TableConainer>
    </div>
  );
}
