import React from "react";
import {
  styleButton,
  MouseOverButton,
  MouseOutButton,
  onClickButton,
} from "./styleButton";

function SearchButton() {
  return (
    <button
      onMouseOver={MouseOverButton}
      onMouseOut={MouseOutButton}
      onClick={onClickButton}
      style={styleButton}
    >
      Search
    </button>
  );
}

export default SearchButton;
