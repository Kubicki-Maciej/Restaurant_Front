import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormElement = styled.div`
  margin: 5px 10px 5px 10px;
  display: flex;
  flex-direction: column;
`;

const FormButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const FormLabel = styled.label`
  color: black;
  font-size: 14px;
`;

const FormElementRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FormElementButton = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const initialValues = {
  name: "",
  surname: "",
  initials: "",
  password: "",
  confirmPassword: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.surname) {
    errors.surname = "Required";
  }

  if (!values.initials) {
    errors.initials = "Required";
  } else if (values.initials.length < 4) {
    errors.initials = "Initials must be at least 4 characters";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be at least 4 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

const onSubmit = (values) => {
  console.log(values);
};

export default function CreateWaiter() {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormElementRow>
              <FormElement>
                <FormLabel htmlFor="name">Name:</FormLabel>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </FormElement>
              <FormElement>
                <FormLabel htmlFor="surname">Surname:</FormLabel>
                <Field type="text" name="surname" />
                <ErrorMessage name="surname" component="div" />
              </FormElement>
            </FormElementRow>
            <FormElement>
              <FormLabel htmlFor="initials">Login Number:</FormLabel>
              <Field type="text" name="initials" />
              <ErrorMessage name="initials" component="div" />
            </FormElement>
            <FormElementRow>
              <FormElement>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </FormElement>
              <FormElement>
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password:
                </FormLabel>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" component="div" />
              </FormElement>
            </FormElementRow>
            <FormElementButton>
              <FormButton type="submit">Register Waiter</FormButton>
            </FormElementButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}
