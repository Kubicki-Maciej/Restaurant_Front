import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";

//
import DishToCategory from "./ManagerMenuComponent/AddDishCategory/DishToCategory";

export default function AddDishCategory() {
  const [category, setCategory] = useState();
  const [categorySelected, setCategorySelected] = useState(false);
  const [dishCategory, setDishCategory] = useState("");

  useEffect(() => {
    console.log(dishCategory);
  }, [dishCategory]);

  const convertedAllProducts = [
    { value: 1, label: "Burgers" },
    { value: 2, label: "starters" },
  ];

  return (
    <div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={convertedAllProducts}
        onChange={(choice) => {
          if (choice === null) {
            setCategory({ value: "", label: "" });
            setCategorySelected(false);
          } else {
            setCategory(choice);
            setCategorySelected(true);
          }
        }}
      />
      {categorySelected ? (
        <div>
          <DishToCategory
            returneddish={setDishCategory}
            category={category.label}
            list={["Chesse", "Hamburger", "ChikenBurger"]}
          ></DishToCategory>
        </div>
      ) : (
        <div>kategoria niewybrana</div>
      )}
    </div>
  );
}
