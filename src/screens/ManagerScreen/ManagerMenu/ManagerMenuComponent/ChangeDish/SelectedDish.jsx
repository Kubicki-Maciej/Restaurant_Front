import React from "react";
import { useEffect, useState } from "react";
import SelectProducts from "../CreateDish/SelectProducts";
import MiniTable from "./MiniTableProducts";

export default function SelectedDish({
  product,
  productInfo,
  action,
  allProducts,
}) {
  const [buttonActionChangeProduct, setButtonActionChangeProduct] =
    useState(true);
  const [buttonAction, setButtonAction] = useState(true);
  const [productName, setProductName] = useState(product.label);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [usedProductString, setUsedProductString] = useState("");

  useEffect(() => {
    setUsedProductString(showListOfProducts());
  }, [usedProductString]);

  function getAllProductUsed() {
    return productInfo.productUsed;
  }

  function reformatProductUsed() {
    const data = [];
    const dataToReformat = getAllProductUsed();
    dataToReformat.forEach((element) => {
      data.push({ value: element.id, label: element.name });
    });
    return data;
  }

  function createProductTypes() {
    const data = [];
    const dataToReformat = getAllProductUsed();
    dataToReformat.forEach((element) => {
      data.push({ id: element.id, type: element.type });
    });
    return data;
  }

  function actionChangeProduct() {
    setButtonActionChangeProduct(!buttonActionChangeProduct);
  }
  function actionChangeName() {
    setButtonAction(!buttonAction);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    setProductName(fieldValue);
  };

  function showListOfProducts() {
    const productUsedString = "";
    const productUsed = getAllProductUsed();
    productUsed.forEach((product) =>
      productUsedString.concat(
        `${product.name}|${product.number}${product.type}`
      )
    );
    return productUsedString;
  }

  return (
    <tr>
      <th>{product.value}</th>

      <th>
        {buttonAction ? (
          <div>{productName}</div>
        ) : (
          <input value={productName} onChange={handleEditFormChange}></input>
        )}
        {buttonAction ? (
          <button onClick={() => actionChangeName()}>edit name</button>
        ) : (
          <button onClick={() => actionChangeName()}>save name</button>
        )}
      </th>

      <th>
        {buttonActionChangeProduct ? (
          <div>{usedProductString} </div>
        ) : (
          //   <SelectProducts
          //     chosedProducts={setSelectedProducts}
          //     productList={reformatProductUsed()}
          //     productTypes={createProductTypes()}
          //   />
          <MiniTable
            dishProducts={getAllProductUsed()}
            allProducts={allProducts}
          />
        )}
      </th>
      <th>{productInfo.price}</th>
      <th>
        {buttonActionChangeProduct ? (
          <button onClick={() => actionChangeProduct()}>edit product</button>
        ) : (
          <button onClick={() => actionChangeProduct()}>save product</button>
        )}
      </th>
      {/* if product info pices give option to increment +/- it */}
    </tr>
  );
}
