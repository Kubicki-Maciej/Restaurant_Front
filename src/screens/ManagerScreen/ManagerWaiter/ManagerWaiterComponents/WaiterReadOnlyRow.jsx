import React from "react";
import { ColumnTableWaiter, Button } from "./ManagerWaiterStyle";

export default function WaiterReadOnlyRow({ contact, handleEditClick }) {
  return (
    <tr>
      <ColumnTableWaiter>{contact.name}</ColumnTableWaiter>
      <ColumnTableWaiter>{contact.surrname}</ColumnTableWaiter>
      <ColumnTableWaiter>{contact.login_number}</ColumnTableWaiter>
      <ColumnTableWaiter>****</ColumnTableWaiter>

      <ColumnTableWaiter>
        <Button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
      </ColumnTableWaiter>
    </tr>
  );
}
