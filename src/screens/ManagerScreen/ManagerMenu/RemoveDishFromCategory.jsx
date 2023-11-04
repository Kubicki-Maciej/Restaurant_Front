import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";
import TableComponents from "./ManagerMenuComponent/RemoveDishFromCategory/TableComponents";

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

function convertCategorysToSelect(selectedList) {
  const tempList = [];
  selectedList.forEach((item) => {
    tempList.push({ value: item.id, label: item.name });
  });
  return tempList;
}

function getListDishes(idCategory) {
  const category = categoryMenuTest.find(
    (category) => category.id === idCategory
  );
  return category.meals;
}

export default function RemoveDishFromCategory() {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [category, setCategory] = useState();
  const [categorySelected, setCategorySelected] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [categoryDishes, setCategoryDishes] = useState([]);

  return (
    <div>
      {" "}
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={convertCategorysToSelect(categoryMenuTest)}
        onChange={(choice) => {
          if (choice === null) {
            setCategory({ value: "", label: "" });
            setCategorySelected(false);
          } else {
            setCategory(choice);
            setCategorySelected(true);
            setCategoryId(choice.value);
            setCategoryDishes(getListDishes(choice.value));
          }
        }}
      />
      {categorySelected ? (
        <div>
          wybrana{categoryDishes.name}
          {/* <Select
            isMulti
            isClearable={true}
            isSearchable={true}
            defaultValue={convertCategorysToSelect(categoryDishes)}
            onChange={(choice) => {
              if (choice === null) {
                console.log(choice.value);
              } else {
                console.log(choice.value);
              }
            }}
          /> */}
          <TableComponents list={convertCategorysToSelect(categoryDishes)} />
        </div>
      ) : (
        <div>kategoria niewybrana</div>
      )}
    </div>
  );
}
