import React from "react";
import { useState, useEffect } from "react";
import TestDataOrders from "../TestData/TestData";

export default function ManagerTableGrid() {
  const [data, setData] = useState([]);
  const [dataFirst, setDataFirst] = useState([]);
  //   const data = TestDataOrders;

  useEffect(() => {
    setData(TestDataOrders);
    setDataFirst(data[0]);
    console.log(dataFirst);
    console.log("dataFirst[meals_ordered]");
    console.log(dataFirst["meals_ordered"][0]["meal"]["meal_name"]);
  }, [data, dataFirst]);

  return (
    <div>
      GRID
      {dataFirst ? (
        <div>
          <p>id:{dataFirst["id"]}</p>
          <p>{dataFirst["waiter_id"]}</p>
          <p>{dataFirst["meals_ordered"][0]["meal"]["meal_name"]}</p>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
