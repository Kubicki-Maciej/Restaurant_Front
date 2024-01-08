import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

function DeleteMealInCategory(mealId, categoryId) {
  const data = { meal_id: mealId, category_menu_id: categoryId };
  console.log(data);
  client
    .delete(`/dashboard/remove_meal_from_category`, { data: data })
    .catch(() => {
      console.log("no meal in category");
    });
  // meal_id meal_category
}

export default function TableComponents({ list, selectedCategory }) {
  const [selectedOptions, setSelectedOptions] = useState(list);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <p>Selected Options:</p>
      <ul>
        {selectedOptions.map((option) => (
          <li key={option.value}>
            {option.label}{" "}
            <button
              onClick={() => {
                DeleteMealInCategory(option.value, selectedCategory.value);
                setSelectedOptions((prevSelected) =>
                  prevSelected.filter((item) => item.value !== option.value)
                );
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
