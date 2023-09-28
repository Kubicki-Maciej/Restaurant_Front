import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import ProductRow from "./ProductRow";

const animatedComponents = makeAnimated();

export default function MiniTable({ dishProducts, allProducts }) {
  const [rowProduct, setRowProduct] = useState([]);
  const [userChoice, setUserChoice] = useState([]);

  useEffect(() => {
    setRowProduct(dishProducts);
  }, []);

  useEffect(() => {
    console.log("zmieniany jest userchoice");
    console.log("userChoice");
    console.log(userChoice);
    console.log("rowProduct");
    console.log(rowProduct);

    // createNewSetofRows(rowProduct, userChoice);
  }, [userChoice]);

  function reformatAllProducts() {
    const data = [];
    allProducts.forEach((product) =>
      data.push({ value: product.id, label: product.name })
    );
    return data;
  }

  function findIndexInAllProducts(dishList) {
    const selectedIndexes = [];
    dishList.forEach((product) => {
      const index = allProducts.findIndex((item) => item.id === product.id);
      selectedIndexes.push(index);
    });
    return selectedIndexes;
  }

  function findIndexInSelectList(dishList) {
    // is updated index after user change select value
    const selectedIndexes = [];
    dishList.forEach((product) => {
      const index = allProducts.findIndex((item) => item.id === product.value);
      selectedIndexes.push(index);
    });
    console.log(selectedIndexes);
    return selectedIndexes;
  }

  function createNewSetofRows(rows, selectedItems) {
    let productToAdd = diffranceInIdOnSelectedAndDishProduct(
      rowProduct,
      userChoice
    );
    // const product = allProducts.find((item) => item.id === product.id);
    setRowProduct(...rowProduct, {
      id: productToAdd.id,
      name: productToAdd.name,
      number: 0,
      type: productToAdd.type,
    });
  }

  function diffranceInIdOnSelectedAndDishProduct(array1, array2) {
    return array1.filter((object1) => {
      return !array2.some((object2) => {
        return object1.id === object2.value;
      });
    });
  }

  function createDeafultValues() {
    const deafultDataProduct = [];
    const indexes = findIndexInAllProducts(dishProducts);
    const products = reformatAllProducts();
    indexes.forEach((i) => {
      deafultDataProduct.push(products[i]);
    });
    return deafultDataProduct;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>productname</th>
            <th>w/p</th>
            <th>quanity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {rowProduct.map((product) => (
            <ProductRow product={product} />
          ))} */}
        </tbody>
      </table>
      <Select
        isMulti
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={createDeafultValues()}
        options={reformatAllProducts()}
        onChange={(choice) => {
          setUserChoice(choice);
        }}
      />
    </div>
  );
}
