import React from "react";
import styled from "styled-components";
import OrderTable from "./OrderTable";

function KitchenOrderRow({ order }) {
  // <RowTableOrder>Order ID</RowTableOrder>
  // <RowTableOrder>STATUS</RowTableOrder>
  // <RowTableOrder>Ordered Meals</RowTableOrder>
  // <RowTableOrder>Sum Price</RowTableOrder>
  // <RowTableOrder>Waiter Name|ID</RowTableOrder>
  // <RowTableOrder>Date</RowTableOrder>
  console.log(order);
  return (
    <tr>
      <td>{order.order_id}</td>
      <td>{order.order_status}</td>
      <td>
        <OrderTable meals={order.meal} />
      </td>
      <td>{order.total_meal_cost}</td>
      <td>
        {order.waiter_name} | {order.waiter_id}
      </td>
      <td>{order.order_start.slice(0, 10)}</td>
    </tr>
  );
}

export default KitchenOrderRow;
