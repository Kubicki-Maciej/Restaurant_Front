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
const NameWithNumber = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContainerForButton = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonPlus = styled.button``;
const ButtonMinus = styled.button``;
const ButtonCross = styled.button``;
const OrderContainer = styled.div``;

export default function MealOrderActive({ mealObj, isOpen }) {
  const [meal, setMeal] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  useEffect(() => {
    setMeal(mealObj);
  }, []);

  return (
    <MealWrap>
      <NameWithNumber>
        {meal.meal_name}
        <ContainerForButton>
          {isModalOpen ? <ButtonMinus>-</ButtonMinus> : ""}
          <NumberElement>X{meal.number_of_meals}</NumberElement>
          {isModalOpen ? <ButtonPlus>+</ButtonPlus> : ""}
          {isModalOpen ? <ButtonCross>x</ButtonCross> : ""}
        </ContainerForButton>
      </NameWithNumber>
      <p>Comment: {meal.comments}</p>
    </MealWrap>
  );
}
