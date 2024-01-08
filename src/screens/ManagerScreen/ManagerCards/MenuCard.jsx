import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import ManagerSideBar from "../ManagerSideBar/ManagerSideBar";
//cards
import AddDishCategory from "../ManagerMenu/AddDishCategory";
import ChangeDish from "../ManagerMenu/ChangeDish";
import CreateCategory from "../ManagerMenu/CreateCategory";
import Createdish from "../ManagerMenu/Createdish";

import RemoveDishFromCategory from "../ManagerMenu/RemoveDishFromCategory";
import ShowCategory from "../ManagerMenu/ShowCategory";

const ConntentScreen = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export default function MenuCard({ setSecondElement }) {
  setSecondElement("");
  return (
    <ConntentScreen className="ContentScreen">
      <ManagerSideBar
        menuList={[
          { direction: "./createdish", title: "Create New Dish" },
          { direction: "./changedish", title: "Change Dish" },
          { direction: "./createcategory", title: "Create Category" },
          { direction: "./adddishtocategory", title: "Add Dish To Category" },
          {
            direction: "./removedishfromcategory",
            title: "Remove Dish from Category",
          },
          { direction: "./showcategory", title: "Show categories" },
        ]}
      />

      <Routes>
        <Route
          path="createdish"
          element={<Createdish setSecondElement={setSecondElement} />}
        ></Route>
        <Route
          path="changedish"
          element={<ChangeDish setSecondElement={setSecondElement} />}
        ></Route>
        <Route
          path="createcategory"
          element={<CreateCategory setSecondElement={setSecondElement} />}
        ></Route>
        <Route
          path="adddishtocategory"
          element={<AddDishCategory setSecondElement={setSecondElement} />}
        ></Route>
        <Route
          path="removedishfromcategory"
          element={
            <RemoveDishFromCategory setSecondElement={setSecondElement} />
          }
        ></Route>
        <Route
          path="showcategory"
          element={<ShowCategory setSecondElement={setSecondElement} />}
        ></Route>
      </Routes>
    </ConntentScreen>
  );
}
