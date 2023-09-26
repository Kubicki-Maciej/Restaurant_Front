import React from "react";
import { useState, Fragment } from "react";
import EditWaiterRow from "./ManagerWaiterComponents/EditWaiterRow";
import WaiterReadOnlyRow from "./ManagerWaiterComponents/WaiterReadOnlyRow";
import {
  TableConainer,
  TableWaiter,
  RowTableWaiter,
  ChangeWaiterForm,
} from "./ManagerWaiterComponents/ManagerWaiterStyle";

export default function ModifyWaiter() {
  const waiterData = [
    {
      id: 1,
      name: "Maciej",
      surrname: "Kubicki",
      login_number: 1234,
    },
    {
      id: 2,
      name: "Aleksandra",
      surrname: "G",
      login_number: 7777,
    },
  ];
  const [contacts, setContacts] = useState(waiterData);

  const [editFormData, setEditFormData] = useState({
    name: "",
    surrname: "",
    login_number: "",
    password: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      surrname: editFormData.surrname,
      login_number: editFormData.login_number,
      password: editFormData.password,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      surrname: contact.surrname,
      login_number: contact.login_number,
      password: contact.password,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <TableConainer className="app-container">
      <ChangeWaiterForm onSubmit={handleEditFormSubmit}>
        <TableWaiter>
          <thead>
            <tr>
              <RowTableWaiter>Name</RowTableWaiter>
              <RowTableWaiter>Surrname</RowTableWaiter>
              <RowTableWaiter>Login Number</RowTableWaiter>
              <RowTableWaiter>Password</RowTableWaiter>
              <RowTableWaiter>Actions</RowTableWaiter>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditWaiterRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <WaiterReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </TableWaiter>
      </ChangeWaiterForm>
    </TableConainer>
  );
}
