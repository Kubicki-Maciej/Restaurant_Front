import React from "react";
import { useEffect, useState } from "react";

export default function ProductInTable({
  product,
  productInfo,
  action,
  setProductUsed,
  productUsed,
}) {
  const [buttonAction, setButtonAction] = useState(false);
  const [editableField, setEditableField] = useState(0.0);
  const [ingredient, setIngredient] = useState({});

  function actionChange() {
    setButtonAction(!buttonAction);
    console.log("action change");
    // setIngredient({
    //   id_ingredient: product.id,
    //   name: product.value,
    //   ingredient_used: editableField,
    // });

    // setProductUsed([
    //   ...productUsed,
    //   {
    //     id_ingredient: product.id,
    //     name: product.value,
    //     ingredient_used: editableField,
    //   },
    // ]);
    console.log(productUsed);
    updateItemOrAddNew();
  }

  function addItem() {
    setProductUsed([
      ...productUsed,
      {
        id_ingredient: product.id,
        name: product.value,
        ingredient_used: editableField,
      },
    ]);
  }
  function updateItemOrAddNew() {
    console.log("product");
    console.log(product);
    console.log(productUsed);
    console.log(editableField);
    const findItem = productUsed.find((item) =>
      product.id === item.id_ingredient ? true : false
    );
    console.log("findItem");
    console.log(findItem);
    if (findItem) {
      console.log("update");
      productUsed.map((itemToUpdate) =>
        itemToUpdate.id_ingredient === product.id
          ? {
              id_ingredient: product.id,
              name: product.value,
              ingredient_used: editableField,
            }
          : ""
      );
    } else {
      addItem();
    }
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    setEditableField(fieldValue);
  };

  return (
    <tr>
      <th>{product.value}</th>
      <th>{productInfo.type}</th>
      <th>
        {buttonAction ? (
          <div>{editableField} </div>
        ) : (
          <input
            type="float"
            name="editableField"
            value={editableField}
            onChange={handleEditFormChange}
          ></input>
        )}
      </th>
      <th>
        {buttonAction ? (
          <button onClick={() => actionChange()}>edit</button>
        ) : (
          <button onClick={() => actionChange()}>save</button>
        )}
      </th>
      {/* if product info pices give option to increment +/- it */}
    </tr>
  );
}
