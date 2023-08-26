import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useState } from "react";

const MiniOrderContainer = styled.div`
  background-color: lightgray;
  border: 1px black solid;
  padding: 5px;
`;
const MiniOrder = styled.div``;
const MiniItem = styled.div``;
const ButtonSendOrder = styled.button``;

export default function MiniOrderSideBar() {
  const orderData = useSelector((state) => state.waiterOrder);
  const specificOrderData = useSelector((state) => state.waiterOrderSelected);
  const [orderActive, setOrderActive] = useState(false);

  function sendToApiDataOrder() {
    console.log(orderData);
    console.log("DATA IS SENDED TO BACKEND");
  }
  //   maybe after clicking it pop out big window with order then get option to send ?
  // create statment that check if its new order or selected order
  return (
    <MiniOrderContainer>
      {specificOrderData.exsist ? (
        <h1>Order : {specificOrderData.order_id.order_id}</h1>
      ) : specificOrderData.order_id.order_id ? (
        <h1>New Order</h1>
      ) : (
        ""
      )}
      {orderData.ordered_items.length > 0 ? (
        <MiniOrder>
          {orderData.ordered_items.map((item) => (
            <MiniItem>
              {item.name} :{item.number_of_meals}
            </MiniItem>
          ))}
          <ButtonSendOrder onClick={sendToApiDataOrder}>
            Send Order
          </ButtonSendOrder>
        </MiniOrder>
      ) : (
        ""
      )}
    </MiniOrderContainer>
  );
}
