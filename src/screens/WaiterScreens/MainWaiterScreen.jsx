import React from "react";
import { useState, useEffect } from "react";

import WaiterSideBar from "./WaiterElements/WaiterSideBar";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// Screens
import ActiveOrderScreen from "./ActiveOrderScreen";
import HistoryScreen from "./HistoryScreen";
import MenuScreen from "./MenuScreen";

// Style
const MainScreen = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
const AppScreen = styled.div`
  display: flex;
  height: auto;
  padding-left: 16rem;
  background-color: grey;
  height: 100vh;
`;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

function WaiterScreens() {
  const [categoryData, setCategoryData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [screenMenu, setScreenMenu] = useState(false);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);

  // const fetchData = async () =>{
  //   try{
  //     const response = await client.get('meals/all_category');
  //     setCategoryData(response.data);
  //     console.log(response.data);
  //     setLoading(false)
  //     setLoad(true)
  //   } catch(error){
  //     setError(error)
  //   }
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  return (
    <MainScreen>
      <AppScreen>
        <WaiterSideBar />
        <main className="content">
          <Routes>
            <Route
              path="orders"
              element={<ActiveOrderScreen client={client} />}
            />
            <Route path="menu" element={<MenuScreen client={client} />} />
            <Route path="history" element={<HistoryScreen client={client} />} />
          </Routes>
        </main>
      </AppScreen>
    </MainScreen>
  );
}

export default WaiterScreens;