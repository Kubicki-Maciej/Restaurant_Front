import React from "react";
import IngredientRow from "./IngredientRow";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function IngredientTable({
  ingredeintsUsed,
  ingredientsToAdd,
  resetTable,
  meal,
  loadTable,
}) {
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const [boolSelectedIngredient, setBoolSelectedIngredient] = useState(false);

  function changeMealIngredient(value) {
    const data = { id_meal: meal.id, ingredient: value };
    console.log("change ingredient to meal");
    console.log(data);

    client
      .post(`dashboard/update_dish_ingredient`, data)
      .catch(() => {})
      .finally(() => {
        resetTable();
      });
  }

  function addIngredientToMeal(value) {
    console.log(value);
    const data = { id_meal: meal.id, ingredient: value };
    console.log("add ingredient to meal");
    console.log(data);

    client
      .post(`dashboard/add_ingredient_to_dish`, data)
      .catch(() => {})
      .finally(() => {
        resetTable();
      });
  }

  function convertIngredientsToSelect(data) {
    const convertedData = [];
    data.forEach((element) => {
      convertedData.push({
        product_id: element.id,
        value: element.id,
        label: element.name,
        product_type: element.product_type,
      });
    });
    return convertedData;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product weight</th>
            <th>Product Type</th>
            <th>Action</th>
          </tr>
        </thead>

        {loadTable ? (
          <tbody>
            {meal.meal_info.map((ingredient) => {
              return (
                <IngredientRow
                  ingredient={ingredient}
                  isNew={false}
                  apiSend={changeMealIngredient}
                />
              );
            })}
            {boolSelectedIngredient ? (
              <IngredientRow
                ingredient={selectedIngredient}
                isNew={true}
                apiSend={addIngredientToMeal}
              />
            ) : (
              ""
            )}
          </tbody>
        ) : (
          "nieladowana"
        )}
        {/* {meal.meal_info.map((ingredient) => {
            return (
              <IngredientRow
                ingredient={ingredient}
                isNew={false}
                apiSend={changeMealIngredient}
              />
            );
          })}
          {boolSelectedIngredient ? (
            <IngredientRow
              ingredient={selectedIngredient}
              isNew={true}
              apiSend={addIngredientToMeal}
            />
          ) : (
            ""
          )} */}
      </table>
      <h4>add new Ingridient</h4>
      <Select
        closeMenuOnSelect={true}
        isClearable={true}
        options={convertIngredientsToSelect(ingredientsToAdd)}
        onChange={(choice) => {
          if (choice === null) {
            setBoolSelectedIngredient(false);
          } else {
            setBoolSelectedIngredient(true);

            setSelectedIngredient({
              product_id: choice.product_id,
              product_type: choice.product_type,
              product_name: choice.label,
            });
          }
        }}
      />
    </div>
  );
}
