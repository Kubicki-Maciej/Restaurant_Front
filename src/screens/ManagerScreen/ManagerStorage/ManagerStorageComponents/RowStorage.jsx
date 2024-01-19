import React from "react";
import { useEffect, useState } from "react";
import RowActions from "./RowActions";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function RowStorage({ values, handleEditClick, deleteRow }) {
  const [data, setData] = useState(values);

  return (
    <tr>
      <th>{data.storages.name}</th>
      <th>{data.products.name}</th>
      <th>{data.product_price}</th>
      <th>{data.product_date_added.slice(0, 10)}</th>
      <th>{data.product_date_expired}</th>
      <th>{data.number_of_product}</th>
      <th>{data.products.product_type}</th>
      <th>
        <div>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, data)}
          >
            Update
          </button>
          <button type="button" onClick={(event) => deleteRow(event, data.id)}>
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
}
