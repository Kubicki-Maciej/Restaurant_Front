import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { lightBlue } from "@mui/material/colors";

function converData(data) {
  const converedData = [];
  data.forEach((item) => {
    const temp_meals = [];
    item.order.meals.forEach((meal) =>
      temp_meals.push(`${meal.meal_name}|${meal.number_of_meals}`)
    );
    converedData.push({
      id: item.order.id,
      order_start: item.order.order_start,
      order_number: item.order.order_number,
      order_number: item.order.order_number,
      short_meals: temp_meals,
    });
  });
  return converedData;
}

export default function HistoryScreen({ client }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const waiter_id = useSelector((state) => state.userData.id);

  useEffect(() => {
    fetchDataHisoryOrders();
  }, []);

  async function fetchDataHisoryOrders() {
    client
      .post(`/waiter/get_all_waiter_history_orders`, { waiter_id: waiter_id })
      .then((actualData) => {
        setData(actualData.data);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "name",
      headerName: "Name",
      flex: 0.8,
      cellClassName: "name-column--cell",
    },
    {
      field: "order_start",
      headerName: "Order Start",
      type: "data",
      headerAlign: "left",
      align: "left",
      flex: 0.54,
    },
    {
      field: "order_number",
      headerName: "Order Number",
      align: "left",
      flex: 0.8,
    },
    {
      field: "short_meals",
      headerName: "Meals",
      align: "left",
      flex: 2,
    },
  ];

  if (loading) {
    return <div>Wczytuje date</div>;
  } else {
    return (
      <Box
        width="100%"
        m="20px 0 0 0"
        height="75vh"
        borderRadius="20px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-row:nth-child(even)": {
            borderBottom: "none",
            backgroundColor: "lightgrey",
          },
          "& .name-column--cell": {
            color: "black",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "lightgrey",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "white",
            borderRadius: "0 0 20px 20px",
          },
          "& .MuiCheckbox-root": {
            color: `black !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `black !important`,
          },
          backgroundColor: "white",
        }}
      >
        <DataGrid
          checkboxSelection
          rows={converData(data)}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          // onRowSelectionModelChange={(itm) => setGameSelected(itm)}
        />
      </Box>
    );
  }
}
