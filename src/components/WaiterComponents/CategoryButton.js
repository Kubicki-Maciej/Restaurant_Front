import React from 'react'
import { ButtonWaiter, TextButtonWaiter } from './style/ButtonWaiter';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { goToCategory } from '../../actions/waiterAppAction';


export default function CategoryButton({categoryObject}) {
    console.log('obiekt category button');
    const categoryObj = categoryObject
  
    // console.log(categoryObj);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const categorySelection = useSelector(state=>state.waiterOrder)
    
    function handleClick() {
        console.log(`click`);
        console.log(`${categoryObj.category_name}`);
        localStorage.setItem('myOrderData', {"Kategoria" : categoryObj.category_name});
        // navigate(`${categoryObj.category_name}`);
        console.log(categoryObj['all_meal_in_category'])
        dispatch(goToCategory(categoryObj))
      }
    
    return (
    <ButtonWaiter onClick={handleClick}>
        <TextButtonWaiter >{categoryObj.category_name}</TextButtonWaiter> 
    </ButtonWaiter>
    )
}


