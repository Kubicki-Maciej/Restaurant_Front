import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClearWaiterOrder from "./WaiterElements/ClearWaiterOrder";
import { useNavigate } from "react-router-dom";

export default function NewOrderScreen({ client }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isCleared, setIsCleared] = useState(false);

  const waiterOrderSelected = useSelector((state) => state.waiterOrderSelected);
  const waiterOrder = useSelector((state) => state.waiterOrder);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isOrderActive();
  }, [isSelected]);
  //   useEffect;

  if (isCleared) {
    console.log("SHOULD RUN");
    setIsCleared(ClearWaiterOrder());
    setIsCleared(false);
    navigate("../menu");
  }

  // if order is selected or last order isn't submited ask if u sure to createnew order
  function isOrderActive() {
    if (waiterOrderSelected.exsist) {
      setIsSelected(true);
      console.log(isSelected);
    }
  }

  if (isSelected) {
    return (
      // maybe do it in popout ? or just center this ?
      <div>
        <h2>Is current order selected do you want create new one </h2>
        <div>
          <button onClick={() => navigate("../menu")}>No</button>
          <button onClick={() => setIsCleared(true)}>Yes</button>
        </div>
      </div>
    );
  } else {
    return <div> return to menu</div>;
  }
}
