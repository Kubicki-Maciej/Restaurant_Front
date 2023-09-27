import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import ManagerSideBar from "../ManagerSideBar/ManagerSideBar";

// Cards
import ShowOrders from "../ManagerKitchen/ShowOrders";
import ShowCurrentOrders from "../ManagerKitchen/ShowCurrentOrders";

const ConntentScreen = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export default function KitchenCard({ setSecondElement }) {
  setSecondElement("");
  return (
    <ConntentScreen className="ContentScreen">
      <ManagerSideBar
        menuList={[
          { direction: "./todaysorders", title: "Open Orders" },
          { direction: "./showorders", title: "Show All Orders" },
        ]}
      />

      <Routes>
        <Route
          path="todaysorders"
          element={<ShowCurrentOrders setSecondElement={setSecondElement} />}
        ></Route>
        <Route
          path="showorders"
          element={<ShowOrders setSecondElement={setSecondElement} />}
        ></Route>
      </Routes>
    </ConntentScreen>
  );
}
