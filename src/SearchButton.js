import React from "react";
import axios from "axios";

const SPOON_API_KEY = "fe6d0f1cac9a42a487ff452bc15dbf56";
let query = "pasta";
const styleButton = {
  backgroundColor: "black",
  border: "solid 1px green",
  height: "60px",
  color: "white",
  marginLeft: "30px",
  borderRadius: "10px",
};
function getData(e) {
  e.preventDefault();
  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&apiKey=${SPOON_API_KEY}`
    )
    .then((res) => {
      // writeHTML(res);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      // writeError(error);
    });
  // .finally(() => {
  //  removeLoading();
  // });
}

function SearchButton() {
  // const [colore, setColore] = React.useState("#ff0000");

  return (
    <button style={styleButton} onSubmit={getData}>
      Search
    </button>
  );
}

export default SearchButton;
