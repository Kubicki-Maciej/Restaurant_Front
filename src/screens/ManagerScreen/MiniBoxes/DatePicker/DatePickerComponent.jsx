import React from "react";
// import { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export default function DatePickerComponent({ date, setDate, functionDate }) {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(selectedDate) => setDate(selectedDate)}
      />
    </div>
  );
}
