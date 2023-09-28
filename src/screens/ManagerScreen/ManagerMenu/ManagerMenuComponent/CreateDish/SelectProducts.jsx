import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";

import SelectedProductTable from "./SelectedProductTable";
const animatedComponents = makeAnimated();

export default function SelectProducts({
  productList,
  chosedProducts,
  productTypes,
}) {
  const [userChoice, setUserChoice] = useState([]);

  useEffect(() => {
    setUserChoice(userChoice);
    chosedProducts(userChoice);
  }, [userChoice]);

  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={productList}
        onChange={(choice) => {
          setUserChoice(choice);
        }}
      />
      <SelectedProductTable
        selectedProducts={userChoice}
        productTypes={productTypes}
      ></SelectedProductTable>
    </div>
  );
}
