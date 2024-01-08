import React from "react";
import KitchenTableOrder from "./ManagerKitchenComponents/KitchenTableOrder";
import { CurrentOrderContainer } from "./ManagerKitchenComponents/ManagerKitchenStyle";
import { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function ShowCurrentOrders({ setSecondElement }) {
  const [orders, setOrders] = useState([]);
  const [ordersInProgress, setOrdersInProgress] = useState([]);
  const [ordersWaitings, setOrdersWaiting] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  function getOrders() {
    client
      .get(`/dashboard/current_orders`)
      .then((actualData) => {
        setOrders(actualData.data);
        setOrdersInProgress(actualData.data.in_progress);
        setOrdersWaiting(actualData.data.waiting);
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  useEffect(() => {
    getOrders();
  }, []);

  setSecondElement("Current Orders");
  if (loading) {
    return (
      <CurrentOrderContainer>
        <KitchenTableOrder
          maintheme={"#CDEBF8"}
          sColortheme={"#B4E4F8"}
          name={"In Progress"}
          data={ordersInProgress}
        />
        <KitchenTableOrder
          maintheme={"#CDEBF8"}
          sColortheme={"#B4E4F8"}
          name={"Waiting"}
          data={ordersWaitings}
        />
      </CurrentOrderContainer>
    );
  } else {
    return <div>Loading ...</div>;
  }
}
