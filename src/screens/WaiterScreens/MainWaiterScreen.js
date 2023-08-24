import React from 'react'
import WaiterSideBar from './WaiterSideBar'
import { Route, Routes } from 'react-router-dom'
import ActiveOrderScreen from './ActiveOrderScreen'

import styled from "styled-components";

const MainScreen =styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
const AppScreen = styled.div`
  display: flex; 
  height: auto;
  padding-left: 16rem;
  background-color: grey;
  height: 100vh;
`
function WaiterScreens() {


  return (
    <MainScreen>
        <AppScreen>
          <WaiterSideBar/>
          <main className='content'>
            <Routes>
                <Route
                 path='orders' 
                 element={<ActiveOrderScreen />} 
                />
            </Routes>
            </main>
        </AppScreen>
    </MainScreen>
  )
}

export default WaiterScreens