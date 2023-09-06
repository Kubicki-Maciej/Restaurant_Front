import React from "react";
// import { ButtonWaiter, TextButtonWaiter } from "./Menu/style/ButtonWaiter";
import { ButtonWaiter, TextButtonWaiter } from "./style/ButtonWaiter";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../../actions/waiterAppAction";
import Popup from "reactjs-popup";
import PopoutItemWindow from "./PopOutItemWindow";

export default function ItemButton({ itemObject }) {
  console.log("obiekt category button");
  const itemObj = itemObject;
  const dispatch = useDispatch();

  // console.log(categoryObj);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const categorySelection = useSelector(state=>state.waiterOrder)

  function handleClick() {
    console.log(itemObj);
    console.log("add to order zrwerer etc ");
    dispatch(
      addProduct({
        id: itemObj.meal_id,
        meal_name: itemObj.meal_name,
        number_of_meals: 1,
      })
    );
  }

  return (
    <Popup
      trigger={
        <ButtonWaiter className="modal" onClick={handleClick}>
          <TextButtonWaiter>{itemObj.meal_name}</TextButtonWaiter>
        </ButtonWaiter>
      }
      modal
      nested
    >
      <PopoutItemWindow item={itemObj}> {itemObj.meal_name}</PopoutItemWindow>
    </Popup>
  );
}
