import React from "react";
import { ColumnTableWaiter, Button } from "./ManagerWaiterStyle";

export default function EditWaiterRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <ColumnTableWaiter>{editFormData.username}</ColumnTableWaiter>
      {/* <ColumnTableWaiter>
        <input
          type="text"
          required="required"
          placeholder="Change a name..."
          name="username"
          value={editFormData.username}
          onChange={handleEditFormChange}
        ></input>
      </ColumnTableWaiter> */}
      <ColumnTableWaiter>
        <input
          type="text"
          required="required"
          placeholder="Change a login number..."
          name="loginnumber"
          value={editFormData.loginnumber}
          onChange={handleEditFormChange}
        ></input>
      </ColumnTableWaiter>
      <ColumnTableWaiter>
        <input
          type="text"
          required="required"
          placeholder="Change a password..."
          name="password"
          value={editFormData.password}
          onChange={handleEditFormChange}
        ></input>
      </ColumnTableWaiter>
      <ColumnTableWaiter>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </ColumnTableWaiter>
    </tr>
  );
}
