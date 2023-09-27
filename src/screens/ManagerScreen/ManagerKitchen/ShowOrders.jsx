import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import DatePickerComponent from "../MiniBoxes/DatePicker/DatePickerComponent";

const DateRangeComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export default function ShowOrders({ setSecondElement }) {
  setSecondElement("Orders");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  function getDataFromApi() {
    // call api and get data from date end and current date
  }

  return (
    <DateRangeComponent>
      <DatePickerComponent date={currentDate} setDate={setCurrentDate} />

      <DatePickerComponent date={dateEnd} setDate={setDateEnd} />
      <button>Get dates</button>
      {/* Button to get data from api */}
      {/* DATA GRID */}
    </DateRangeComponent>
  );
}
