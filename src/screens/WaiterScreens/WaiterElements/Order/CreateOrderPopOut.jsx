import React from "react";
import { useSelector } from "react-redux";
import MealOrderActive from "../Active/MealOrderActive";
import { useState } from "react";

export default function CreateOrderPopOut({ client }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const orderData = useSelector((state) => state.waiterOrder);
  const selectedOrderData = useSelector((state) => state.waiterOrderSelected);
  const waiterData = useSelector((state) => state.userData);

  function updateOrder() {
    const waiterId = waiterData.id;

    const order = {
      waiter: waiterId,
      order: orderData,
    };
    console.log(order);

    console.log("create order");
    console.log(orderData.ordered_items);
    client
      .post(`/waiter/create_waiter_order`, order)
      .then((actualData) => {
        console.log(actualData);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err);
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
        <button onClick={updateOrder}>Create order</button>
      </div>
    </div>
  );
}
