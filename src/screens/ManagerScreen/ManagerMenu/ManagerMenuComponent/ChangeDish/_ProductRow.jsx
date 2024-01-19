import React from "react";
import { useState, useEffect } from "react";

import Select from "react-select";

export default function ProductRow({
  product,
  allProducts,
  convertedAllProducts,
}) {
  const [objProduct, setObjProduct] = useState({ name: "", type: "" });
  const [productName, setProductName] = useState("T");
  const [productNumber, setProductNumber] = useState(0);
  const [productType, setProductType] = useState(0);

  const [edit, setEdit] = useState(true);
  const [onUserChoice, setUserChoice] = useState(false);

  useEffect(() => {
    getChoisedItemFromAllProducts();
  }, [onUserChoice]);

  // useEffect(() => {
  //   setProductName(objProduct.name);
  //   setProductType(objProduct.type);
  // }, [objProduct]);

  function getChoisedItemFromAllProducts(choice) {
    const newProduct = allProducts.find(
      (item) => item.id === onUserChoice.value
    );

    setObjProduct(newProduct);
    if (onUserChoice) {
      setProductType(newProduct.type);
      setProductName(newProduct.name);
    }
  }

  const handleEditFormChangeName = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    setProductName(fieldValue);
  };
  const handleEditFormChangeNumber = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    setProductNumber(fieldValue);
  };

  function changeEdit() {
    setEdit(!edit);
  }

  function setupObject() {
    return { name: productName, type: "", number: productNumber };
  }

  if (product.created) {
    return (
      <tr>
        <th>
          {edit ? (
            <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable={true}
              isSearchable={true}
              name="color"
              options={convertedAllProducts}
              onChange={(choice) => {
                setUserChoice(choice);
                // getChoisedItemFromAllProducts();
              }}
            />
          ) : (
            <div>{productName}</div>
          )}
        </th>
        <th>
          {edit ? (
            <input
              type="float"
              name="productnumber"
              value={productNumber}
              onChange={handleEditFormChangeNumber}
            ></input>
          ) : (
            <div>{productNumber}</div>
          )}
        </th>
        <th>{onUserChoice ? <div>{productType}</div> : <div>None</div>}</th>
        <th>
          {edit ? (
            <button onClick={changeEdit}>Save</button>
          ) : (
            <button onClick={changeEdit}>Edit</button>
          )}
          <button>Delete</button>
        </th>
      </tr>
    );
  }
  return (
    <tr>
      <th>{product.name}</th>
      <th>{product.number}</th>
      <th>{product.type}</th>
      <th>
        <button>Edit</button>
        <button>Delete</button>
      </th>
    </tr>
  );
}
