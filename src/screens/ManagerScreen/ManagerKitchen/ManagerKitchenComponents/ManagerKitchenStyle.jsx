import styled from "styled-components";

const CurrentOrderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableConainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;

const TableKitchen = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const RowTableKitchen = styled.th`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 20px;
  background-color: rgb(117, 201, 250);
`;
const ColumnTableKitchen = styled.td`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 1rem;
  background-color: rgb(205, 235, 253);
`;

const ChangeWaiterForm = styled.form``;

const Button = styled.button`
  display: inline-block;
  margin: 2px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export {
  TableConainer,
  RowTableKitchen,
  TableKitchen,
  ColumnTableKitchen,
  ChangeWaiterForm,
  Button,
  CurrentOrderContainer,
};
