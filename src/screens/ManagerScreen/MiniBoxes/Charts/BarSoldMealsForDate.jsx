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

export default function BarSoldMealsForDate({
  dataRange,
  dataChosse,
  dataRangeChanged,
  dateStart,
  dateEmd,
}) {
  // takes food data from x day and present it on charts
  const [keys, setKeys] = useState([]);
  const [dataBars, setDataBars] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataSoldDish, setDataSoldDish] = useState([]);
  const [dataPickedSoldDish, setPickedDataSoldDish] = useState([]);
  const [error, setError] = useState(null);

  async function getSoldDishData() {
    console.log("ping data");
    let dataPostRange = {
      startDate: dataRange[0],
      dateEnd: dataRange[1],
    };

    client
      .post(`/dashboard/t`, dataPostRange)
      .then((actualData) => {
        // DATA RANGE POST always send 5 dates current and -4 days in post
        // 2) that should restart if ManagerDateSlider is changed value 1 and 2
        setDataSoldDish(dataConverter(actualData.data["dates"]));
        setKeys(actualData.data["names"]);
      })
      .catch((err) => {
        setError(err.message);
        setDataSoldDish(null);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  useEffect(() => {
    console.log("refresh data");
    getSoldDishData();
    setLoaded(true);
  }, [dataRange[0], dataRange[1]]);

  useEffect(() => {
    // console.log("dataRange");
    // console.log(dataRange);
    // console.log("zmiana dataChosse");
    console.log(dataChosse);
    setPickedDataSoldDish();
    getPickedData(dataChosse);

    // dataChosse zwraca element listy
  }, [dataChosse]);

  function colorFillChanger() {}

  function colorPicker() {}

  function getPickedData(dataChosse) {
    // if length between two dates is lower then 5 just give last 5 elements
    //

    // is value in DateSlider.jsx
    const pickedRangeObjects = [
      dataSoldDish.at(Number(dataChosse)),
      dataSoldDish.at(Number(dataChosse) + 1),
      dataSoldDish.at(Number(dataChosse) + 2),
      dataSoldDish.at(Number(dataChosse) + 3),
      dataSoldDish.at(Number(dataChosse) + 4),
    ];

    console.log(pickedRangeObjects);

    return pickedRangeObjects;
  }

  function dataConverter(dataInput) {
    const objectList = [];

    dataInput.forEach((key, meal_object) => {});
    Object.entries(dataInput).map(([keyDate, valueDate]) => {
      const tempObject = {
        date: Object.keys(valueDate)[0],
        // date: Object.keys(valueDate)[0].substring(5),
      };
      if (Object.keys(valueDate).length === 0) {
      } else {
        // valueDate;
      }

      Object.entries(valueDate).map(([key, valueMeal]) => {
        const mealLenght = Object.keys(valueMeal);
        mealLenght.forEach((meal) => {
          tempObject[meal] = valueMeal[meal];
        });
      });
      objectList.push(tempObject);
    });
    // console.log(objectList);
    return objectList;
  }

  if (loading) {
    return (
      <ResponsiveBar
        data={getPickedData(dataChosse)}
        // data={dataSoldDish}
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
