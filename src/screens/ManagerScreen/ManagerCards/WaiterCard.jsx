import React from "react";
import ManagerSideBar from "../ManagerSideBar/ManagerSideBar";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

// import ManagerWaiter
import CreateWaiter from "../ManagerWaiter/CreateWaiter";
import WaitersOrders from "../ManagerWaiter/WaitersOrders";
import ModifyWaiter from "../ManagerWaiter/ModifyWaiter";

const ConntentScreen = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export default function WaiterCard() {
  return (
    <ConntentScreen className="ContentScreen">
      <ManagerSideBar
        menuList={[
          { direction: "./createwaiter", title: "Create New Waiter" },
          { direction: "./showorder", title: "Show Waiter Orders" },
          { direction: "./modify", title: "Modify Waiter Data" },
        ]}
      />

      <Routes>
        <Route path="createwaiter" element={<CreateWaiter />}></Route>
        <Route path="showorder" element={<WaitersOrders />}></Route>
        <Route path="modify" element={<ModifyWaiter />}></Route>
      </Routes>
    </ConntentScreen>
  );
}
