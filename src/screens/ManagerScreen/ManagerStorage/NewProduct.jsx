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

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.productName = "Required";
  }
};

const initialValues = {
  productName: "",
};

export default function NewProduct() {
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
          <FormLabel htmlFor="productName">Product Name:</FormLabel>
          <Field type="text" name="productName"></Field>
          <ErrorMessage name="productName"></ErrorMessage>

          <FormElementButton>
            <FormButton type="submit" onClick={() => onSubmit()}>
              Create Storage
            </FormButton>
          </FormElementButton>
        </FormElement>
      </Form>
    </Formik>
  );
}
