import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const NavBar = styled.div`
    
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
`;

const NavBarItem = styled.div`
    margin-bottom: 10px;
    border: solid black 1px;
`

const NavBarLink = styled.div`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-align: center;
`

const HeaderNavBar = styled.h1`
    border: solid black 1px;
    text-align: center;

`
const NavBarWraper = styled.div`

`


export default function Navbar() {
    
    const data = localStorage.getItem('myOrderData');
    function getData(){
        console.log(data);
    }
    return (
    <NavBar>
        <HeaderNavBar>NAV BAR</HeaderNavBar>
        <NavBarWraper>
            <NavBarItem onClick={getData}>
                {/* geting in  screen menu list with active orders after clicking order u got same thing as create new order */}
                <NavBarLink>Active Orders</NavBarLink>
            </NavBarItem>
            <NavBarItem>
                <NavBarLink>New Order</NavBarLink>
            </NavBarItem>
            <NavBarItem>
                <NavBarLink>History Order</NavBarLink>
            </NavBarItem>
            <NavBarItem>
                {/* order list is when u create new order here lands all items */}
                <NavBarLink>Order List</NavBarLink>
            </NavBarItem>
        </NavBarWraper>
    </NavBar>
    )
}
