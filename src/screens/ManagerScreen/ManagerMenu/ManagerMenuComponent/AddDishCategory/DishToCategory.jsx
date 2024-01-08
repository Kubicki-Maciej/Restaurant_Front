import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function DishToCategory({
  category,
  submit,
  list,
  selectedMeal,
}) {
  const [dishCategory, setDishCategory] = useState("");

  const [selectedDish, setSelectedDish] = useState("");
  const [dish, setDish] = useState("");

  function createDishList() {
    const tempDataList = [];
    for (let i = 0; list.length > i; i++) {
      tempDataList.push({ value: i + 1, label: list[i] });
    }
    return tempDataList;
  }

  useEffect(() => {
    setDishCategory(category);
  }, []);

  return (
    <div>
      <h5>Category selected : {category}</h5>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={list}
        onChange={(choice) => {
          if (choice === null) {
            setDish({ id: "", value: "", label: "", dish_name: "" });
          } else {
            setDish(choice);
            selectedMeal(choice);
          }
        }}
      />

      <button
        onClick={() => {
          submit();
        }}
      >
        Add To Category
      </button>
    </div>
  );
}
