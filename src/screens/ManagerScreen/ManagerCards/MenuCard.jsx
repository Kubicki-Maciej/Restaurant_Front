import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import ManagerSideBar from "../ManagerSideBar/ManagerSideBar";
//cards
import AddDishCategory from "../ManagerMenu/AddDishCategory";
import ChangeDish from "../ManagerMenu/ChangeDish";
import CreateCategory from "../ManagerMenu/CreateCategory";
import Createdish from "../ManagerMenu/Createdish";
import HideCategory from "../ManagerMenu/HideCategory";
import RemoveDishFromCategory from "../ManagerMenu/RemoveDishFromCategory";
import ShowCategory from "../ManagerMenu/ShowCategory";

const ConntentScreen = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export default function MenuCard() {
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
          { direction: "./hidecategory", title: "Hide categories" },
          { direction: "./showcategory", title: "Show categories" },
        ]}
      />

      <Routes>
        <Route path="createdish" element={<Createdish />}></Route>
        <Route path="changedish" element={<ChangeDish />}></Route>
        <Route path="createcategory" element={<CreateCategory />}></Route>
        <Route path="adddishtocategory" element={<AddDishCategory />}></Route>
        <Route
          path="removedishfromcategory"
          element={<RemoveDishFromCategory />}
        ></Route>
        <Route path="hidecategory" element={<HideCategory />}></Route>
        <Route path="showcategory" element={<ShowCategory />}></Route>
      </Routes>
    </ConntentScreen>
  );
}
