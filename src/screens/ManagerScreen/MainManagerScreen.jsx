import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Style
const MainScreen = styled.div``;
const AppScreen = styled.div``;

const ConntentScren = styled.div``;

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
      {/* Nav bar */}
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
      Manager Screen
      {/* Boxes with information sales, graphs, tranding product etc*/}
    </div>
  );
}

export default MainManagerScreen;
