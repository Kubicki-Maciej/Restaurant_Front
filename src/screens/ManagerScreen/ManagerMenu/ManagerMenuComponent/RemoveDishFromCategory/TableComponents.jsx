import React from "react";
import { useState, useEffect } from "react";

export default function TableComponents({ list }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <p>Selected Options:</p>
      <ul>
        {list.map((option) => (
          <li key={option.value}>
            {option.label}{" "}
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
