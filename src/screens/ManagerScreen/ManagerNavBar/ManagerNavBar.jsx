import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = styled.div`
  /* position: fixed;
  
  top: 0;
  left: 0;
  width: 15rem;
  margin-right: 1rem;
  height: 100%;
  background-color: #f8f9fa;
  padding: 0.5rem; */

  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const NavBarItem = styled.div`
  display: flex;
  border: solid black 1px;
  margin-left: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const NavBarLink = styled.div`
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-decoration: none;
  padding: 10px;
`;

const HeaderNavBar = styled.h1`
  border: solid black 1px;
  text-align: center;
`;
const NavBarWraper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;
const MiniOrder = styled.div``;
const MiniItem = styled.div``;
const ButtonSendOrder = styled.button``;

const MenuItem = styled.div`
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-decoration: none;
  padding: 10px;
`;

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link to={to}>
      <MenuItem>
        <p>{title}</p>
      </MenuItem>
    </Link>
  );
};

export default function ManagerNavbar() {
  return (
    <NavBar>
      <HeaderNavBar>NAV BAR</HeaderNavBar>

      <NavBarWraper>
        <Item to={"./dashboard"} title={"Dashboard"} />
        <Item to={"./orders"} title={"Waiters"} />
        <Item to={"./orders"} title={"Kitchen"} />
        <Item to={"./orders"} title={"Menu"} />
        <Item to={"./orders"} title={"Storage"} />
        {/* <NavBarItem>
          <NavBarLink>Dashboard</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink>Waiters</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink>Kitchen</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink>Menu</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink>Storage</NavBarLink>
        </NavBarItem> */}
      </NavBarWraper>
    </NavBar>
  );
}
