import React from "react";

export default function PizzaForm(props) {
  const {
    values,
    inputChange,
    checkboxChange,
    submit,
    disabled,
    errors,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <h2>Build your own Pizza!</h2>
        <div>
          <div>{errors.name}</div>
          <div>{errors.address}</div>
          <div>{errors.size}</div>
        </div>
        <label>
          Name :&nbsp;
          <input
            name="name"
            type="text"
            placeholder="Your Name Here"
            onChange={onInputChange}
            value={values.name}
          />
        </label>
        <label>
          Address :&nbsp;
          <input
            name="address"
            type="address"
            type="Your address here"
            onChange={onInputChange}
            value={values.address}
          />
        </label>
        <label>Pizza Size :&nbsp; </label>
        <select onChange={onInputChange} value={values.size} name="size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra-Large</option>
        </select>

        <h3>Toppings</h3>
        <label>
          Chicken: &nbsp;
          <input
            type="checkbox"
            name="chicken"
            checked={values.toppings.chicken === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Pepperoni: &nbsp;
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.pepperoni === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Spinach: &nbsp;
          <input
            type="checkbox"
            name="spinach"
            checked={values.toppings.spinach === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Bacon: &nbsp;
          <input
            type="checkbox"
            name="bacon"
            checked={values.toppings.bacon === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Special Instructions? &nbsp;
          <input
            name="instructions"
            type="text"
            placeholder="Do you have any additional requests for us?"
          />
        </label>
        <button disabled={disabled}> Add Me Now</button>
      </div>
    </form>
  );
}
