import { isObject } from "formik";
import React from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import {
  FormElement,
  FormLabel,
  ProductTable,
  CreateDishContainer,
  FormElementButton,
  FormButton,
  FormBox,
} from "../ManagerMenu/ManagerMenuComponent/ManagerMenuStyle";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const initialValues = {
  price: "",
  quantity: "",
};

export default function AddProductToStorage() {
  const [storage, setStorage] = useState([]);
  const [storageSelected, setStorageSelected] = useState({});
  const [product, setProduct] = useState([]);
  const [productSelected, setProductSelected] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");

  const [showProduct, setShowProduct] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  function productConverter(data) {
    const tempData = [];

    data.forEach((product) => {
      tempData.push({
        value: product.id,
        label: product.name,
        product_type: product.product_type,
      });
    });
    return tempData;
  }

  function storageConverter(data) {
    const tempData = [];

    data.forEach((category) => {
      tempData.push({
        value: category.id,
        label: category.name,
      });
    });
    return tempData;
  }

  function getProducts() {
    client
      .get(`/dashboard/get_products`)
      .then((actualData) => {
        setProduct(productConverter(actualData.data));
      })
      .catch(() => {})
      .finally(() => {});
  }

  function getStorage() {
    client
      .get(`/dashboard/get_storages`)
      .then((actualData) => {
        setStorage(storageConverter(actualData.data));
      })
      .catch(() => {})
      .finally(() => {
        setIsLoaded(true);
      });
  }

  function addProductToStorage(data) {
    client
      .post(`/dashboard/add_product_to_storage`, data)
      .catch(() => {})
      .finally(() => {});
  }

  useEffect(() => {
    getStorage();
    getProducts();
  }, []);

  function sendToApi(values) {
    const data = {
      product_id: productSelected.value,
      storage_id: storageSelected.value,
      price: values.price,
      date_expired: selectedDate.toISOString().slice(0, 10),
      quantity: values.quantity,
    };
    console.log(data);
    addProductToStorage(data);
  }

  if (isLoaded) {
    return (
      <div>
        AddProductToStorage
        {/* select storage */}
        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          name="color"
          options={storage}
          onChange={(choice) => {
            if (choice === null) {
              // setStorage({ value: "", label: "" });
              setStorageSelected({ value: "", label: "" });
              setShowCategory(false);
            } else {
              // setStorage(choice);
              setStorageSelected(choice);
              setShowCategory(true);
            }
          }}
        />
        {/* select product */}
        {showCategory ? (
          <div>
            <Select
              className="basic-single-category"
              classNamePrefix="select"
              isClearable={true}
              isSearchable={true}
              name="color"
              options={product}
              onChange={(choice) => {
                if (choice === null) {
                  // setProduct({ value: "", label: "" });
                  setProductSelected({ value: "", label: "" });
                  setShowProduct(false);
                } else {
                  // setProduct(choice);
                  setProductSelected(choice);
                  setShowProduct(true);
                }
              }}
            />
            {showProduct ? (
              <div>
                <Formik initialValues={initialValues} onSubmit={sendToApi}>
                  <Form>
                    <FormElement>
                      <FormLabel htmlFor="price">PRICE:</FormLabel>
                      <Field type="text" name="price"></Field>
                      <ErrorMessage name="price"></ErrorMessage>
                      <FormLabel htmlFor="quantity">
                        Quanitity of type - {productSelected.product_type} :
                      </FormLabel>
                      <Field type="text" name="quantity"></Field>
                      <ErrorMessage name="quantity"></ErrorMessage>
                      <FormLabel htmlFor="date">EXPIRY DATE :</FormLabel>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                      />
                      <FormElementButton>
                        <FormButton type="submit">Create Product</FormButton>
                      </FormElementButton>
                    </FormElement>
                  </Form>
                </Formik>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div>kategoria niewybrana</div>
        )}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
