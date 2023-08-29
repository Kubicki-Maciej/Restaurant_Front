import React from "react";
import WaiterSideBar from "./WaiterElements/WaiterSideBar";
import { Routes } from "react-router-dom";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

import OrderActive from "./WaiterElements/Active/OrderActive";
import { useDispatch, useSelector } from "react-redux";

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
`;
const OrderPage = styled.div`
  display: flex;
  flex-direction: row;
  /* overflow-x: auto; */
`;

export default function ActiveOrderScreen({ client }) {
  const [dataOrders, setDataOrders] = useState([]);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const waiter_id = useSelector((state) => state.userData.id);

  async function fetchDataOrders() {
    client
      .post(`/waiter/get_all_waiter_orders_active`, { waiter_id: waiter_id }) // error here repair this !
      .then((response) => {
        setDataOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchDataOrders();
  }, []);

  useEffect(() => {
    setOrders(dataOrders);
  }, [dataOrders]);

  return (
    <div className="waiterApp">
      <h1> ORDERS :</h1>
      <MainPage>
        <OrderPage>
          {orders.map((order, index) => {
            return <OrderActive client={client} item={order} />;
          })}
        </OrderPage>
      </MainPage>
      {/* order_number */}
    </div>
  );
}
