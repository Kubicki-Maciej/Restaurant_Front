import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
//
import NavBarElement from "./NavBarElement";
import { useEffect } from "react";

const NavBar = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  z-index: 100;
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

export default function ManagerNavbar({ secondScope }) {
  const [selectedElement, setSelectedElement] = useState(0);
  const [selectedSecondElement, setSelectedSecondElement] = useState("");
  const listOfElements = ["Dashboard", "Waiters", "Kitchen", "Menu", "Storage"];

  useEffect(() => {
    setSelectedSecondElement(secondScope);
  }, [secondScope]);

  return (
    <NavBar>
      <HeaderNavBar>
        {listOfElements[selectedElement]} {selectedSecondElement}
      </HeaderNavBar>
      <NavBarWraper>
        {listOfElements.map((element, index) => (
          <NavBarItem>
            <NavBarElement
              to={`./${element}`}
              selected={() => setSelectedElement(index)}
              title={element}
            />
          </NavBarItem>
        ))}
      </NavBarWraper>
    </NavBar>
  );
}
