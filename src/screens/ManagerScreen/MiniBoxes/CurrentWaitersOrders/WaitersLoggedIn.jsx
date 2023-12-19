import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const MiniOrderMainBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const WaiterBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

const WaiterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Dot = styled.div`
  height: 20px;
  width: 20px;
  /* background-color: red; */
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => (props.bg === "green" ? "green" : "red")};
  margin-left: 10px;
`;

export default function WaitersLoggedIn({ data }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataWaiter, setDataWaiter] = useState({
    logged_in_waiters: [],
    logged_out_waiters: [],
  });

  async function GetWaitersLogin() {
    client
      .get(`/dashboard/get_waiters_status`)
      .then((acutalData) => {
        setDataWaiter(acutalData.data);
      })
      .catch((err) => {
        setError(err.message);
        setDataWaiter(null);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  useEffect(() => {
    GetWaitersLogin();
  }, []);

  return (
    <MiniOrderMainBox>
      <WaiterBox>
        <h5>Logged In</h5>
        {dataWaiter.logged_in_waiters.map((waiter) => {
          return (
            <WaiterRow>
              {waiter.waiter_name}
              <Dot bg="green" />
            </WaiterRow>
          );
        })}
      </WaiterBox>
      <WaiterBox>
        <h5>Logged Out</h5>
        {dataWaiter.logged_out_waiters.map((waiter) => {
          return (
            <WaiterRow>
              {waiter.waiter_name}
              <Dot bg="red" />
            </WaiterRow>
          );
        })}
      </WaiterBox>
    </MiniOrderMainBox>
  );
}
