import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuItem = styled.div`
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-decoration: none;
  padding: 10px;
`;

export default function NavBarElement({
  title,
  to,
  icon,
  selected,
  setSelected,
}) {
  return (
    <Link to={to} onClick={selected}>
      <MenuItem>
        <p>{title}</p>
      </MenuItem>
    </Link>
  );
}
