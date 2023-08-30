import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useState } from "react";
import Popup from "reactjs-popup";
import OrderPopOut from "./OrderPopOut";

const MiniOrderContainer = styled.div`
  background-color: lightgray;
  border: 1px black solid;
  padding: 5px;
`;
const MiniOrder = styled.div``;
const MiniItem = styled.div``;
const ButtonSendOrder = styled.button``;

export default function MiniOrderSideBar({ client }) {
  const orderData = useSelector((state) => state.waiterOrder);
  const specificOrderData = useSelector((state) => state.waiterOrderSelected);
  const userData = useSelector((state) => state.userData);
  const [orderActive, setOrderActive] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function showModalPopUp() {
    console.log("run");
    return <div>To moj komponent</div>;
  }

  function sendToApiDataOrder() {
    // need to check if order exist
    const postData = {
      order: orderData,
      waiter: userData,
    };

    console.log(postData);
    client
      .post(`/waiter/create_waiter_order`, postData)
      .then((actualData) => {
        setData(actualData.data);
        console.log(actualData.data);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  //   maybe after clicking it pop out big window with order then get option to send ?
  // create statment that check if its new order or selected order
  return (
    <MiniOrderContainer>
      {specificOrderData.exsist ? (
        <h1>Order : {specificOrderData.order_id.order_id}</h1>
      ) : (
        <p>New Order</p>
      )}
      {specificOrderData.exsist ? (
        <MiniOrder>
          {orderData.ordered_items.map((item) => (
            <MiniItem>
              {item.meal_name} :{item.number_of_meals}
            </MiniItem>
          ))}
          <ButtonSendOrder onClick={showModalPopUp}>Send Order</ButtonSendOrder>
        </MiniOrder>
      ) : (
        <MiniOrder>
          {orderData.ordered_items.map((item) => (
            <MiniItem>
              {item.name} :{item.number_of_meals}
            </MiniItem>
          ))}
          <Popup
            modal
            position="center center"
            trigger={
              <ButtonSendOrder onClick={showModalPopUp}>
                Send Order
              </ButtonSendOrder>
            }
          >
            <OrderPopOut />
          </Popup>
        </MiniOrder>
      )}
    </MiniOrderContainer>
  );
}
