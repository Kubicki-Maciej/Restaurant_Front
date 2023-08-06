import React from 'react'
import { ButtonWaiter, TextButtonWaiter } from './style/ButtonWaiter';
import {useNavigate} from 'react-router-dom'

export default function CategoryButton({categoryObject}) {
    console.log('obiekt category button');
    const categoryObj = categoryObject
    // console.log(categoryObj);
    const navigate = useNavigate();


    
    function handleClick() {
        console.log(`click`);
        console.log(`${categoryObj.category_name}`);
        localStorage.setItem('myOrderData', {"Kategoria" : categoryObj.category_name});
        // navigate(`$waiter/{categoryObj.category_name}`);
      }
    
    return (

    <ButtonWaiter onClick={handleClick}>
        <TextButtonWaiter >{categoryObj.category_name}</TextButtonWaiter> 
    </ButtonWaiter>
    )
}


