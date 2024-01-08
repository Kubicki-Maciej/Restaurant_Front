import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";

//
import DishToCategory from "./ManagerMenuComponent/AddDishCategory/DishToCategory";

import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

function labelConverterCategory(data) {
  const tempList = [];
  data.forEach((element) => {
    tempList.push({
      id: element.id,
      value: element.id,
      label: element.category_name,
      category_name: element.category_name,
    });
  });
  return tempList;
}

function labelConverterDish(data) {
  const tempList = [];
  data.forEach((element) => {
    tempList.push({
      id: element.id,
      value: element.id,
      label: element.meal_name,
      dish_name: element.meal_name,
    });
  });

  return tempList;
}

export default function AddDishCategory() {
  const params = {};

  const [category, setCategory] = useState();
  const [dish, setDish] = useState();
  const [categorySelected, setCategorySelected] = useState(false);
  const [dishCategory, setDishCategory] = useState("");

  const [listDish, setListDish] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  const [isLoadingCategory, setIsLoadingCategory] = useState(true);

  useEffect(() => {
    GetCategorys();
  }, [dishCategory]);

  useEffect(() => {
    if (listDish.length != 0) {
      setCategorySelected(true);
    } else {
      setCategorySelected(false);
    }
  }, [listDish]);

  function GetCategorys() {
    client
      .get(`/dashboard/get_categorys`)
      .then((actualData) => {
        setListCategory(labelConverterCategory(actualData.data));
      })
      .catch(() => {})
      .finally(() => {
        setIsLoadingCategory(false);
      });
  }

  function GetDishes(categoryInfo) {
    const category = { id_category: categoryInfo.id };

    client
      .post(`/dashboard/get_dishes_not_in_selected_category`, category)
      .then((actualData) => {
        setListDish(labelConverterDish(actualData.data));
        console.log(listDish);
      })
      .catch(() => {})
      .finally(() => {});
  }

  function PutDishToCategory(dishCategoryData) {
    client
      .post(`/dashboard/add_dish_to_category`, dishCategoryData)
      .then(() => {})
      .catch(() => {})
      .finally(() => {});
  }

  function AddDishToCategorySubmit() {
    const data = { meal_id: dish.id, category_id: category.id };
    PutDishToCategory(data);
    setCategorySelected(false);
    setCategory({ value: "", label: "" });
    setDish({});
    setListDish([]);
  }

  if (isLoadingCategory) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          name="color"
          options={listCategory}
          onChange={(choice) => {
            if (choice === null) {
              setCategory({ value: "", label: "" });
              setListDish([]);
            } else {
              setCategory(choice);
              GetDishes(choice);
            }
          }}
        />
        {categorySelected ? (
          <div>
            <DishToCategory
              submit={AddDishToCategorySubmit}
              category={category.label}
              list={listDish}
              selectedMeal={setDish}
            ></DishToCategory>
          </div>
        ) : (
          <div>Category not selected</div>
        )}
      </div>
    );
  }
}
