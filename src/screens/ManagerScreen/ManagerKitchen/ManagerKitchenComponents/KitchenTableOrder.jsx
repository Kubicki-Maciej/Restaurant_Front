import React from "react";
import { useState } from "react";
import {
  TableConainer,
  TableKitchen,
  RowTableKitchen,
  Conainer,
} from "./ManagerKitchenStyle";
import KitchenReadOnlyRow from "./KitchenReadOnlyRow";

export default function KitchenTableOrder({
  maintheme,
  sColortheme,
  data,
  name,
}) {
  const [orderData, setOrderData] = useState(data);
  console.log(orderData);

  return (
    <Conainer>
      <h1>{name}</h1>
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
              <KitchenReadOnlyRow
                order={order}
                theme={maintheme}
                stheme={sColortheme}
              />
            ))}
          </tbody>
        </TableKitchen>
      </TableConainer>
    </Conainer>
  );
}
