import React, { useEffect } from "react";
import { useState, Fragment } from "react";
import RowStorage from "./RowStorage";
import EditRowProduct from "./EditRowProduct";

import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const testData = [{}];

export default function TableStorage() {
  const [productInStorage, setProductInStorage] = useState([]);
  const [productInStorageLoaded, setProductInStorageLoaded] = useState(true);
  const [err, setErr] = useState("");

  const [editFormData, setEditFormData] = useState({
    id: "",
    product_date_added: "",
    product_date_expired: "",
    products: {
      id: 0,
      name: "",
      product_type: "",
    },
    storages: {
      id: 0,
      name: "",
      storage_EAN: null,
    },
    number_of_product: 0,
    product_price: 0,
  });
  const [editProductInStorage, setEditProductInStorage] = useState(null);

  function getProductInStorage() {
    client
      .get(`/dashboard/get_product_in_storage`)
      .then((acutalData) => {
        setProductInStorage(acutalData.data);
      })
      .catch((err) => setErr(err))
      .finally(() => {
        setProductInStorageLoaded(true);
      });
  }

  function saveRecordInDb(changes) {
    client
      .post(`/dashboard/update_product_in_storage`, changes)
      .catch((err) => setErr(err))
      .finally(() => {});
  }

  function hideRecordInDb(id_pis) {
    client
      .post(`/dashboard/remove_product_in_storage`, { id: id_pis })
      .catch((err) => setErr(err))
      .finally(() => {});
  }

  useEffect(() => {
    getProductInStorage();
  }, []);

  const handleEditClick = (event, pis) => {
    event.preventDefault();
    setEditProductInStorage(pis.id);

    const formValues = {
      id: pis.id,
      product_date_added: pis.product_date_added,
      product_date_expired: pis.product_date_expired,
      products: {
        id: pis.products.id,
        name: pis.products.name,
        product_type: pis.products.product_type,
      },
      storages: {
        id: pis.storages.id,
        name: pis.storages.name,
        storage_EAN: pis.storages.storage_EAN,
      },
      number_of_product: pis.number_of_product,
      product_price: pis.product_price,
    };

    setEditFormData(formValues);
  };

  function handleCancelClick() {
    setEditProductInStorage(null);
  }

  function handleEditFormChange(event) {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    console.log(newFormData);
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  function handleEditFormSubmit(event) {
    event.preventDefault();

    const editedProductInStorage = {
      id: editFormData.id,
      product_date_added: editFormData.product_date_added,
      product_date_expired: editFormData.product_date_expired,
      products: {
        id: editFormData.products.id,
        name: editFormData.products.name,
        product_type: editFormData.products.product_type,
      },
      storages: {
        id: editFormData.storages.id,
        name: editFormData.storages.name,
        storage_EAN: editFormData.storages.storage_EAN,
      },
      number_of_product: editFormData.number_of_product,
      product_price: editFormData.product_price,
    };

    const newProductInStorage = [...productInStorage];

    const index = productInStorage.findIndex(
      (pis) => pis.id === editProductInStorage
    );

    newProductInStorage[index] = editedProductInStorage;
    saveRecordInDb(editedProductInStorage);
    setEditProductInStorage(null);
    setProductInStorage(newProductInStorage);
  }

  function handleDeleteRow(event, id) {
    event.preventDefault();
    hideRecordInDb(id);
    setProductInStorageLoaded(false);
    getProductInStorage();
  }

  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Storage name</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Date Added</th>
              <th>End Date</th>
              <th>Quantity</th>
              <th>Product Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productInStorageLoaded ? (
              <Fragment>
                {productInStorage.map((pis) => (
                  <Fragment>
                    {editProductInStorage === pis.id ? (
                      <EditRowProduct
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <RowStorage
                        values={pis}
                        handleEditClick={handleEditClick}
                        deleteRow={handleDeleteRow}
                      />
                    )}
                  </Fragment>
                ))}
              </Fragment>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
}
