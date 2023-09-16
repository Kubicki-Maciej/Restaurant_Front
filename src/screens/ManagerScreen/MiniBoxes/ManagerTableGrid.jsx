import React from "react";
import { useState, useEffect } from "react";
import TestDataOrders from "../TestData/TestData";
// style
import { BoxContainer, BoxItem } from "./style/BoxStyle";
// data chart test
import BarChart from "./Charts/BarChart";
import BarSoldMealsForDate from "./Charts/BarSoldMealsForDate";

export default function ManagerTableGrid() {
  const [data, setData] = useState([]);
  const [dataFirst, setDataFirst] = useState({ id: "", waiter_id: "" });
  const [loading, setLoading] = useState(false);
  const [dataDish, setDataDish] = useState({});
  const [dataDishDate, setDataDishDate] = useState({});
  const [dishLoaded, setDishLoaded] = useState(false);
  const [dataNames, setDataNames] = useState([]);
  useEffect(() => {
    setData(TestDataOrders);
    setDataFirst(data[0]);
    setLoading(true);
    if (loading) {
      setDataDish(SumDish(data));
      setDataDishDate(SumDishByDate(data));
      console.log(dataDish);
      console.log(dataDishDate);
      setDishLoaded(true);
      setDataNames();
    }
  }, [data, dataFirst]);

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
      if (mealCountsByDate[date]) {
        item.meals_ordered.forEach((meal_order) => {
          const { id, meal_name } = meal_order.meal;
          const count = mealCountsByDate[date][meal_name] || 0;
          mealCountsByDate[date][meal_name] = count + meal_order.number_of_meal;
        });
      } else {
        mealCountsByDate[date] = {};
        item.meals_ordered.forEach((meal_order) => {
          const { id, meal_name } = meal_order.meal;
          const count = mealCountsByDate[date][meal_name] || 0;
          mealCountsByDate[date][meal_name] = count + meal_order.number_of_meal;
        });
      }
    });
    return mealCountsByDate;
  }

  return (
    <div>
      {loading ? (
        <div>
          {dishLoaded ? (
            <BoxContainer>
              {/* <BoxItem>
                Sold items in September:
                {Object.entries(dataDish).map(([item, value]) => (
                  <div>
                    {item} : {value}
                  </div>
                ))}
              </BoxItem>
              <BoxItem>
                Chart
                <BarChart />
              </BoxItem> */}

              <BoxItem>
                <BarSoldMealsForDate data={dataDishDate} keys={dataNames} />
              </BoxItem>
            </BoxContainer>
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
