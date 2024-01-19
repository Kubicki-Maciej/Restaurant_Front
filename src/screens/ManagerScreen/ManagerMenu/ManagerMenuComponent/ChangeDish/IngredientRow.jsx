import React from "react";
import { useState, useEffect } from "react";

function IngredientRow({ ingredient, isNew, apiSend }) {
  console.log("ingredient");
  console.log(ingredient);
  const [isInBase, setIsInBase] = useState(isNew);
  const [targetedEdit, setTargetedEdit] = useState(isNew);
  const [ingredientUsed, setIngredientUsed] = useState(ingredient);
  const [ingredientWeightValue, setIngredientWeightValue] = useState(
    ingredient.weight_pices_used
  );

  function changeInIngredient(target, value) {
    ingredientUsed[target] = value;
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    // changeInIngredient("weight_pices_used", fieldValue);
    setIngredientWeightValue(fieldValue);
  };

  const submitEditFormChange = (event) => {
    changeInIngredient("weight_pices_used", ingredientWeightValue);
    // console.log(ingredientUsed);
    // setProductName(fieldValue);
  };

  return (
    <tr>
      <th>{ingredientUsed.product_id}</th>
      <th>{ingredientUsed.product_name}</th>
      <th>{ingredientUsed.product_name}</th>

      {targetedEdit ? (
        <th>
          <input
            name="weight_pices_used"
            onChange={handleEditFormChange}
          ></input>
        </th>
      ) : (
        <th>{ingredientUsed.weight_pices_used}</th>
      )}

      <th>{ingredientUsed.product_type}</th>
      <th>
        {targetedEdit ? (
          <div>
            <button
              onClick={() => {
                submitEditFormChange();
                setTargetedEdit(!targetedEdit);
                apiSend(ingredientUsed);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setTargetedEdit(!targetedEdit);
                setIngredientWeightValue(ingredientUsed.weight_pices_used);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => setTargetedEdit(!targetedEdit)}>Edit</button>
          </div>
        )}
      </th>
    </tr>
  );
}

export default IngredientRow;
