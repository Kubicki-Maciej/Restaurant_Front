import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import WaiterScreens from "./WaiterScreens/MainWaiterScreen";

export default function WaiterScreen() {
  const navigate = useNavigate();
  const dataUserStatus = useSelector((state) => state.userLogin);

  if (dataUserStatus) {
    return <WaiterScreens />;
  } else {
    navigate("../login/", { replace: true });
  }
}
