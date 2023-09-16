import React from "react";
import { ResponsiveBar } from "@nivo/bar";
// export default function BarChart({ data, keys }) {
export default function BarChart() {
  const data = [
    {
      country: "AD",
      "hot dog": 138,
      "hot dogColor": "hsl(188, 70%, 50%)",
      burger: 194,
      burgerColor: "hsl(2, 70%, 50%)",
      sandwich: 14,
      sandwichColor: "hsl(275, 70%, 50%)",
      kebab: 86,
      kebabColor: "hsl(157, 70%, 50%)",
      fries: 95,
      friesColor: "hsl(271, 70%, 50%)",
      donut: 191,
      donutColor: "hsl(231, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 123,
      "hot dogColor": "hsl(356, 70%, 50%)",
      burger: 127,
      burgerColor: "hsl(90, 70%, 50%)",
      sandwich: 112,
      sandwichColor: "hsl(211, 70%, 50%)",
      kebab: 6,
      kebabColor: "hsl(45, 70%, 50%)",
      fries: 107,
      friesColor: "hsl(85, 70%, 50%)",
      donut: 47,
      donutColor: "hsl(208, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 183,
      "hot dogColor": "hsl(77, 70%, 50%)",
      burger: 38,
      burgerColor: "hsl(59, 70%, 50%)",
      sandwich: 87,
      sandwichColor: "hsl(55, 70%, 50%)",
      kebab: 50,
      kebabColor: "hsl(253, 70%, 50%)",
      fries: 19,
      friesColor: "hsl(189, 70%, 50%)",
      donut: 54,
      donutColor: "hsl(145, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 108,
      "hot dogColor": "hsl(8, 70%, 50%)",
      burger: 15,
      burgerColor: "hsl(48, 70%, 50%)",
      sandwich: 15,
      sandwichColor: "hsl(250, 70%, 50%)",
      kebab: 4,
      kebabColor: "hsl(58, 70%, 50%)",
      fries: 112,
      friesColor: "hsl(136, 70%, 50%)",
      donut: 124,
      donutColor: "hsl(56, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 164,
      "hot dogColor": "hsl(180, 70%, 50%)",
      burger: 20,
      burgerColor: "hsl(240, 70%, 50%)",
      sandwich: 115,
      sandwichColor: "hsl(246, 70%, 50%)",
      kebab: 157,
      kebabColor: "hsl(143, 70%, 50%)",
      fries: 53,
      friesColor: "hsl(101, 70%, 50%)",
      donut: 118,
      donutColor: "hsl(281, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 54,
      "hot dogColor": "hsl(342, 70%, 50%)",
      burger: 13,
      burgerColor: "hsl(74, 70%, 50%)",
      sandwich: 61,
      sandwichColor: "hsl(257, 70%, 50%)",
      kebab: 69,
      kebabColor: "hsl(55, 70%, 50%)",
      fries: 49,
      friesColor: "hsl(169, 70%, 50%)",
      donut: 106,
      donutColor: "hsl(56, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 188,
      "hot dogColor": "hsl(164, 70%, 50%)",
      burger: 186,
      burgerColor: "hsl(19, 70%, 50%)",
      sandwich: 151,
      sandwichColor: "hsl(299, 70%, 50%)",
      kebab: 143,
      kebabColor: "hsl(258, 70%, 50%)",
      fries: 61,
      friesColor: "hsl(178, 70%, 50%)",
      donut: 199,
      donutColor: "hsl(351, 70%, 50%)",
    },
  ];
  function reorderData() {
    return 1;
  }

  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
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
        legend: "country",
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
}
