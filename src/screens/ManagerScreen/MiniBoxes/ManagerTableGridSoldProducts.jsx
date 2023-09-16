import React from "react";
import { useState, useEffect } from "react";
import TestDataOrders from "../TestData/TestData";

export default function ManagerTableGrid() {
  const [data, setData] = useState([]);
  const [dataFirst, setDataFirst] = useState({ id: "", waiter_id: "" });
  const [loading, setLoading] = useState(false);
  const [dataDish, setDataDish] = useState({});
  const [dataDishDate, setDataDishDate] = useState({});
  const [dishLoaded, setDishLoaded] = useState(false);
  const [mealNames, setMealNames] = useState([]);

  useEffect(() => {
    setData(TestDataOrders);
    setDataFirst(data[0]);
    setLoading(true);
    if (loading) {
      setDataDish(SumDish(data));
      setDataDishDate(SumDishByDate(data));
      setDishLoaded(true);
    }
  }, [data, dataFirst]);

  function getMealNames(dataInput) {
    const tempMealsNames = [];
    Object.entries(dataInput).map(([item, value]) => {
      tempMealsNames.push(item);
    });
    return tempMealsNames;
  }

  function SumDish(dataOrders) {
    // for (const order in data) {
    const mealCounts = {};

    dataOrders.forEach((item) => {
      item.meals_ordered.forEach((meal_order) => {
        const { id, meal_name } = meal_order.meal;
        const count = mealCounts[meal_name] || 0;
        mealCounts[meal_name] = count + meal_order.number_of_meal;
      });
    });
    return mealCounts;
  }

  function SumDishByDate(dataOrders) {
    // for (const order in data) {
    const mealCountsByDate = {};

    dataOrders.forEach((item) => {
      const date = item["date_end"].substring(0, 10);
      mealCountsByDate[date] = {};

      item.meals_ordered.forEach((meal_order) => {
        const { id, meal_name } = meal_order.meal;
        const count = mealCountsByDate[date][meal_name] || 0;
        mealCountsByDate[date][meal_name] = count + meal_order.number_of_meal;
      });
    });
    return mealCountsByDate;
  }

  console.log("dataDish");
  console.log(dataDish);
  console.log(dataDishDate);

  return (
    <div>
      Sold items in September
      {loading ? (
        <div>
          {dishLoaded ? (
            <div>
              {Object.entries(dataDish).map(([item, value]) => (
                <div>
                  {item} : {value}
                </div>
              ))}
            </div>
          ) : (
            <div>Computing Data</div>
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

// {data.map((item) => (
//   <tr key={item.id}>
//     <td>{item.id}</td>
//     <td>{item.waiter_id}</td>
//     <td>___</td>
//     <td>
//       {item.meals_ordered.map((meal) => (
//         <div key={meal.meal.id}>
//           {meal.number_of_meal} x {meal.meal.meal_name} (
//           {meal.meal.cost} each) total cost{" "}
//           {meal.number_of_meal * meal.meal.cost}
//         </div>
//       ))}
//     </td>
//   </tr>
// ))}
