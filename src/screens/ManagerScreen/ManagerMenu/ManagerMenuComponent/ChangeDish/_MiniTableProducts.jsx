import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import ProductRow from "./_ProductRow";

const animatedComponents = makeAnimated();

export default function MiniTable({ dishProducts, allProducts }) {
  const [rowProduct, setRowProduct] = useState([]);

  useEffect(() => {
    setRowProduct(dishProducts);
  }, []);

  function createNewRow() {
    setRowProduct([
      ...rowProduct,
      { name: "test", number: 0, type: "test", created: true },
    ]);
  }
  const converedProduct = allConvertedProducts(allProducts);

  function allConvertedProducts() {
    const data = [];
    allProducts.forEach((element) => {
      data.push({ value: element.id, label: element.name });
    });

    return data;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>productname</th>
            <th>w/p</th>
            <th>quanity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rowProduct.map((product) => (
            <ProductRow
              product={product}
              allProducts={allProducts}
              convertedAllProducts={converedProduct}
            />
          ))}
          <tr>
            <th>
              <button onClick={createNewRow}>Add new Product</button>
            </th>
          </tr>
        </tbody>
      </table>
      {/* <Select
        isMulti
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={createDeafultValues()}
        options={reformatAllProducts()}
        onChange={(choice) => {
          setUserChoice(choice);
        }}
      /> */}
    </div>
  );
}
