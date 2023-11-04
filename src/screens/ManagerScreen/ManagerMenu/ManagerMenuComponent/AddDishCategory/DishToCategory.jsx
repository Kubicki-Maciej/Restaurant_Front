import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function DishToCategory({ category, returneddish, list }) {
  const [dishCategory, setDishCategory] = useState("");
  const [listDish, setListDish] = useState([]);
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
    setListDish(createDishList());
    console.log(listDish);
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
        options={listDish}
        onChange={(choice) => {
          if (choice === null) {
            setDish({ value: "", label: "" });
          } else {
            setDish(choice);
          }
        }}
      />
      <button onClick={() => returneddish()}>Add To Category</button>
    </div>
  );
}
