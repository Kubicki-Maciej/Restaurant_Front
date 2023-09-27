import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormElement,
  FormLabel,
  ProductTable,
  CreateDishContainer,
  FormElementButton,
  FormButton,
} from "./ManagerMenuComponent/ManagerMenuStyle";

import SelectProducts from "./ManagerMenuComponent/SelectProducts";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.dishname = "Required";
  }
};

const initialValues = {
  dishname: "",
  price: 0,
};

export default function Createdish({ setSecondElement }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [chosedProducts, setChosedProducts] = useState([]);

  setSecondElement("Create Dish");

  function getListOfIngridientsToProduct() {
    // connect api and get ingredients
    return [
      { value: "meet", label: "Meet" },
      { value: "chesse", label: "Chesse" },
      { value: "roll", label: "Roll" },
    ];
  }

  const onSubmit = (values) => {
    // send here new product to backend
    console.log("values");
    console.log(values);
    console.log(chosedProducts);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <CreateDishContainer>
          <FormElement>
            <FormLabel htmlFor="dishname">Dish Name:</FormLabel>
            <Field type="text" name="dishname"></Field>
            <ErrorMessage name="dishname"></ErrorMessage>

            <FormLabel htmlFor="price">Price:</FormLabel>
            <Field type="text" name="price"></Field>
            <ErrorMessage name="price"></ErrorMessage>
            <FormElementButton>
              <FormButton type="submit" onClick={() => onSubmit()}>
                Create Product
              </FormButton>
            </FormElementButton>
          </FormElement>

          <ProductTable>
            <h3>Products used:</h3>
            <SelectProducts
              productList={getListOfIngridientsToProduct()}
              chosedProducts={setChosedProducts}
            />
          </ProductTable>
        </CreateDishContainer>
      </Form>
    </Formik>
  );
}
