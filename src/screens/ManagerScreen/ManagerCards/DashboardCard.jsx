import React from "react";
import ManagerBarGrid from "../MiniBoxes/ManagerBarGrid";
import ManagerInfoGrid from "../MiniBoxes/ManagerInfoGrid";
import ManagerTableGrid from "../MiniBoxes/ManagerTableGrid";

export default function DashboardCard() {
  return (
    <div className="Screen">
      {/* <ManagerBarGrid /> */}
      {/* <ManagerInfoGrid /> */}
      <ManagerTableGrid />
    </div>
  );
}
