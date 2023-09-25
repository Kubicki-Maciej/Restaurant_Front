import React from "react";
import { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

export default function DailyProfit({ data, datePicked }) {
  const [loaded, setLoaded] = useState(false);
  const [dataBars, setDataBars] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    setDataBars(data.dates);
    console.log(dataBars);
    setKeys([]);

    setLoaded(true);
  }, [loaded]);

  function profitKey() {
    return ["profit"];
  }

  function reformatProfitData() {
    return [
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
    ];
  }
  function selectDatesPickedByManagerDateRange() {
    const dateStart = 0;
    const dateEnd = 0;
  }

  if (loaded) {
    return (
      <ResponsiveBar
        data={dataBars}
        keys={profitKey()}
        indexBy="date"
        groupMode="grouped"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
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
          legend: "Date",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Profit",
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
    return <div>Loading</div>;
  }
}
