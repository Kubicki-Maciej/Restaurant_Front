import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import styled from "styled-components";

const DataGridBox = styled.div`
  display: flex;
  width: 70%;
  margin: 25px;
`;

// const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function WaitersOrders({ setSecondElement }) {
  const [dataOrders, setDataOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  setSecondElement("> Waiters Orders");
  useEffect(() => {
    setDataOrders(dataCreation());
    setLoading(true);
  }, []);

  const dataT = [
    {
      id: 1,
      waiter_id: 1,
      order_id: 1,
      waiter_name: "Maciej",
      table: 25,
      order_value: 25.99,
    },
    {
      id: 2,
      waiter_id: 1,
      order_id: 1,
      waiter_name: "Ola",
      table: 25,
      order_value: 25.99,
    },
    {
      id: 3,
      waiter_id: 1,
      order_id: 1,
      waiter_name: "Kasia",
      table: 25,
      order_value: 25.99,
    },
    {
      id: 4,
      waiter_id: 1,
      order_id: 1,
      waiter_name: "Przemek",
      table: 25,
      order_value: 25.99,
    },
  ];
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function dataCreation() {
    const data = [];
    const names = ["Maciej", "Aleksandra", "Kara", "Przemek"];
    for (let i = 1; i < 40; i++) {
      let randomNumber = getRandomInt(0, 3);
      data.push({
        id: i,
        waiter_id: randomNumber - 1,
        order_id: i + 250,
        waiter_name: names[randomNumber],
        table: getRandomInt(10, 25),
        order_value: getRandomInt(50, 225),
      });
    }
    console.log(data);
    return data;
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.15, minWidth: "20px" },
    { field: "order_id", headerName: "order_id", flex: 0.4, width: "20px" },
    {
      field: "waiter_name",
      headerName: "waiter_name",
      flex: 0.2,
      width: "50px",
    },
    {
      field: "waiter_surrname",
      headerName: "waiter_surrname",
      flex: 0.3,
      width: "0.2",
    },
    {
      field: "order_value",
      headerName: "order_value",
      flex: 0.2,
      width: "0.2",
    },
    {
      field: "button",
      headerName: "Show Order",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          console.log(params);
        };
        return <button onClick={onClick}>{`Order ${params.id}`}</button>;
      },
    },
  ];
  if (loading) {
    return (
      <DataGridBox>
        <DataGrid
          rows={dataOrders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 12,
              },
            },
          }}
          pageSizeOptions={[12]}
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
        />
      </DataGridBox>
    );
  } else {
    return <div>Loading Data</div>;
  }
}
