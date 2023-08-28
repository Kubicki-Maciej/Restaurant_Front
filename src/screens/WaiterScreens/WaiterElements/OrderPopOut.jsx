import React from "react";
import { useSelector } from "react-redux";
import MealOrderActive from "./Active/MealOrderActive";

export default function OrderPopOut({ client }) {
  const orderData = useSelector((state) => state.waiterOrder);
  const selectedOrderData = useSelector((state) => state.waiterOrderSelected);

  return (
    <div>
      <p>Order id: {selectedOrderData.order_id.order_id}</p>
      {orderData.ordered_items.map((item) => {
        return (
          <div>
            <MealOrderActive mealObj={item} isOpen={true} />
          </div>
        );
      })}
      <button>Send order button</button>
      <button>End order button</button>
    </div>
  );
}
