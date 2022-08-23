import React from "react";

const styleButton = {
  backgroundColor: "black",
  border: "solid 1px green",
  height: "60px",
  color: "white",
  marginLeft: "30px",
  borderRadius: "10px",
};

function SearchButton(props) {
  return <button style={styleButton}>Search</button>;
}

export default SearchButton;
