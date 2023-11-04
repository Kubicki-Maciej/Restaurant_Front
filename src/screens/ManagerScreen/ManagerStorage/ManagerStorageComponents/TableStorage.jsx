import React from "react";
import { useState, Fragment } from "react";
import RowStorage from "./RowStorage";

const testData = [{}];

export default function TableStorage() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Storage name</th>
            <th>Quantity</th>
            <th>Quantity Type</th>
            <th>End date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Fragment>
            {/* add here row table component*/}
            <RowStorage />
          </Fragment>
        </tbody>
      </table>
    </div>
  );
}
