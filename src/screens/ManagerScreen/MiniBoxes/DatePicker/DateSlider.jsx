import React from "react";
import { useState } from "react";
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

export default function DateSlider({ slider, setSlider }) {
  // elements that return scoped dates
  // -2 0 +2

  const MAX = 10;
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX}% 100%` };
  };

  //   if (slider >= 5) {
  //     <Slider
  //       min="0"
  //       max={MAX}
  //       onChange={(e) => setValue(e.target.value)}
  //       style={getBackgroundSize()}
  //       value={value}
  //     />;
  //   } else {
  //     <Slider
  //       min="0"
  //       max={MAX}
  //       onChange={(e) => setValue(e.target.value)}
  //       style={getBackgroundSize()}
  //       value={value}
  //     />;
  //   }
  return (
    <Slider
      type="range"
      min="0"
      max={MAX}
      onChange={(e) => setValue(e.target.value)}
      style={getBackgroundSize()}
      value={value}
    ></Slider>
  );
}
