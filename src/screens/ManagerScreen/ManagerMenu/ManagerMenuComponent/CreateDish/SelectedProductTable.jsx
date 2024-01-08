import React from "react";

import ProductInTable from "./ProductInTable";

export default function SelectedProductTable({
  selectedProducts,
  productTypes,
  setProductUsed,
  productUsed,
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
              (item) => item.id === product.id
            );
            return (
              <ProductInTable
                product={product}
                productInfo={matchingItem}
                setProductUsed={setProductUsed}
                productUsed={productUsed}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
