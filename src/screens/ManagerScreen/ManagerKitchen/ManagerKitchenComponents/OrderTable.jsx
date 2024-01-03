import React from "react";
import { useState, useEffect } from "react";

function OrderTable({ meals }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataMeal, setDataMeal] = useState([]);
  function OpenTable() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setDataMeal(meals);
  }, []);

  function RowTableMeal(meal) {
    return (
      <tr>
        <td>{meal.meal_name}</td>
        <td>{meal.number_of_meals}</td>
        <td>{meal.t_meal_cost}</td>
      </tr>
    );
  }

  return (
    <div>
      <button onClick={OpenTable}>Open</button>
      {isOpen ? (
        <table>
          <thead>
            <tr>
              <td>Meal Name</td>
              <td>Quantity</td>
              <td>Total Cost</td>
            </tr>
          </thead>
          <tbody>{dataMeal.map((meal) => RowTableMeal(meal))}</tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default OrderTable;
