import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import DatePickerComponent from "../MiniBoxes/DatePicker/DatePickerComponent";

const DateRangeComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export default function ShowOrders() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  return (
    <DateRangeComponent>
      <DatePickerComponent date={currentDate} setDate={setCurrentDate} />

      <DatePickerComponent date={dateEnd} setDate={setDateEnd} />
      {/* Button to get data from api */}
      {/* DATA GRID */}
    </DateRangeComponent>
  );
}
