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
    console.log("***dataChosse***");
    console.log("data --RANGE--");
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
                <BarMagazineStock
                  data={{
                    products: [
                      {
                        id: 1,
                        name: "beef_meat",
                        quantity: 10.0,
                        good_stock_value: 30,
                      },
                      {
                        id: 2,
                        name: "chesse",
                        quantity: 0.5,
                        good_stock_value: 5,
                      },
                      {
                        id: 3,
                        name: "Becon",
                        quantity: 0.5,
                        good_stock_value: 5,
                      },
                      {
                        id: 4,
                        name: "Cabage",
                        quantity: 0.5,
                        good_stock_value: 5,
                      },
                      {
                        id: 5,
                        name: "Watter",
                        quantity: 0.5,
                        good_stock_value: 5,
                      },
                      {
                        id: 6,
                        name: "Cola",
                        quantity: 0.5,
                        good_stock_value: 5,
                      },
                    ],
                  }}
                />
              </BoxItem>
              {/*
              <BoxItem>
                <BoxTitle>Waiters Logged In/Out: </BoxTitle>
                <WaitersLoggedIn
                  data={{
                    logged_in_waiters: [
                      { id: 1, waiter_name: "Przemo" },
                      { id: 2, waiter_name: "Maciej" },
                    ],
                    logged_out_waiters: [
                      { id: 3, waiter_name: "Aleksandra" },
                      { id: 4, waiter_name: "Kara" },
                    ],
                  }}
                />
              </BoxItem>
              <BoxItem>
                <BoxTitle>Daily Profit:</BoxTitle>
                <ManagerDateRange></ManagerDateRange>
                <DailyProfit
                  data={{
                    dates: [
                      { date: "2023-09-20", profit: 5003 },
                      { date: "2023-09-21", profit: 5401 },
                      { date: "2023-09-22", profit: 6020 },
                      { date: "2023-09-23", profit: 4550 },
                      { date: "2023-09-24", profit: 4060 },
                      { date: "2023-09-25", profit: 0 },
                      { date: "2023-09-26", profit: 5301 },
                      { date: "2023-09-27", profit: 5001 },
                      { date: "2023-09-28", profit: 5501 },
                      { date: "2023-09-29", profit: 6401 },
                      { date: "2023-09-30", profit: 4401 },
                    ],
                  }}
                />
              </BoxItem>
              */}
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
