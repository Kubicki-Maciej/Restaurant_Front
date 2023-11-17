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

export default function ManagerDateRange({
  setRangeDateState,
  setPickedDates,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [diffranceInDays, setDiffranceInDays] = useState(0);
  const [listOfPickedDates, setListOfPickedDates] = useState([]);
  const [currentSliderPickedDates, setCurrentSliderPickedDates] = useState([]);
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    timeDelta(startDate, endDate);
    console.log("wyliczenie delty");
    setListOfPickedDates(createListOfPickedDates(startDate, endDate));

    setRangeDateState([startDate, endDate]);
    console.log("setRangeDateState([startDate, endDate])");

    // setPickedDates(listOfPickedDates);

    console.log(listOfPickedDates);
  }, [startDate, endDate, diffranceInDays]);

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  function timeDelta(timeA, timeB) {
    let differenceInTime = timeB.getTime() - timeA.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    setDiffranceInDays(Math.round(differenceInDays));
    setSlider(Math.round(differenceInDays));
  }

  function createListOfPickedDates(start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= new Date(end + 1);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    arr.push(end);
    return arr;
  }

  function setCrurentSliderDate(date) {
    // currentSliderPickedDates;
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
      <DateSlider
        dateList={listOfPickedDates}
        setSliderDateRange={setPickedDates}
      />
    </DateAndSliderBox>
  );
}
