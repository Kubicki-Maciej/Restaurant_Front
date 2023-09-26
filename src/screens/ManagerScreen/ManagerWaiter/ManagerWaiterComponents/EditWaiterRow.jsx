import React from "react";
import { ColumnTableWaiter, Button } from "./ManagerWaiterStyle";

export default function EditWaiterRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <ColumnTableWaiter>
        <input
          type="text"
          required="required"
          placeholder="Change a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </ColumnTableWaiter>
      <ColumnTableWaiter>
        <input
          type="text"
          required="required"
          placeholder="Change an surrname..."
          name="surrname"
          value={editFormData.surrname}
          onChange={handleEditFormChange}
        ></input>
      </ColumnTableWaiter>
      <ColumnTableWaiter>
        <input
          type="text"
          required="required"
          placeholder="Change a login number..."
          name="login_number"
          value={editFormData.login_number}
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
