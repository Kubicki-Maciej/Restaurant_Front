import React from "react";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import MealOrderActive from "./MealOrderActive";
import { useDispatch } from "react-redux";

// Actions
import {
  addProduct,
  loadProductFromActiveOrder,
  setOrderExsist,
} from "../../../../actions/waiterAppAction";

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

export default function OrderActive({ item }) {
  const [waiter, setWaiter] = useState(0);
  const [meals, setMeals] = useState([]);
  const [order, setOrder] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setWaiter(item.waiter_id);
    setOrder(item.order);
    setMeals(item.order.meals);
  }, [order, meals]);

  function sendToRedux() {
    const meals = order.meals;
    const tempList = [];
    meals.forEach((meal) => {
      if (meal.number_of_meals > 0) {
        tempList.push({
          id: meal.meal_id,
          name: meal.meal_name,
          number_of_meals: meal.number_of_meals,
          comment: meal.comments,
        });
      }
    });
    dispatch(loadProductFromActiveOrder(tempList));
    dispatch(setOrderExsist(order.id));
  }

  return (
    <BoxOrder>
      <OrderName>Order Number:{order.ean_code}</OrderName>
      {/* meal section */}
      <div>
        {meals.map((meal) => {
          return <MealOrderActive mealObj={meal} />;
        })}
      </div>
      {/* Do logic here */}
      <ChangeOrder onClick={() => sendToRedux()}>Change order</ChangeOrder>
    </BoxOrder>
  );
}
