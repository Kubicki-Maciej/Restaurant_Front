import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Slider = styled.input`
  /* -webkit-appearance: none; */
  height: 7px;
  background: grey;
  border-radius: 5px;
  background-image: linear-gradient(#d46a6a, #d46a6a);
  background-repeat: no-repeat;
  margin-top: 5px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #d46a6a;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  ::-webkit-slider-thumb:hover {
    box-shadow: #d46a6a50 0px 0px 0px 8px;
  }

  ::-webkit-slider-thumb:active {
    box-shadow: #d46a6a50 0px 0px 0px 11px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export default function DateSlider({
  dateList,
  sliderDates,
  sliderPickedDateRange,
  setSliderDateRange,
}) {
  // elements that return scoped dates
  // -2 0 +2

  const MAX = 10;
  const [listDates, setListDates] = useState([]);
  const [value, setValue] = useState(0);

  const [pickedDates, setPickedDates] = useState([]);
  const [maxSliderValue, setMaxSliderValue] = useState(0);

  useEffect(() => {
    setListDates(dateList);
    console.log(value);
    setMaxSliderValue(dateList.length - 5);

    setSliderDateRange(pickedDates);
  }, [listDates, dateList]);

  useEffect(() => {
    setPickedDates(returnIndexPickedBySlider(listDates, value));
  }, [value]);

  function returnIndexPickedBySlider(listObject, value) {
    const tempList = [
      listObject.at(Number(value)),
      listObject.at(Number(value) + 1),
      listObject.at(Number(value) + 2),
      listObject.at(Number(value) + 3),
      listObject.at(Number(value) + 4),
    ];
    console.log(tempList);
    return tempList;
  }

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX}% 100%` };
  };

  if (dateList.length > 6) {
    return (
      <Slider
        type="range"
        min={0}
        max={maxSliderValue}
        onChange={(e) => {
          setValue(e.target.value);

          console.log(pickedDates);
        }}
        style={getBackgroundSize()}
        value={value}
      ></Slider>
    );
  } else {
    return "";
  }
}
