import React from "react";

import ProductInTable from "./ProductInTable";

export default function SelectedProductTable({
  selectedProducts,
  productTypes,
}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Type</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => {
            const matchingItem = productTypes.find(
              (item) => item.id === product.value
            );
            return (
              <ProductInTable product={product} productInfo={matchingItem} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
