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
  FormBox,
} from "./ManagerMenuComponent/ManagerMenuStyle";

import SelectProducts from "./ManagerMenuComponent/CreateDish/SelectProducts";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

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

  const [productData, setProductData] = useState([]);
  const [productDataLabel, setProductDataLabel] = useState([]);
  const [productDataType, setProductDataType] = useState([]);

  const [productUsed, setProductUsed] = useState([]);

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  function SubmitCreateDish(data) {
    client
      .post(`/dashboard/create_new_dish`, data)
      .then(() => {})
      .catch(() => {
        setErr(err);
      })
      .finally(() => {});
  }

  function GetProducts() {
    client
      .get(`/dashboard/kitchen_products`)
      .then((actualData) => {
        setProductData(actualData.data);
        getListOfIngridientsToProduct(actualData.data);
        productType(actualData.data);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(true);
      });
  }

  function AddProductsToList() {
    return { value: "id", label: "Name" };
  }

  function addProductUsed(newData) {
    setProductUsed(...productUsed, newData);
  }

  useEffect(() => {
    GetProducts();
  }, []);

  setSecondElement("Create Dish");

  function getListOfIngridientsToProduct(products) {
    const ingredientList = [];
    products.forEach((product) => {
      ingredientList.push({
        value: product.name,
        label: product.name,
        id: product.id,
      });
    });
    setProductDataLabel(ingredientList);
  }

  function productType(products) {
    const ingredientList = [];
    products.forEach((product) => {
      ingredientList.push({ id: product.id, type: product.product_type });
    });
    setProductDataType(ingredientList);
  }

  const onSubmit = (values) => {
    // send here new product to backend
    const dataMeal = { meal: values, ingredients: productUsed };
    console.log("czemu dzialasz x razy");
    SubmitCreateDish(dataMeal);
  };

  if (loading) {
    return (
      <CreateDishContainer>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          <Form>
            <FormElement>
              <FormLabel htmlFor="dishname">Dish Name:</FormLabel>
              <Field type="text" name="dishname"></Field>
              <ErrorMessage name="dishname"></ErrorMessage>

              <FormLabel htmlFor="price">Price:</FormLabel>
              <Field type="text" name="price"></Field>
              <ErrorMessage name="price"></ErrorMessage>
              <FormElementButton>
                <FormButton type="submit">Create Product</FormButton>
              </FormElementButton>
            </FormElement>
          </Form>
        </Formik>
        <ProductTable>
          <h3>Products used:</h3>
          <SelectProducts
            productList={productDataLabel}
            chosedProducts={setChosedProducts}
            productTypes={productDataType}
            setProductUsed={setProductUsed}
            productUsed={productUsed}
          />
        </ProductTable>
      </CreateDishContainer>
    );
  } else {
    return <div>Loading</div>;
  }
}
