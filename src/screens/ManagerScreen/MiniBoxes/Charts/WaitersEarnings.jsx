import React from "react";
import { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function BarWaitersEarnings({ data, key }) {
  // DATA = [...{WaierName:Name, Waiter:1, WaiterOrderCost}]
  // takes food data from x day and present it on charts
  const [keys, setKeys] = useState([]);
  const [dataBars, setDataBars] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setDataBars(data);

    setKeys(key);
    setLoaded(true);
  }, [loaded]);

  function reformatData() {
    const dataWithKeys = {};
    const loadedData = dataBars;
    const dataKeys = keys;

    const objectFormatedData = {};
    for (const row of loadedData) {
      const { waiter_id, meals_cost } = row;

      if (!objectFormatedData[waiter_id]) {
        objectFormatedData[waiter_id] = { countOrder: 0, costOrder: 0 };
      }
      objectFormatedData[waiter_id] = {
        countOrder: objectFormatedData[waiter_id].countOrder + 1,
        costOrder: objectFormatedData[waiter_id].costOrder + meals_cost,
      };
    }
    console.log(objectFormatedData);

    const objList = [];
    const testTableWaiters = [
      { waiter_id: 1, waiter_name: "Maciej" },
      { waiter_id: 2, waiter_name: "Zysio" },
      { waiter_id: 3, waiter_name: "Guzio" },
      { waiter_id: 4, waiter_name: "Buzio" },
      { waiter_id: 5, waiter_name: "Kazio" },
    ];
    Object.entries(objectFormatedData).map(([idWaiter, value]) => {
      const tempData = {
        waiterName: testTableWaiters[idWaiter - 1].waiter_name,
        countOrder: value.countOrder,
        totalAccounts: value.costOrder,
      };
      objList.push(tempData);
    });
    console.log(objList);
    return objList;
  }

  function reformatKeys() {
    return ["totalAccounts", "countOrder"];
  }

  if (loaded) {
    return (
      <ResponsiveBar
        data={reformatData()}
        keys={reformatKeys()}
        indexBy="waiterName"
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
    return <div>Data Procesing</div>;
  }
}
