import React from "react";
import KitchenTableOrder from "./ManagerKitchenComponents/KitchenTableOrder";
import { CurrentOrderContainer } from "./ManagerKitchenComponents/ManagerKitchenStyle";

export default function ShowCurrentOrders({ setSecondElement }) {
  // Data Grid
  setSecondElement("Current Orders");
  return (
    <CurrentOrderContainer>
      <KitchenTableOrder
        maintheme={"#CDEBF8"}
        sColortheme={"#B4E4F8"}
        name={"In Progress"}
        data={[
          {
            order_id: 1,
            waiter_id: 2,
            order_detail: [
              { dish_name: "burger", quantity: 5 },
              { dish_name: "chesseburger", quantity: 1 },
              { dish_name: "fires", quantity: 2 },
            ],
            order_start: "2023-09-26T18:35:23",
          },
          {
            order_id: 2,
            waiter_id: 1,
            order_detail: [
              { dish_name: "burger", quantity: 5 },
              { dish_name: "chesseburger", quantity: 1 },
              { dish_name: "fires", quantity: 2 },
            ],
            order_start: "2023-09-26T18:20:15",
          },
          {
            order_id: 3,
            waiter_id: 1,
            order_detail: [
              { dish_name: "burger", quantity: 5 },
              { dish_name: "chesseburger", quantity: 1 },
              { dish_name: "fires", quantity: 2 },
            ],
            order_start: "2023-09-26T17:40:23",
          },
        ]}
      />
      <KitchenTableOrder
        maintheme={"#CDEBF8"}
        sColortheme={"#B4E4F8"}
        name={"Waiting"}
        data={[
          {
            order_id: 1,
            waiter_id: 2,
            order_detail: [
              { dish_name: "burger", quantity: 5 },
              { dish_name: "chesseburger", quantity: 1 },
              { dish_name: "fires", quantity: 2 },
            ],
            order_start: "2023-09-26T17:40:44",
          },
          {
            order_id: 2,
            waiter_id: 1,
            order_detail: [
              { dish_name: "burger", quantity: 5 },
              { dish_name: "chesseburger", quantity: 1 },
              { dish_name: "fires", quantity: 2 },
            ],
            order_start: "2023-09-26T16:20:33",
          },
          {
            order_id: 3,
            waiter_id: 1,
            order_detail: [
              { dish_name: "burger", quantity: 5 },
              { dish_name: "chesseburger", quantity: 1 },
              { dish_name: "fires", quantity: 2 },
            ],
            order_start: "2023-09-26T17:40:22",
          },
        ]}
      />
    </CurrentOrderContainer>
  );
}
