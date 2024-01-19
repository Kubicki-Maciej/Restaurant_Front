import React from "react";

function EditRowProduct({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <td>{editFormData.storages.name}</td>
      <td>{editFormData.products.name}</td>
      <td>{editFormData.product_price}</td>
      <td>{editFormData.product_date_added.slice(0, 10)}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Change Date Expired"
          name="product_date_expired"
          value={editFormData.product_date_expired}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="float"
          required="required"
          placeholder="Change quantity"
          name="number_of_product"
          value={editFormData.number_of_product}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>{editFormData.products.product_type}</td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default EditRowProduct;
