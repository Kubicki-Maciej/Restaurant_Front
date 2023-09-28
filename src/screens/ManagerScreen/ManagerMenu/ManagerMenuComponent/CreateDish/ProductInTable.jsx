import React from "react";
import { useEffect, useState } from "react";

export default function ProductInTable({ product, productInfo, action }) {
  console.log(product);
  const [buttonAction, setButtonAction] = useState(false);
  const [editableField, setEditableField] = useState(0.0);

  function actionChange() {
    setButtonAction(!buttonAction);
    console.log("akcja");
  }
  function editNumber() {}

  function saveValue() {}

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
