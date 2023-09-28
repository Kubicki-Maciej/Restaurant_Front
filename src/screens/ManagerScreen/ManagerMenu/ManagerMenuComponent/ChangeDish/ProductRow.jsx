import React from "react";

export default function ProductRow({ product }) {
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
