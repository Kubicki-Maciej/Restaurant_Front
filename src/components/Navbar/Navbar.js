import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

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
const MiniOrder = styled.div`

`
const MiniItem = styled.div`

`
const ButtonSendOrder = styled.button`

`


export default function Navbar() {
    
    // const selector = useSelector()
    const data = localStorage.getItem('myOrderData');
    const orderData = useSelector(state=>state.waiterOrder)

    function getData(){
        console.log(data);
    }

    function sendToApiDataOrder(){
        console.log(orderData);
        console.log('DATA IS SENDED TO BACKEND');
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
                {
                   orderData.ordered_items.length > 0 ? 
                    <MiniOrder>
                        {orderData.ordered_items.map((item)=>
                            <MiniItem>
                                {item.name} :{item.number_of_meals}
                            </MiniItem>
                    )}
                    <ButtonSendOrder onClick={sendToApiDataOrder}>taki przycisk</ButtonSendOrder>
                    </MiniOrder>
                        :
                        ''
                }

            </NavBarItem>
        </NavBarWraper>

        
    </NavBar>
    )
}
