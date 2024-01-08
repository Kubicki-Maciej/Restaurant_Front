import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";
import TableComponents from "./ManagerMenuComponent/RemoveDishFromCategory/TableComponents";
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

const categoryMenuTest = [
  {
    id: 1,
    name: "Burgers",
    meals: [
      { name: "Hamburger", id: 1 },
      { name: "ChesseHamburger", id: 2 },
    ],
  },
  {
    id: 2,
    name: "Starters",
    meals: [
      { name: "Fries", id: 3 },
      { name: "ChesseFries", id: 4 },
    ],
  },
];

export default function RemoveDishFromCategory() {
  const [category, setCategory] = useState();

  const [listDish, setListDish] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);
  const [categorySelected, setCategorySelected] = useState(false);

  useEffect(() => {
    GetCategorys();
  }, []);

  useEffect(() => {
    console.log(listDish);
    if (listDish.length != 0) {
      setCategorySelected(true);
    } else {
      setCategorySelected(false);
    }
  }, [listDish]);

  useEffect(() => {}, [categorySelected]);

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
      .post(`/dashboard/get_dishes_in_category`, category)
      .then((actualData) => {
        setListDish(labelConverterDish(actualData.data));
      })
      .catch(() => {})
      .finally(() => {
        console.log(listDish);
      });
  }

  function DeleteMealInCategory() {
    setCategorySelected(false);
  }

  function ChangeSelection() {
    setCategorySelected(!categorySelected);
  }

  if (isLoadingCategory) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        {" "}
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
              setCategorySelected(false);
            } else {
              console.log(category);
              if (category) {
                if (category.id !== choice.id) {
                  setCategorySelected(false);
                }
              }
              setCategory(choice);
              GetDishes(choice);
            }
          }}
        />
        {categorySelected ? (
          <div>
            <TableComponents list={listDish} selectedCategory={category} />
          </div>
        ) : (
          <div>kategoria niewybrana</div>
        )}
      </div>
    );
  }
}
