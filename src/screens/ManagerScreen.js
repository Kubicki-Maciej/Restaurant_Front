import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainManagerScreen from "./ManagerScreen/MainManagerScreen";

export default function ManagerScreen() {
  const navigate = useNavigate();
  const dataUserStatus = useSelector((state) => state.userLogin);

  if (dataUserStatus) {
    return <MainManagerScreen />;
  } else {
    navigate("../login/", { replace: true });
  }
}
