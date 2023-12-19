import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function BarMagazineStock({ data }) {
  const [listDataProducts, setListDataProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // need to create in backend fucntion that show if product is running out of stock

  useEffect(() => {}, []);

  useEffect(() => {
    GetMagazineStock();
  }, [loading]);

  async function GetMagazineStock() {
    client
      .get(`/dashboard/check_magazine_stock`)
      .then((acutalData) => {
        setListDataProducts(acutalData.data.products);
      })
      .catch((err) => {
        setError(err.message);
        setListDataProducts(null);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  function createRow(id, name, quantity, goodStockValue) {
    const percentValue = parseFloat((quantity / goodStockValue) * 100).toFixed(
      2
    );
    return {
      id: id,
      name: name,
      quantity: quantity,
      goodStockValue: goodStockValue,
      percent: percentValue,
    };
  }

  function createTable(products) {
    const table = [];
    products.forEach((element) => {
      table.push(
        createRow(
          element.id,
          element.name,
          element.quantity,
          element.good_stock_value
        )
      );
    });

    return table;
  }

  function columns() {
    return [
      { field: "id", headerName: "ID", flex: 0.15, minWidth: "20px" },
      { field: "name", headerName: "Name", flex: 0.4, width: "20px" },
      { field: "quantity", headerName: "Quantity", flex: 0.2, width: "20px" },
      {
        field: "goodStockValue",
        headerName: "Min In stock",
        flex: 0.3,
        width: "0.2",
      },
      { field: "percent", headerName: "%", flex: 0.2, width: "0.2" },
    ];
  }

  if (loading) {
    return (
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rowHeight={25}
          rows={createTable(listDataProducts)}
          columns={columns()}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[7]}
          // checkboxSelection
          sx={{
            "& .MuiDataGrid-cell": {
              padding: 0,
            },
          }}
        />
      </div>
    );
  } else {
    return <div>Loading data</div>;
  }
}
