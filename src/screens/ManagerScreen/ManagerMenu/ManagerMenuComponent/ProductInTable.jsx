import React from "react";

export default function ProductInTable({ product, productInfo }) {
  console.log(product);
  return (
    <tr>
      <th>{product.value}</th>
      <th>Y</th>
      <th>Z</th>
      {/* if product info pices give option to increment +/- it */}
    </tr>
  );
}
