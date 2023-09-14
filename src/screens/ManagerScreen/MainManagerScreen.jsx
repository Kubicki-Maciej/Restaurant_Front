import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

//
import ManagerNavbar from "./ManagerNavBar/ManagerNavBar";

// cards
import DashboardCard from "./ManagerCards/DashboardCard";

// Style
const MainScreen = styled.div``;
const AppScreen = styled.div``;

const ConntentScreen = styled.div`
  width: 100%;
  margin: 0.5rem;
`;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

function MainManagerScreen() {
  const [categoryData, setCategoryData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [screenMenu, setScreenMenu] = useState(false);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <div>
      <ManagerNavbar />
      {/* Mini bars */}
      <ConntentScreen>
        <Routes>
          <Route path="dashboard" element={<DashboardCard />}></Route>
        </Routes>
      </ConntentScreen>
      {/* create user section */}
      {/* Create new kitchen, waiter user if permisions */}
      {/* Check section */}
      {/* Check waiter order active / ended */}
      {/* Check what product is gonna expire */}
      {/* Check active orders */}
      {/* Check orders in ### day */}
      {/* Storage data */}
      {/* Add Section */}
      {/* Add Dish */}
      {/* Add Product */}
      {/* Add product to storage/ update quantity*/}

      {/* Boxes with information sales, graphs, tranding product etc*/}
    </div>
  );
}

export default MainManagerScreen;
