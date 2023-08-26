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

export default function MealOrderActive({ mealObj }) {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    setMeal(mealObj);
  }, []);

  return (
    <MealWrap>
      <NameWithNumber>
        {meal.meal_name} <NumberElement>X{meal.number_of_meals}</NumberElement>
      </NameWithNumber>
      <p>Comment: {meal.comments}</p>
    </MealWrap>
  );
}
