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
} from "./ManagerMenuComponent/ManagerMenuStyle";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.categoryName = "Required";
  }
};

const initialValues = {
  categoryName: "",
};

export default function CreateCategory() {
  const [err, setErr] = useState("");

  function CreateCategory(dataCategory) {
    client
      .post(`/dashboard/create_category`, dataCategory)
      .then(() => {})
      .catch(() => {
        setErr(err);
      })
      .finally(() => {});
  }

  const onSubmit = (values) => {
    // send here new product to backend
    CreateCategory(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <FormElement>
          <FormLabel htmlFor="categoryName">Category Name:</FormLabel>
          <Field type="text" name="categoryName"></Field>
          <ErrorMessage name="categoryName"></ErrorMessage>

          <FormElementButton>
            <FormButton type="submit">Create Category</FormButton>
          </FormElementButton>
        </FormElement>
      </Form>
    </Formik>
  );
}
