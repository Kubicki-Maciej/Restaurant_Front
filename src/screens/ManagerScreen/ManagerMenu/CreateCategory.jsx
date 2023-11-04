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
  const onSubmit = (values) => {
    // send here new product to backend
    console.log("values");
    console.log(values);
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
            <FormButton type="submit" onClick={() => onSubmit()}>
              Create Category
            </FormButton>
          </FormElementButton>
        </FormElement>
      </Form>
    </Formik>
  );
}
