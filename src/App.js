import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from "react-router-dom";
import moment from "moment";
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";
import axios from "axios";
import * as yup from "yup";
import "./App.css";
import formSchema from "./validation/formSchema";
import Navbar from "./components/Navbar";

//intital states

const initialFormValues = {
  name: "",
  address: "",
  size: "small",
  specialInstructions: "",
  toppings: {
    chicken: false,
    bacon: false,
    spinach: false,
    pepperoni: false,
  },
};

const initialFormErrors = {
  name: "",
  size: "",
  address: "",
  specialInstructions: "",
};

const initialOrders = [];
const inititalDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFromValues] = useState(initialFormValues);
  const [formErrors, setFromErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(inititalDisabled);
  console.log(formValues);
  const preNewOrder = (newOrders) => {
    axios
      .post("https://reqres.in/api/users", newOrders)
      .then((res) => {
        setOrders([res.data, ...orders]);
        console.log(res.data);
        setFromValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFromErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFromErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFromValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkboxChange = (name, isChecked) => {
    setFromValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      },
    });
  };

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      address: formValues.address.trim(),
      size: formValues.size.trim(),
      specialInstructions: formValues.specialInstructions.trim(),
      toppings: Object.keys(formValues.toppings).filter(
        (top) => formValues.toppings[top]
      ),
    };
    preNewOrder(newOrder);
  };
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/pizza/">
          {!orders.length ? (
            <PizzaForm
              values={formValues}
              inputChange={inputChange}
              checkboxChange={checkboxChange}
              submit={submit}
              disabled={disabled}
              errors={formErrors}
            />
          ) : (
            <Thankyou orders={orders} setOrders={setOrders} />
          )}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

const Thankyou = ({ orders, setOrders }) => {
  if (!orders.length) {
    return <h1>There is order to display.</h1>;
  }
  return (
    <div>
      <h3>Thank you for your order!. Your pizza is on the way.</h3>
      <p>Your name: {orders[0].name}</p>
      <p>order date: {moment(orders[0].createdAt).format("MMM DD, YYYY")}</p>
      <p>delivery address: {orders[0].address}</p>
      <p>
        special instructions:
        {orders[0].specialInstructions ? orders[0].specialInstructions : "None"}
      </p>
      <button id="reOrder" onClick={() => setOrders([])}>re-order again</button>
    </div>
  );
};
export default App;
