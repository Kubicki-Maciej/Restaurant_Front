import React from "react";
import { useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function CategoryTable({
  categoryType,
  categoryTypeName,
  changeIt,
}) {
  const [selectedOptions, setSelectedOptions] = useState(categoryType);
  console.log(categoryType);

  return (
    <div>
      {categoryTypeName}:
      <ul>
        {selectedOptions.map((option) => (
          <li key={option.id}>
            {option.category_name}{" "}
            <button
              // onClick={() => changeIt(option.id)}
              onClick={() => {
                changeIt(option.id);

                setSelectedOptions((prevSelected) =>
                  prevSelected.filter((item) => item.id !== option.id)
                );
                console.log(selectedOptions);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
