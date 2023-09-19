import React from "react";
import { useState, useEffect } from "react";

// style
import { BoxContainer, BoxItem } from "./style/BoxStyle";
// data chart test
import TestDataOrders from "../TestData/TestData";
import TestDataWaiters from "../TestData/TestDataWaiters";
// box bar components
import ManagerDateRange from "./ManagerDateRange";
// bar components
import BarChart from "./Charts/BarChart";
import BarSoldMealsForDate from "./Charts/BarSoldMealsForDate";
import BarWaitersEarnings from "./Charts/WaitersEarnings";

export default function ManagerTableGrid() {
  const [data, setData] = useState([]);
  const [dataFirst, setDataFirst] = useState({ id: "", waiter_id: "" });
  const [loading, setLoading] = useState(false);
  const [dataDish, setDataDish] = useState({});
  const [dataDishDate, setDataDishDate] = useState({});
  const [dishLoaded, setDishLoaded] = useState(false);
  const [dataNames, setDataNames] = useState([]);

  const [dataWaiter, setDataWaiter] = useState([]);

  useEffect(() => {
    setDataWaiter(TestDataWaiters);

    setData(TestDataOrders);
    setDataFirst(data[0]);
    setLoading(true);
    if (loading) {
      setDataDish(SumDish(data));
      setDataDishDate(SumDishByDate(data));
      // console.log(dataDish);
      // console.log(dataDishDate);
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
  const testTableWaiters = [
    { waiter_id: 1, waiter_name: "Maciej" },
    { waiter_id: 2, waiter_name: "Zysio" },
    { waiter_id: 3, waiter_name: "Guzio" },
    { waiter_id: 4, waiter_name: "Buzio" },
    { waiter_id: 5, waiter_name: "Kazio" },
  ];

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
                <ManagerDateRange></ManagerDateRange>
                <BarSoldMealsForDate data={dataDishDate} keys={dataNames} />
              </BoxItem>
              <BoxItem>
                <ManagerDateRange></ManagerDateRange>
                <BarWaitersEarnings data={dataWaiter} keys={testTableWaiters} />
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
