import React from "react";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import MealOrderActive from "./MealOrderActive";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";

// Actions
import {
  addProduct,
  loadProductFromActiveOrder,
  setOrderExsist,
} from "../../../../actions/waiterAppAction";
import OrderPopOut from "../Order/OrderPopOut";

const BoxOrder = styled.div`
  display: flex;
  background-color: lightgray;
  border: solid 1px black;
  padding: 5px;
  flex-direction: column;
  margin: 0.5rem;
  height: auto;
`;
const OrderName = styled.p`
  font-size: 1rem;
`;

const ChangeOrder = styled.button`
  font-weight: bold;
`;

export default function OrderActive({ item, client }) {
  const [waiter, setWaiter] = useState(0);
  const [meals, setMeals] = useState([]);
  const [order, setOrder] = useState({});
  const [isLoadedDataFromRedux, setIsLoadedDataFromRedux] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setWaiter(item.waiter_id);
    setOrder(item.order);
    setMeals(item.order.meals);
    setIsLoadedDataFromRedux(true);
  }, [order, meals]);

  function getOrderData() {
    const meals = order.meals;
    const tempList = [];
    meals.forEach((meal) => {
      if (meal.number_of_meals > 0) {
        tempList.push({
          id: meal.meal_id,
          meal_name: meal.meal_name,
          number_of_meals: meal.number_of_meals,
          comments: meal.comments,
        });
      }
    });
    dispatch(loadProductFromActiveOrder(tempList));
    dispatch(setOrderExsist(order.id));
  }

  return (
    <Popup
      trigger={
        <BoxOrder>
          <OrderName>Order Number:{order.order_number}</OrderName>

          <div>
            {meals.map((meal) => {
              if (isLoadedDataFromRedux) {
                console.log("tutaj");
                console.log(order.order_number);
                console.log(order);
                return (
                  <MealOrderActive
                    mealObj={meal}
                    orderId={order.order_number}
                  />
                );
              }
            })}
          </div>
          {/* Do logic here */}
        </BoxOrder>
      }
      modal
      position="center center"
    >
      {(close) => (
        <div>
          {isLoadedDataFromRedux ? getOrderData() : ""}
          <button onClick={() => close()}>CLOSE</button>
          <OrderPopOut client={client} />
          {/* <ChangeOrder onClick={() => getOrderData()}>Add Meal</ChangeOrder> */}
        </div>
      )}
    </Popup>
  );
}
