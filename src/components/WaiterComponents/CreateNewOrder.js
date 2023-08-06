import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryButton from './CategoryButton';
import Navbar from '../Navbar/Navbar';

import styled from 'styled-components'

const menuSpaceWidth = '1rem'
const menuSizeWidth = '16rem'


const ScreenMain = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* display: flex; */
  /* flex-wrap: row; */
` 

const ScreenMenu = styled.div`
  padding-left: ${menuSizeWidth};
  padding-right: ${menuSpaceWidth};
  padding-top: ${menuSpaceWidth};
  padding-bottom: ${menuSpaceWidth};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});


export default function CreateNewOrder() {
  const [categoryData ,setCategoryData]= useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [screenMenu, setScreenMenu] = useState(false)
  const [order, setOrder] = useState ([])


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


  function handleClick() {
    console.log('bla bla');
  }




  if(load){
    return(
      <ScreenMain>
        <Navbar/>
        {screenMenu ? console.log('zalogowany') : console.log(' niezalogowany')}
        <ScreenMenu>
          {categoryData.map((category, index)=>(
            <CategoryButton onClick={handleClick} categoryObject={category}/>
          ))}
          
        </ScreenMenu>
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
