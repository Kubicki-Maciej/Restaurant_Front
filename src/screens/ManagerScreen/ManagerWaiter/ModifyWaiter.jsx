import React from "react";
import { useState, useEffect, Fragment } from "react";
import EditWaiterRow from "./ManagerWaiterComponents/EditWaiterRow";
import WaiterReadOnlyRow from "./ManagerWaiterComponents/WaiterReadOnlyRow";
import {
  TableConainer,
  TableWaiter,
  RowTableWaiter,
  ChangeWaiterForm,
} from "./ManagerWaiterComponents/ManagerWaiterStyle";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const wd = [
  {
    id: 1,
    name: "Maciej",
    surrname: "Kubicki",
    loginnumber: 1234,
  },
  {
    id: 2,
    name: "Aleksandra",
    surrname: "G",
    loginnumber: 7777,
  },
];

export default function ModifyWaiter({ setSecondElement }) {
  const [contacts, setContacts] = useState(wd);
  const [waiterData, setWaiterData] = useState([]);
  const [error, setError] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  async function GetWaiters() {
    client
      .get(`/api/get_user_information`)
      .then((actualData) => {
        setWaiterData(actualData.data);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err);
      })
      .finally(() => {});
  }

  async function ChangeWaiter(data) {
    client
      .put(`/api/change_user_info`, data)
      .then(() => {})
      .catch((err) => {
        setError(true);
        setErrorMessage(err);
      })
      .finally(() => {});
  }

  useEffect(() => {
    GetWaiters();
  }, []);

  setSecondElement("> Modify Waiters Data");

  const [editFormData, setEditFormData] = useState({
    username: "",
    loginnumber: "",
    password: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();
    console.log("zmiana nazwy");
    const fieldName = event.target.getAttribute("name");
    console.log(fieldName);
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      username: editFormData.username,
      loginnumber: editFormData.loginnumber,
      password: editFormData.password,
    };
    console.log(editedContact);

    const newWaiterData = [...waiterData];
    console.log(waiterData);

    const index = waiterData.findIndex(
      (contact) => contact.id === editContactId
    );

    newWaiterData[index] = editedContact;

    ChangeWaiter(editedContact);
    setWaiterData(newWaiterData);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      username: contact.username,
      loginnumber: contact.loginnumber,
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
              <RowTableWaiter>Username</RowTableWaiter>
              <RowTableWaiter>Login Number</RowTableWaiter>
              <RowTableWaiter>Password</RowTableWaiter>
              <RowTableWaiter>Actions</RowTableWaiter>
            </tr>
          </thead>
          <tbody>
            {waiterData.map((contact) => (
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
