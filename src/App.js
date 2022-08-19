import logo from "./logo.svg";
import SearchButton from "./SearchButton";
import React from "react";
import { findByLabelText } from "@testing-library/react";

function App() {
  const stileText = {
    color: "white",
  };
  const containerForm = {
    display: "flex",
  };
  const stileForm = {
    border: "solid 1px green",
    height: "60px",
    backgroundColor: "black",
    color: "white",
    width: "230px",
    borderRadius: "5px",
  };

  return (
    <div>
      <header>
        <h1 style={stileText}>VEGETARIAN RECIPES</h1>
        <p style={stileText}>
          Look for the recipe you like the most and try it!
        </p>
      </header>
      <form style={containerForm}>
        <input
          name="recipe"
          id="recipe"
          type="text"
          placeholder="Write your recipe here"
          style={stileForm}
        ></input>

        <SearchButton />
      </form>
    </div>
  );
}

export default App;
