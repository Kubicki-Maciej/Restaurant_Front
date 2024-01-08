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
    errors.productName = "Required";
  }
};

const options = [
  { value: "KG", label: "Kilograms" },
  { value: "P", label: "Pices" },
];

const initialValues = {
  productName: "",
};

export default function NewProduct() {
  const onSubmit = (values) => {
    // send here new product to backend
    const optionValue = document.getElementById("option").value;
    const product = {
      product_name: values.productName,
      product_type: optionValue,
    };
    client
      .post(`/dashboard/create_product`, product)
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
          <FormLabel htmlFor="productName">Product Name:</FormLabel>
          <Field type="text" name="productName"></Field>
          <ErrorMessage name="productName"></ErrorMessage>

          <Field name="option" as="select" className="option-select">
            {() => (
              <select id="option" required>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <ErrorMessage name="option"></ErrorMessage>
          <FormElementButton>
            <FormButton type="submit">Create Product</FormButton>
          </FormElementButton>
        </FormElement>
      </Form>
    </Formik>
  );
}
