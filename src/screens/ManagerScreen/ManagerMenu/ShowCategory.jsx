import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import CategoryTable from "./ManagerMenuComponent/Category/CategoryTable";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

function splitCategorys(element) {
  const tempListSelected = [];
  const tempListUnselected = [];
  element.forEach((category) => {
    if (category.category_show) {
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

  const [listCategory, setListCategory] = useState([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);

  function GetCategorys() {
    client
      .get(`/dashboard/get_categorys`)
      .then((actualData) => {
        setListCategory(actualData.data);
        const splitedCategorys = splitCategorys(actualData.data);
        setSelectedCategory(splitedCategorys.selected);
        setUnselectedCategory(splitedCategorys.unselected);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoadingCategory(false);
      });
  }

  function UpdateCategory(categoryId) {
    const data = { category_id: categoryId };
    setIsLoadingCategory(true);
    client
      .post(`/dashboard/hide_show_category`, data)
      .then((actualData) => {
        setListCategory(actualData.data);
        const splitedCategorys = splitCategorys(actualData.data);
        setSelectedCategory(splitedCategorys.selected);
        setUnselectedCategory(splitedCategorys.unselected);
      })
      .catch(() => {
        console.log("problem with category change");
      })
      .finally(() => {
        setIsLoadingCategory(false);
      });
  }
  function HideShowCategory(CategoryId) {
    UpdateCategory(CategoryId);
    console.log(CategoryId);
  }

  useEffect(() => {
    GetCategorys();
  }, []);

  if (isLoadingCategory) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <div>
          <CategoryTable
            categoryType={selectedCategory}
            categoryTypeName={"Selected"}
            changeIt={HideShowCategory}
          />
        </div>
        <div>
          <CategoryTable
            categoryType={unselectedCategory}
            categoryTypeName={"Unselected"}
            changeIt={HideShowCategory}
          />
        </div>
      </div>
    );
  }
}
