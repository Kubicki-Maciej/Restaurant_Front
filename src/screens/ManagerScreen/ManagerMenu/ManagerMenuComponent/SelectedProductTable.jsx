import React from "react";

import ProductInTable from "./ProductInTable";

export default function SelectedProductTable({ selectedProducts }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Type</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => (
            <ProductInTable product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
