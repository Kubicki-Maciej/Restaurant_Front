import React from "react";
import { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function BarWaitersEarnings({ dataChosse }) {
  // DATA = [...{WaierName:Name, Waiter:1, WaiterOrderCost}]
  // takes food data from x day and present it on charts
  let dataEarnings = [];

  const [dataBars, setDataBars] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [waiterData, setWaiterData] = useState([
    {
      waiter_name: "waiterone",
      total_remuneration: 0,
      number_of_orders: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getWaiterEarningByDateRange() {
    console.log("TRY TO GET DATA CHOOSEE");
    // console.log("TRY TO GET DATA CHOOSEE");
    // console.log(dataChosse);

    let dataPostRange = {
      startDate: dataChosse[0],
      dateEnd: dataChosse[1],
    };

    client
      .post(`/dashboard/a`, dataPostRange)
      .then((actualData) => {
        setWaiterData(reformatData(actualData));
        dataEarnings = actualData.data["waiter_earnings"];
      })
      .catch((err) => {
        setError(err.message);
        setWaiterData(null);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  useEffect(() => {
    getWaiterEarningByDateRange();
    console.log("zmiana datachoosee");
  }, [dataChosse[0], dataChosse[1]]);

  useEffect(() => {
    console.log("waiterData");
    console.log(waiterData);
    setLoaded(true);
  }, [waiterData]);

  function reformatData(data) {
    console.log("waiterData.waiter_earnings");
    console.log(data.data["waiter_earnings"]);
    return data.data["waiter_earnings"];
  }

  function reformatKeys() {
    return ["total_remuneration", "number_of_orders"];
  }

  if (loading) {
    if (loaded) {
      return (
        <ResponsiveBar
          // data={dataEarnings}
          data={waiterData}
          keys={reformatKeys()}
          indexBy="waiter_name"
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
            legend: "Waiters",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Money / Number of Receipt",
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
      return <div>Data Load Fail</div>;
    }
  } else {
    return <div>Data Procesing</div>;
  }
}
