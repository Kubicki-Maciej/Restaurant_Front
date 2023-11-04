import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import CategoryTable from "./ManagerMenuComponent/Category/CategoryTable";

const categoryMenuTest = [
  {
    id: 1,
    name: "Burgers",
    meals: [
      { name: "Hamburger", id: 1 },
      { name: "ChesseHamburger", id: 2 },
    ],
    isShow: true,
  },
  {
    id: 2,
    name: "Starters",
    meals: [
      { name: "Fries", id: 3 },
      { name: "ChesseFries", id: 4 },
    ],
    isShow: true,
  },
];

function splitCategorys(element) {
  const tempListSelected = [];
  const tempListUnselected = [];
  element.forEach((category) => {
    if (category.isShow) {
      tempListSelected.push(category);
    } else {
      tempListUnselected.push(category);
    }
  });
  console.log("tempListSelected");
  console.log(tempListSelected);
  return { selected: tempListSelected, unselected: tempListUnselected };
}

export default function ShowCategory() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [unselectedCategory, setUnselectedCategory] = useState([]);

  useEffect(() => {
    const splitedCategorys = splitCategorys(categoryMenuTest);
    setSelectedCategory(splitedCategorys.selected);
    setUnselectedCategory(splitedCategorys.unselected);
  }, []);

  return (
    <div>
      <div>
        <CategoryTable
          categoryType={selectedCategory}
          categoryTypeName={"Selected"}
        />
      </div>
      <div>
        <CategoryTable
          categoryType={unselectedCategory}
          categoryTypeName={"Unselected"}
        />
      </div>
    </div>
  );
}
