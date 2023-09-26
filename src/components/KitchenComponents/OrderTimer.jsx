import React from "react";
import { useState, useEffect } from "react";

export default function OrderTimer({ startDate }) {
  const [time, setTime] = useState(new Date());
  const [strDateValue, setStrDateValue] = useState(`${startDate}`);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  let diffTime = Math.abs(
    new Date().valueOf() - new Date(strDateValue).valueOf()
  );
  let days = diffTime / (24 * 60 * 60 * 1000);
  let hours = (days % 1) * 24;
  let minutes = (hours % 1) * 60;
  let secs = (minutes % 1) * 60;
  [days, hours, minutes, secs] = [
    Math.floor(days),
    Math.floor(hours),
    Math.floor(minutes),
    Math.floor(secs),
  ];

  return (
    <div>
      <h5>
        {hours}:{minutes}:{secs}
      </h5>
    </div>
  );
}
