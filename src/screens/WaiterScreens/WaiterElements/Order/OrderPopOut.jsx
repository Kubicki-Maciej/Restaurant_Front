import React from "react";
import { useSelector } from "react-redux";
import MealOrderActive from "../Active/MealOrderActive";
import { useState } from "react";

export default function OrderPopOut({ client }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const orderData = useSelector((state) => state.waiterOrder);
  const selectedOrderData = useSelector((state) => state.waiterOrderSelected);
  const waiterData = useSelector((state) => state.userData);

  function updateOrder() {
    const orderId = selectedOrderData.order_id.order_id;
    const updateData = {
      orderId: orderId,
      orderedMeals: orderData.ordered_items,
    };
    client
      .post(`/order/update_order`, updateData)
      .then((actualData) => {
        console.log(actualData);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err);
      })
      .finally(() => {});
  }

  function endOrder() {
    const orderId = selectedOrderData.order_id.order_id;
    const dataOrderEnd = {
      orderId: orderId,
      waiterId: waiterData.id,
    };
    client
      .put(`/order/end_order`, dataOrderEnd)
      .then((actualData) => {
        console.log(actualData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {});
  }

  return (
    <div>
      <div>{error ? "" : errorMessage}</div>
      <p>Order id: {selectedOrderData.order_id.order_id}</p>
      {orderData.ordered_items.map((item) => {
        return (
          <div>
            <MealOrderActive mealObj={item} isOpen={true} />
          </div>
        );
      })}
      <div>
        <button onClick={updateOrder}>Update order</button>
        <button onClick={endOrder}>End order</button>
      </div>
    </div>
  );
}
