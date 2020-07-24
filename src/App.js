import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from "react-router-dom";
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
  size: "",
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
};

const initialOrders = [];
const inititalDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFromValues] = useState(initialFormValues);
  const [formErrors, setFromErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(inititalDisabled);

  const preNewOrder = (newOrders) => {
    axios
      .post("https://reqres.in/api/users", newOrders)
      .then((res) => {
        setOrders([res.data, ...orders]);
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
          <PizzaForm
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
