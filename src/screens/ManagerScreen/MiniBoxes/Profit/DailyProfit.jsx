import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function DailyProfit({ data }) {
  const [dataOrder, setDataOrder] = useState({ waiting: [], in_progress: [] });

  useEffect(() => {
    setDataOrder(data);
  }, [dataOrder]);

  return <div>DailyProfit</div>;
}
