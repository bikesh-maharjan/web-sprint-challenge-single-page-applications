import React from "react";

export default function PizzaForm(props) {
  return (
    <form>
      <div className="form-container">
        <h2>Build your own Pizza!</h2>

        <label>
          {" "}
          Name :&nbsp;
          <input name="name" type="text" placeholder="Your Name Here" />
        </label>
        <label>
          {" "}
          Pizza Size :&nbsp;
          <select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra-Large</option>
          </select>
        </label>

        <h3>Toppings</h3>
        <label>
          Chicken: &nbsp;
          <input type="checkbox" name="chicken" />
        </label>
        <label>
          Pepperoni: &nbsp;
          <input type="checkbox" name="pepperoni" />
        </label>
        <label>
          Spinach: &nbsp;
          <input type="checkbox" name="spinach" />
        </label>
        <label>
          Bacon: &nbsp;
          <input type="checkbox" name="bacon" />
        </label>

        <label>
          Special Instructions? &nbsp;
          <input
            name="instructions"
            type="text"
            placeholder="Do you have any additional requests for us?"
          />
        </label>
        <button>Add Me</button>
      </div>
    </form>
  );
}
