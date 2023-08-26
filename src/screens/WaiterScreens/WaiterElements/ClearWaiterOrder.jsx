import React from "react";
import { useDispatch } from "react-redux";

import {
  cleanWaiterOrder,
  cleanWaiterOrderSelected,
} from "../../../actions/waiterAppAction";

export default function ClearWaiterOrder() {
  const dispatch = useDispatch();
  dispatch(cleanWaiterOrder());
  dispatch(cleanWaiterOrderSelected());
}
