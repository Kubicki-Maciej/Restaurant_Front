import React from 'react'
import { useState, useEffect } from 'react';

import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import CategoryButton from './CategoryButton';
import ItemButton from './ItemButton';
import Navbar from '../Navbar/Navbar';
import { ScreenMain, ScreenMenu } from './style/mainPageWaiterStyle';
import { ButtonWaiter, TextButtonWaiter } from './style/ButtonWaiter';

// for dispatch to menu
import { goBackToMenu } from '../../actions/waiterAppAction';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});


export default function MainPageWaiter() {
  const orderData = useSelector(state=>state.waiterOrder)
  const categorySelection = useSelector(state=>state.waiterCategory)
  const dispatch = useDispatch();

  // const userData = useSelector(state=>state.user)
  const [categoryData ,setCategoryData]= useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [screenMenu, setScreenMenu] = useState(false)
  const [order, setOrder] = useState ([])
  const [user, setUser] = useState([])

  const fetchData = async () =>{
    try{
      const response = await client.get('meals/all_category');
      setCategoryData(response.data);
      console.log(response.data);
      setLoading(false)
      setLoad(true)
    } catch(error){
      setError(error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])
  console.log(categoryData);


  if(load){
    return(
      <ScreenMain>
        <Navbar/>
        {screenMenu ? console.log('zalogowany') : console.log(' niezalogowany')}
        {categorySelection.category_selected ? 
        <ScreenMenu>
            <ButtonWaiter onClick={()=>dispatch(goBackToMenu())}><TextButtonWaiter>Back to menu</TextButtonWaiter></ButtonWaiter>
            {categorySelection['category_food_element']['all_meal_in_category'].map((item)=>(
              <ItemButton  itemObject={item}/>
            ))}
        </ScreenMenu>
        : 
        <ScreenMenu>
        {categoryData.map((category, index)=>(
          <CategoryButton  categoryObject={category}/>
        ))}
        </ScreenMenu>     
        }
       
      </ScreenMain>
    )
  }
  return (
    <div>
      <Navbar/>
    
      <div>
        wczytuje date 
      </div>
    </div>

  )
}
