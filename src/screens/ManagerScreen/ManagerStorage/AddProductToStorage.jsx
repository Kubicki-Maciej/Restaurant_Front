import { isObject } from "formik";
import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";

const testStorageData = [
  { value: 1, label: "Shelf" },
  { value: 2, label: "Fridge" },
];
const dishData = [
  { value: 1, label: "Chesse", storage: 2 },
  { value: 2, label: "Meet", storage: null },
  { value: 3, label: "Roll", storage: 1 },
  { value: 4, label: "Mustard", storage: null },
];

function productWithOutStorage() {
  const productWithOutStorageList = [];
  dishData.forEach((item) => {
    if (item.storage === null) {
      productWithOutStorageList.push({ value: item.value, label: item.label });
    }
  });
  return productWithOutStorageList;
}

export default function AddProductToStorage() {
  const [storage, setStorage] = useState();
  const [storageSelected, setStorageSelected] = useState(false);

  const [product, setProduct] = useState();
  const [productSelected, setProductSelected] = useState(false);

  function sendToApi() {
    const storageId = storage.value;
    const productsId = [];

    product.forEach((item) => {
      productsId.push(item.value);
    });

    const dataToApi = { storage_id: storageId, products_id: productsId };
    console.log("dataToApi");
    console.log(dataToApi);
  }

  return (
    <div>
      AddProductToStorage
      {/* select storage */}
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={testStorageData}
        onChange={(choice) => {
          if (choice === null) {
            setStorage({ value: "", label: "" });
            setStorageSelected(false);
          } else {
            setStorage(choice);
            setStorageSelected(true);
          }
        }}
      />
      {/* select product */}
      {storageSelected ? (
        <div>
          <Select
            isMulti
            classNamePrefix="select"
            isClearable={true}
            isSearchable={true}
            name="color"
            options={productWithOutStorage()}
            onChange={(choice) => {
              if (choice === null) {
                setProduct({ value: "", label: "" });
                setProductSelected(false);
              } else {
                setProduct(choice);
                setProductSelected(true);
              }
            }}
          />
          {storageSelected ? (
            <button onClick={sendToApi}>Add to storage</button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div>kategoria niewybrana</div>
      )}
    </div>
  );
}
