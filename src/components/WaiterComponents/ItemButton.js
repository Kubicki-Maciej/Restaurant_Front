import React from 'react'
import { ButtonWaiter, TextButtonWaiter } from './style/ButtonWaiter';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { addProduct } from '../../actions/waiterAppAction';
import Popup from 'reactjs-popup';

export default function ItemButton({itemObject}) {
    console.log('obiekt category button');
    const itemObj = itemObject
    const dispatch = useDispatch()
  
    // console.log(categoryObj);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const categorySelection = useSelector(state=>state.waiterOrder)
    
    function handleClick() {
        console.log(itemObj);
        console.log('add to order zrwerer etc ');
        dispatch(addProduct({"id":itemObj.meal_id, "name":itemObj.meal_name, "number_of_meals":1}))

      }
    
    return (
    <ButtonWaiter onClick={handleClick}>
        <TextButtonWaiter >{itemObj.meal_name}</TextButtonWaiter> 
    </ButtonWaiter>
    )
}


