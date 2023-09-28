import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import SelectedDishTable from "./ManagerMenuComponent/ChangeDish/SelectedDishTable";

const animatedComponents = makeAnimated();

export default function ChangeDish() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const listOfProducts = [];

  const testDish = [
    {
      id: 1,
      name: "Burger",
      price: 12.55,
      productUsed: [
        { id: 1, name: "meet", number: 0.2, type: "kg" },
        { id: 2, name: "roll", number: 1, type: "p" },
      ],
    },
    {
      id: 2,
      name: "ChesseBurger",
      price: 12.55,
      productUsed: [
        { id: 1, name: "meet", number: 0.2, type: "kg" },
        { id: 2, name: "roll", number: 1, type: "p" },
        { id: 3, name: "chesse", number: 0.1, type: "kg" },
      ],
    },
  ];

  const allProducts = [
    { id: 1, name: "meet", type: "kg" },
    { id: 2, name: "roll", type: "kg" },
    { id: 3, name: "chesse", type: "kg" },
    { id: 4, name: "becon", type: "kg" },
  ];

  function convertDishDataToSelect() {
    const convertedData = [];
    testDish.forEach((element) => {
      convertedData.push({ value: element.id, label: element.name });
    });

    return convertedData;
  }

  return (
    // <div>
    //   <SelectProducts productList={testDish} setUserChoice={setSelectedProducts} />
    // </div>
    <div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={convertDishDataToSelect()}
        onChange={(choice) => {
          setSelectedProducts(choice);
        }}
      />
      <SelectedDishTable
        listOfProducts={listOfProducts}
        selectedProducts={selectedProducts}
        productData={testDish}
        allProducts={allProducts}
      />
    </div>
  );
}
