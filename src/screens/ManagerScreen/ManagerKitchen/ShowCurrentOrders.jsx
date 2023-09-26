import React from "react";
import KitchenTableOrder from "./ManagerKitchenComponents/KitchenTableOrder";

export default function ShowCurrentOrders() {
  // Data Grid
  return (
    <div>
      <KitchenTableOrder />
      <KitchenTableOrder />
    </div>
  );
}
