import React from "react";
import RowActions from "./RowActions";

export default function RowStorage({ values }) {
  return (
    <tr>
      <th>Shelf</th>
      <th>1</th>
      <th>Pice</th>
      <th>20-10-2023</th>
      <th>
        <RowActions />
      </th>
    </tr>
  );
}
