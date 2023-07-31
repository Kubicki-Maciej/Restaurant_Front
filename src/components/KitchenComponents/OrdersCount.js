import React from 'react'
import MealCounter from './MealCounter';
import styled from "styled-components";
import "./style/scroll.css"

const WindowWraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: aliceblue;
    border: 1px grey solid;
    padding: 4px 4px 4px 4px;
    margin-top: 10px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const SingleWindow = styled.div`
  border: 1px grey solid;
  margin: auto;
`


export default function OrderCount({waitingOrders, inProgressOrders}) {
  const dataWaiting =waitingOrders
  const dataProgress =inProgressOrders
  
  return (
    <WindowWraper className='column' >
      <SingleWindow>
        IN_PROGRESS ORDERS
        <MealCounter data={dataProgress}/>
      </SingleWindow>
      <SingleWindow>
        WAITING ORDERS
        <MealCounter data={dataWaiting}/>
      </SingleWindow>
    </WindowWraper>
  )
}
