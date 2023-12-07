import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

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

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function MiniOrderBoard({ data }) {
  const [dataOrder, setDataOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetWatingAndInProgressOrders();
  }, [loading]);

  function DataCompiler(streamedData) {
    let waitingData = ReturnDataOrderElements(streamedData.data["waiting"]);
    let inProgressData = ReturnDataOrderElements(
      streamedData.data["in_progress"]
    );

    return { waiting: waitingData, in_progress: inProgressData };
  }

  function ReturnDataOrderElements(element) {
    let orderList = [];
    element.forEach((order) => {
      let cost = 0;
      order.meal.forEach((meal) => (cost += meal.total_meal_cost));
      orderList.push({ id: order.order_id, bill: cost });
      // tempList.push({ id: order.order_id, bill: cost, waiterId });
    });
    return orderList;
  }

  async function GetWatingAndInProgressOrders() {
    client
      .get(`/dashboard/s`)
      .then((acutalData) => {
        console.log("data---------");
        console.log(acutalData);
        setDataOrder(DataCompiler(acutalData));
      })
      .catch((err) => {
        setError(err.message);
        setDataOrder(null);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  return (
    <MiniOrderMainBox>
      {loading ? (
        <div>
          <OrdersBox className="waiting">
            <h5>waiting</h5>
            {dataOrder.waiting.map((order) => {
              return (
                <div>
                  id: {order.id}
                  bill:{order.bill}
                  {/* waiterId: {order.waiter_id} */}
                </div>
              );
            })}
          </OrdersBox>

          <OrdersBox className="inProgress">
            <h5>in_progress</h5>
            {dataOrder.in_progress.map((order) => {
              return (
                <div>
                  id: {order.id}
                  bill:{order.bill}
                  {/* waiterId: {order.waiter_id} */}
                </div>
              );
            })}
          </OrdersBox>
        </div>
      ) : (
        ""
      )}
    </MiniOrderMainBox>
  );
}
