import React from "react";
import { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function BarSoldMealsForDate({ data, key, data_chosse }) {
  // takes food data from x day and present it on charts
  const [keys, setKeys] = useState([]);
  const [dataBars, setDataBars] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataSoldDish, setDataSoldDish] = useState([]);
  const [error, setError] = useState(null);

  async function getSoldDishData() {
    client
      .get(`/dashboard/t`)
      .then((actualData) => {
        setDataSoldDish(actualData.data);
        console.log("actualData");
        console.log(actualData.data);
        console.log(dataConverter(actualData.data));
      })
      .catch((err) => {
        setError(err.message);
        setDataSoldDish(null);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  async function getDishNames() {
    client
      .get(`/dashboard/dishnames`)
      .then()
      .catch((err) => {
        setError(err.message);
      });
  }

  useEffect(() => {
    getSoldDishData();
    setDataBars(dataConverter(data));

    setKeys([
      "Fries",
      "Burger",
      "Chiken Burger",
      "Yorkshire Pudding",
      "Fish and Chips",
      "English Pancakes",
      "Shepherds Pie",
      "Black Pudding",
      "Trifle",
      "Full English Breakfas",
      "Toad in thes",
    ]);
    setLoaded(true);
  }, [loaded]);

  function colorFillChanger() {}

  function colorPicker() {}

  function dataConverter(dataInput) {
    // data looks like     {
    //       "2023-10-18": {
    //         "Fries": 3,
    //         "Burger": 7,
    //         "Chiken Burger": 1
    //     }
    // },
    // modify data converter to return good values

    // convert data and sort by data
    const objectList = [];
    console.log(dataInput);
    console.log("zaczyna dzialac data converter");
    Object.entries(dataInput).map(([date, value]) => {
      if (Object.keys(value).length === 0) {
        console.log("pustyyyy obiekt");
      } else {
        let listOfMealNames = [];
        let listOfNumberOfMealsOrdered = [];

        Object.entries(value).map(([name, number]) => {
          listOfMealNames.push(name);
          listOfNumberOfMealsOrdered.push(number);
        });

        let tempObject = {
          // date: new Date(Date.parse(date)),
          date: date,
        };
        for (let i = 0; i < listOfMealNames.length; i++) {
          tempObject[listOfMealNames[i]] = listOfNumberOfMealsOrdered[i];
        }
        objectList.push(tempObject);
      }
    });

    const compareByDate = (a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    };

    objectList.sort(compareByDate);
    // create component that return selected data
    return objectList.slice(0, 5);
  }

  if (loading) {
    return (
      <ResponsiveBar
        data={dataSoldDish}
        keys={keys}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        // defs={[
        //   {
        //     id: "dots",
        //     type: "patternDots",
        //     background: "inherit",
        //     color: "#38bcb2",
        //     size: 4,
        //     padding: 1,
        //     stagger: true,
        //   },
        //   {
        //     id: "lines",
        //     type: "patternLines",
        //     background: "inherit",
        //     color: "#eed312",
        //     rotation: -45,
        //     lineWidth: 6,
        //     spacing: 10,
        //   },
        // ]}
        // fill={[
        //   {
        //     match: {
        //       id: "English Pancakes",
        //     },
        //     id: "dots",
        //   },
        //   {
        //     match: {
        //       id: "sandwich",
        //     },
        //     id: "lines",
        //   },
        // ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "date",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    );
  } else {
    return <div>Data Procesing</div>;
  }
}
