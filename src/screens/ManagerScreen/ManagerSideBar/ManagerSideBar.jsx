import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 15rem;
  margin-right: 1rem;
  height: 100%;
  background-color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`;

const MenuItem = styled.div`
  display: flex;
  width: 15rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border: 1px black solid;
  margin-bottom: 1rem;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 1.5);
  }
`;

// mobile is bottom bar
const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link to={to} style={{ textDecoration: "None", color: "black" }}>
      <MenuItem>
        <p>{title}</p>
      </MenuItem>
    </Link>
  );
};

export default function WaiterSideBar({ client, menuList }) {
  return (
    <div>
      <SideBar>
        {menuList.map((item) => {
          return <Item to={item.direction} title={item.title} />;
        })}
      </SideBar>
    </div>
  );
}
