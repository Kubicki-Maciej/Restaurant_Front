import React from "react";
import styled from "styled-components";
import { BoxItem, BoxContainer } from "../style/BoxStyle";

const MiniOrderMainBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const SingleOrder = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin: 1px;
`;

export default function MiniOrder({ data }) {
  //   return <BoxContainer>MiniOrder</BoxContainer>;
  return (
    <MiniOrderMainBox>
      {data.map((element) => {
        return (
          <SingleOrder>
            <p>OrderId: {element.id} </p>
            <p>Payment: {element.bill} </p>
            <p>waiter_id: {element.waiter_id}</p>
          </SingleOrder>
        );
      })}
    </MiniOrderMainBox>
  );
}
