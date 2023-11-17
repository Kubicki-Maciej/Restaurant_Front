import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

export default function DatePickerComponent({ date, setDate, functionDate }) {
  const [pickedDate, setPickedDate] = useState(new Date());

  // useEffect(() => {
  //   console.log("test date");
  //   console.log(pickedDate);
  //   setDate(date);
  // }, [pickedDate]);

  // function onDateChange(date){

  // }

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(selectedDate) => setDate(selectedDate)}
      />
    </div>
  );
}
