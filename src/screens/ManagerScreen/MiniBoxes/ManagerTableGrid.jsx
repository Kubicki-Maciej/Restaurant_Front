import React from "react";
import { useState, useEffect } from "react";

// style
import { BoxContainer, BoxItem, BoxTitle } from "./style/BoxStyle";
// data chart test
import TestDataOrders from "../TestData/TestData";
import TestDataWaiters from "../TestData/TestDataWaiters";
// box bar components
import ManagerDateRange from "./ManagerDateRange";
// minibox components
import BarChart from "./Charts/BarChart";
import BarSoldMealsForDate from "./Charts/BarSoldMealsForDate";
import BarWaitersEarnings from "./Charts/WaitersEarnings";
import MiniOrder from "./CurrentWaitersOrders/MiniOrder";
import MiniOrderBoard from "./CurrentKitchenOrders/MiniOrderBoard";
import WaitersLoggedIn from "./CurrentWaitersOrders/WaitersLoggedIn";
import BarMagazineStock from "./Charts/BarMagazineStock";
import DailyProfit from "./Profit/DailyProfit";

export default function ManagerTableGrid() {
  const [data, setData] = useState([]);
  const [dataFirst, setDataFirst] = useState({ id: "", waiter_id: "" });
  const [loading, setLoading] = useState(false);
  const [dataDish, setDataDish] = useState({});
  const [dataDishDate, setDataDishDate] = useState({});
  const [dishLoaded, setDishLoaded] = useState(false);
  const [dataNames, setDataNames] = useState([]);

  const [dataWaiter, setDataWaiter] = useState([]);

  // BarSoldMealsForDate states
  const [datePickedSoldMeals, setDatePickedSoldMeals] = useState(["test"]);
  const [dateRangePickedSoldMeals, setDateRangePickedSoldMeals] = useState([]);
  const [dateStartSoldMealsForDate, setStartSoldMealsForDate] = useState(1);
  const [dateEndSoldMealsForDate, setEndSoldMealsForDate] = useState(1);

  function changeDatePickedSoldMeals(data) {
    setDatePickedSoldMeals(data);
  }
  function changeRangePickedSoldMeals(data) {
    setDateRangePickedSoldMeals(data);
  }
  //BarWaitersEarnings states
  const [sliderDateRangeWaitersEarning, setSliderDateRangeWaitersEarning] =
    useState([]);
  const [sliderDatePickedWaitersEarning, setSliderDatePickedWaitersEarning] =
    useState([]);

  function changeRangeWaitersEarning(data) {
    setSliderDateRangeWaitersEarning(data);
  }
  function changeDateWaiterEarning(data) {
    console.log(data);
    setSliderDatePickedWaitersEarning(data);
  }

  function changeDateStartEndForSoldMealsForDate(dateStart, dateEnd) {
    // console.log("data --RANGE--");
    // console.log(data);
    setStartSoldMealsForDate(dateStart);
    setEndSoldMealsForDate(dateEnd);
  }

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
    // { waiter_id: 3, waiter_name: "Guzio" },
    // { waiter_id: 4, waiter_name: "Buzio" },
    // { waiter_id: 5, waiter_name: "Kazio" },
    // { waiter_id: 5, waiter_name: "Kazio" },
  ];

  return (
    <div>
      {loading ? (
        <div>
          {dishLoaded ? (
            <BoxContainer>
              <BoxItem>
                <ManagerDateRange
                  setRangeDateState={changeRangePickedSoldMeals}
                  setPickedDates={changeDatePickedSoldMeals}
                  disablePicker={true}
                />
                <BarSoldMealsForDate
                  dataRange={dateRangePickedSoldMeals}
                  dataChosse={datePickedSoldMeals}
                  dateStart={dateStartSoldMealsForDate}
                  dateEnd={dateEndSoldMealsForDate}
                />
              </BoxItem>
              <BoxItem>
                <ManagerDateRange
                  setRangeDateState={changeRangeWaitersEarning}
                  setPickedDates={changeDateWaiterEarning}
                  disablePicker={false}
                ></ManagerDateRange>
                <BarWaitersEarnings
                  dataChosse={sliderDateRangeWaitersEarning}
                />
              </BoxItem>

              <BoxItem>
                <BoxTitle>Active Orders:</BoxTitle>
                <MiniOrder />
              </BoxItem>

              <BoxItem>
                <BoxTitle>Kitchen Orders:</BoxTitle>
                <MiniOrderBoard />
              </BoxItem>

              <BoxItem>
                <BoxTitle>Magazine Stock:</BoxTitle>
                <BarMagazineStock />
              </BoxItem>

              <BoxItem>
                <BoxTitle>Waiters Logged In/Out: </BoxTitle>
                <WaitersLoggedIn />
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
