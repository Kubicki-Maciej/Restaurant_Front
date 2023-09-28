import React from "react";

import SelectedDish from "./SelectedDish";
export default function SelectedDishTable({
  selectedProducts,
  productData,
  allProducts,
}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dish Name</th>

            <th>Products</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => {
            const matchingItem = productData.find(
              (item) => item.id === product.value
            );
            return (
              <SelectedDish
                product={product}
                productInfo={matchingItem}
                allProducts={allProducts}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
