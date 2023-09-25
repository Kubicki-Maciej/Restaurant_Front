import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const MiniOrderMainBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OrdersBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

export default function MiniOrderBoard({ data }) {
  const [dataOrder, setDataOrder] = useState({ waiting: [], in_progress: [] });

  useEffect(() => {
    setDataOrder(data);
  }, [dataOrder]);

  return (
    <MiniOrderMainBox>
      <OrdersBox className="waiting">
        <h5>waiting</h5>
        {dataOrder.waiting.map((order) => {
          return (
            <div>
              id: {order.id}
              bill:{order.bill}
              waiterId: {order.waiter_id}
            </div>
          );
        })}
      </OrdersBox>

      <OrdersBox className="inProgress">
        <h5>in_progress</h5>
        {dataOrder.waiting.map((order) => {
          return (
            <div>
              id: {order.id}
              bill:{order.bill}
              waiterId: {order.waiter_id}
            </div>
          );
        })}
      </OrdersBox>
    </MiniOrderMainBox>
  );
}
