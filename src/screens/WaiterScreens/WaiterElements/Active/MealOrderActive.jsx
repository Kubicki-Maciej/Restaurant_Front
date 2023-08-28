import React from "react";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

const MealWrap = styled.div`
  padding-top: 2px;
  display: flex;
  flex-direction: column;
  border-top: 2px dotted grey;
`;

const NumberElement = styled.div`
  font-weight: bold;
  background-color: grey;
  padding: 3px;
  border-radius: 8px;
  text-align: center;
`;
const NumberButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ContainerForButton = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonPlus = styled.button`
  margin: 5px;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`;
const ButtonMinus = styled.button`
  margin: 5px;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`;
const ButtonCross = styled.button`
  height: 1.5rem;
  width: 1.5rem;

  border: none;
  border-radius: 5px;
  margin-left: 20px;
  background-color: lightcoral;
  font-weight: bold;

  &:hover {
    background-color: red;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NameCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MealOrderActive({ mealObj, isOpen }) {
  const [meal, setMeal] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  // const meal.number_of_meals
  console.log(meal);
  const count = meal.number_of_meals;

  function decrementCount() {
    setMeal((prevState) => {
      return { ...prevState, number_of_meals: prevState.number_of_meals - 1 };
    });
  }
  function incrementCount() {
    setMeal((prevState) => {
      return { ...prevState, number_of_meals: prevState.number_of_meals + 1 };
    });
  }
  function deleteFoodOrder() {}

  useEffect(() => {
    setMeal(mealObj);
  }, [mealObj]);
  // add min value of 0
  // create to update it on REDUX
  // create API SEND

  return (
    <MealWrap>
      <OrderContainer>
        <NameCommentContainer>
          {meal.meal_name}
          <p>Comment: {meal.comments}</p>
        </NameCommentContainer>

        <NumberButtonsContainer>
          {isModalOpen ? (
            <ButtonMinus onClick={decrementCount}>-</ButtonMinus>
          ) : (
            ""
          )}

          <NumberElement>X{meal.number_of_meals}</NumberElement>

          {isModalOpen ? (
            <ButtonPlus onClick={incrementCount}>+</ButtonPlus>
          ) : (
            ""
          )}
          {isModalOpen ? <ButtonCross>x</ButtonCross> : ""}
        </NumberButtonsContainer>
      </OrderContainer>
    </MealWrap>
  );
}
