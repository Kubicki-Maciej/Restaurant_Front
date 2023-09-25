import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

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
  const [dataOrder, setDataOrder] = useState({
    logged_in_waiters: [],
    logged_out_waiters: [],
  });

  useEffect(() => {
    setDataOrder(data);
  }, [dataOrder]);

  return (
    <MiniOrderMainBox>
      <WaiterBox>
        <h5>Logged In</h5>
        {dataOrder.logged_in_waiters.map((waiter) => {
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
        {dataOrder.logged_out_waiters.map((waiter) => {
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
