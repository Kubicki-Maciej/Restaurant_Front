import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addProduct } from '../../actions/waiterAppAction';
// Actions
import { incrementFood, decrementFood } from '../../actions/waiterAppAction';
// style
import { WindowPopOut , ButtonIncrement, IncrementDiv, MealName, ComentSection} from './style/PopoutItemWindowStyle';


export default function PopoutItemWindow({item}) {
    const [message, setMessage] = useState('')

    const itemObj = item;
    const dispatch = useDispatch()
    const numberOfItems = useSelector(state=> state.numberOfMeals)

    function getCommentValue(e){
        setMessage(e.target.value)        
    }

    function sendToOrder() {
        if(numberOfItems > 0){
            console.log(message);
            dispatch(
                addProduct({"id":itemObj.meal_id, "name":itemObj.meal_name, "number_of_meals":numberOfItems, "comment": message})
                )
        }
    }
    return (
    <WindowPopOut>
        <MealName>{itemObj.meal_name}</MealName>
        <IncrementDiv style={{display:'flex', flexDirection:'row'}}>
                <p>Number of items  </p>
                <ButtonIncrement onClick={()=> dispatch(incrementFood())}>+</ButtonIncrement>
                <p> {numberOfItems} </p>
                <ButtonIncrement onClick={()=> dispatch(decrementFood())}>-</ButtonIncrement>
        </IncrementDiv>
        <ComentSection>Comments : <input id='comment' name='comment' type='text' value={message} onChange={getCommentValue}></input></ComentSection>
      
        <button onClick={sendToOrder}>Add to order</button>        
    </WindowPopOut>
  )
}
