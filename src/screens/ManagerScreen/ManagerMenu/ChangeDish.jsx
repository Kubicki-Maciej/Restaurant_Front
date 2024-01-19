import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SelectedDishTable from "./ManagerMenuComponent/ChangeDish/IngredientTable";
import axios from "axios";
import IngredientTable from "./ManagerMenuComponent/ChangeDish/IngredientTable";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const animatedComponents = makeAnimated();

export default function ChangeDish() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [notSelectedProducts, setNotSelectedProduct] = useState([]);

  const [meal, setMeal] = useState([]);
  const [mealLoaded, setMealLoaded] = useState(false);
  const [mealSelected, setMealSelected] = useState(false);
  const [productLoaded, setPorductLoaded] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);
  const [loadTable, setLoadTable] = useState(false);
  function convertToMeal(mealData) {
    const tempMeal = [];
    mealData.forEach((element) => {
      tempMeal.push({
        id: element.id,
        value: element.id,
        label: element.meal_name,
        meal_name: element.meal_name,
        meal_cost: element.meal_cost,
        meal_info: element.ingredient,
        cost_of_meal_production: element.cost_of_meal_production,
      });
    });
    return tempMeal;
  }

  function getMeals() {
    client
      .get(`/meals/all_info`)
      .then((actualData) => {
        setMeal(convertToMeal(actualData.data));
      })
      .catch(() => {})
      .finally(() => {
        setMealLoaded(true);
      });
  }

  function getProductsForSelectedMealExcludeExisting(list_id_product_used) {
    client
      .post(`/dashboard/get_products_exclude_existing`, {
        exclude_meals_id: list_id_product_used,
      })
      .then((actualData) => {
        setNotSelectedProduct(actualData.data);
      })
      .catch(() => {})
      .finally(() => {
        // console.log("product");
        // console.log(product);
      });
  }

  function resetTable() {
    const productId = selectedProducts.id;
    getMeals();
    console.log("resetujemy tabele pobieramy nowa ");
  }

  function returnListOfIds(choice) {
    const listId = [];
    choice.meal_info.forEach((element) => listId.push(element.product_id));
    console.log(listId);
    return listId;
  }

  useEffect(() => {
    getMeals();
  }, []);

  if (mealLoaded) {
    return (
      <div>
        <Select
          closeMenuOnSelect={true}
          components={animatedComponents}
          // isMulti
          options={meal}
          onChange={(choice) => {
            if (choice.id !== selectedProducts.id) {
              setMealSelected(false);
              setButtonShow(false);
              console.log(selectedProducts);
            }
            setSelectedProducts(choice);
            console.log("choice");
            console.log(choice);
            getProductsForSelectedMealExcludeExisting(returnListOfIds(choice));
            setMealSelected(true);
          }}
        />
        {mealSelected ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Dish Name</th>

                  <th>
                    <button onClick={() => setButtonShow(!buttonShow)}>
                      Show Products
                    </button>
                  </th>
                  <th>Price</th>
                  <th>Production Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <th>{selectedProducts.id}</th>
                <th>{selectedProducts.meal_name}</th>
                <th></th>
                <th>{selectedProducts.meal_cost}</th>
                <th>{selectedProducts.cost_of_meal_production}</th>
                <th>
                  <button> Edit</button>
                </th>
              </tbody>
            </table>
            {buttonShow ? (
              <IngredientTable
                ingredeintsUsed={selectedProducts.meal_info}
                ingredientsToAdd={notSelectedProducts}
                resetTable={resetTable}
                meal={selectedProducts}
                loadTable={true}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        {/* <SelectedDishTable
          listOfProducts={listOfProducts}
          selectedProducts={selectedProducts}
          productData={testDish}
          allProducts={allProducts}
        /> */}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
