import React from "react";
import { useState } from "react";

export default function CategoryTable({ categoryType, categoryTypeName }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      {categoryTypeName}:
      <ul>
        {categoryType.map((option) => (
          <li key={option.value}>
            {option.name}{" "}
            <button
              onClick={() =>
                setSelectedOptions((prevSelected) =>
                  prevSelected.filter((item) => item.value !== option.value)
                )
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
