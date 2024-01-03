import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import DatePickerComponent from "../MiniBoxes/DatePicker/DatePickerComponent";
import axios from "axios";
import KitchenOrderRow from "./ManagerKitchenComponents/KitchenOrderRow";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const DateRangeComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const TableConainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;

const TableOrder = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const RowTableOrder = styled.th`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 20px;
  background-color: rgb(117, 201, 250);
`;

const ColumnTableOrder = styled.td`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 1rem;
  background-color: rgb(205, 235, 253);
`;

export default function ShowOrders({ setSecondElement }) {
  setSecondElement("Orders");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  const [dataOrder, setDataOrder] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  function getDataOrders() {
    client
      .get(`/dashboard/all_orders`)
      .then((actualData) => {
        setDataOrder(actualData.data);
        console.log("data orders");
        console.log(actualData.data);
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
    getDataOrders();
  }, []);

  if (loading) {
    return (
      <TableConainer>
        <TableOrder>
          <thead>
            <tr>
              <RowTableOrder>Order ID</RowTableOrder>
              <RowTableOrder>STATUS</RowTableOrder>
              <RowTableOrder>Ordered Meals</RowTableOrder>
              <RowTableOrder>Sum Price</RowTableOrder>
              <RowTableOrder>Waiter Name|ID</RowTableOrder>
              <RowTableOrder>Date</RowTableOrder>
            </tr>
          </thead>

          <tbody>
            {dataOrder.map((order) => (
              <KitchenOrderRow order={order}></KitchenOrderRow>
            ))}
          </tbody>
        </TableOrder>
      </TableConainer>
    );
  } else {
    return <div>loading</div>;
  }
}
