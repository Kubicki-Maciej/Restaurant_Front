import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import ManagerSideBar from "../ManagerSideBar/ManagerSideBar";
//cards
import AddProductToStorage from "../ManagerStorage/AddProductToStorage";
import CreateNewStorgae from "../ManagerStorage/CreateNewStorgae";
import NewProduct from "../ManagerStorage/NewProduct";
import RemoveProduct from "../ManagerStorage/RemoveProduct";
import UpdateStorage from "../ManagerStorage/UpdateStorage";

const ConntentScreen = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export default function StorageCard() {
  return (
    <ConntentScreen className="ContentScreen">
      <ManagerSideBar
        menuList={[
          // { direction: "./createnewproduct", title: "Create New Product" },
          { direction: "./createproduct", title: "Create Product" },
          {
            direction: "./addproducttostorage",
            title: "Add Product To Storage",
          },
          { direction: "./createnewstorage", title: "Create New Storage" },
          { direction: "./updatestorage", title: "Update Storage" },
        ]}
      />

      <Routes>
        <Route
          path="addproducttostorage"
          element={<AddProductToStorage />}
        ></Route>
        <Route path="createnewstorage" element={<CreateNewStorgae />}></Route>
        <Route path="createproduct" element={<NewProduct />}></Route>

        <Route path="updatestorage" element={<UpdateStorage />}></Route>
      </Routes>
    </ConntentScreen>
  );
}
