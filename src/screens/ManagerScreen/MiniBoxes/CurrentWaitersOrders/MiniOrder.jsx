import { useEffect, useState } from "react";
import styled from "styled-components";
import { BoxItem, BoxContainer } from "../style/BoxStyle";

import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

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
  const [dataOrders, setDataOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getFiveActiveOrders() {
    client
      .get(`/dashboard/x`)
      .then((actualData) => {
        setDataOrders(actualData.data);
      })
      .catch((err) => {
        setError(err.message);
        setDataOrders(null);
      })
      .finally(() => {
        setLoading(true);
      });
  }
  useEffect(() => {
    getFiveActiveOrders();
    console.log(dataOrders);
  }, []);

  //   return <BoxContainer>MiniOrder</BoxContainer>;
  return (
    <MiniOrderMainBox>
      {loading ? (
        <div>
          {dataOrders.map((element) => {
            return (
              <SingleOrder>
                <p>OrderId: {element.id} </p>
                <p>Payment: {element.order_price} </p>
                <p>waiter_id: {element.waiter_name}</p>
              </SingleOrder>
            );
          })}
        </div>
      ) : (
        "niema"
      )}
    </MiniOrderMainBox>
  );
}
