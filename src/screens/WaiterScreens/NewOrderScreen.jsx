import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClearWaiterOrder from "./WaiterElements/ClearWaiterOrder";
import { useNavigate } from "react-router-dom";
import MenuScreen from "./MenuScreen";

export default function NewOrderScreen({ client }) {
  const [isSelectedItemsInMenu, setisSelectedItemsInMenu] = useState(false);
  const [isCleared, setIsCleared] = useState(false);
  // const []

  const waiterOrderSelected = useSelector((state) => state.waiterOrderSelected);
  const waiterOrder = useSelector((state) => state.waiterOrder);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isOrderActive();
    if (isSelectedItemsInMenu) {
    }
  }, [isSelectedItemsInMenu]);


  if (isCleared) {
    console.log("SHOULD RUN");
    setIsCleared(ClearWaiterOrder());
    setIsCleared(false);
    navigate("../menu");
  }

  async function goToMenu() {
    navigate("../menu");
  }

  function isOrderActive() {
    if (waiterOrderSelected.exsist) {
      setisSelectedItemsInMenu(true);
      console.log(isSelectedItemsInMenu);
    }
  }

  if (isSelectedItemsInMenu) {
    return (
      <div>
        <h2>Is current order selected do you want create new one </h2>
        <div>
          <button onClick={() => navigate("../menu")}>No</button>
          <button onClick={() => setIsCleared(true)}>Yes</button>
        </div>
      </div>
    );
  } else {
    return <MenuScreen client={client} />;
  }
}
