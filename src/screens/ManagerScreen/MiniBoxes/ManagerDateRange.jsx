import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";

import styled from "styled-components";
import DatePickerComponent from "./DatePicker/DatePickerComponent";
import DateSlider from "./DatePicker/DateSlider";

const DateBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DateAndSliderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default function ManagerDateRange() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [diffranceInDays, setDiffranceInDays] = useState(0);
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    console.log(startDate);
    console.log(endDate);

    timeDelta(startDate, endDate);
  }, [startDate, endDate, diffranceInDays]);

  function timeDelta(timeA, timeB) {
    let differenceInTime = timeB.getTime() - timeA.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    setDiffranceInDays(Math.round(differenceInDays));
    setSlider(Math.round(differenceInDays));
  }

  return (
    <DateAndSliderBox>
      <DateBox>
        <div>
          <DatePickerComponent date={startDate} setDate={setStartDate} />
        </div>
        <div>time: {diffranceInDays}</div>
        <div>
          <DatePickerComponent date={endDate} setDate={setEndDate} />
        </div>
      </DateBox>
      <DateSlider slider={slider} />
    </DateAndSliderBox>
  );
}
