import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.storageName = "Required";
  }
};

const initialValues = {
  storageName: "",
};

export default function CreateNewStorgae() {
  const onSubmit = (values) => {
    // send here new product to backend

    console.log(values);
    const storage = {
      storage_name: values.storageName,
    };
    client
      .post(`/dashboard/create_storage`, storage)
      .catch(() => {
        console.log("cant create object");
      })
      .finally(() => {});
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <FormElement>
          <FormLabel htmlFor="storageName">Storage Name:</FormLabel>
          <Field type="text" name="storageName"></Field>
          <ErrorMessage name="storageName"></ErrorMessage>

          <FormElementButton>
            <FormButton type="submit">Create Storage</FormButton>
          </FormElementButton>
        </FormElement>
      </Form>
    </Formik>
  );
}
