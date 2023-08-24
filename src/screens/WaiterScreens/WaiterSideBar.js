import React from 'react'

import { Link } from "react-router-dom";
import styled from "styled-components";


const SideBar = styled.div`
        
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 15rem;
    margin-right: 1rem;
    height: 100%;
    background-color: #f8f9fa;
    padding: 0.5rem;
    
`
const MenuItem = styled.div`
    display: flex;
    width: 15rem;
    height: 8rem;
    align-items: center;
    justify-content: center;
    border: 1px black solid;    
`



// mobile is bottom bar
const Item = ({title, to, icon, selected , setSelected}) =>{
    return(
        <Link to={to}>
            <MenuItem>
               <p>{title}</p>
            </MenuItem>
        </Link>
    )
}


export default function WaiterSideBar() {   

  return (
    <div>
        <SideBar>
            <Item to={'./orders'} title={'Orders'} />
        </SideBar>
    </div>
  )
}
