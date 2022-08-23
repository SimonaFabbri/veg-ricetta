import React, { useContext } from "react";
import logo from "./logo.svg";
import SearchButton from "./SearchButton";
import { findByLabelText } from "@testing-library/react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchContext from "./SearchContext";
const SPOON_API_KEY = "fe6d0f1cac9a42a487ff452bc15dbf56";

function Home(props) {
  const [queryInput, setQueryInput] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);
  const [error, setError] = React.useState([]);

  const searchQuery = useContext(SearchContext);

  React.useEffect(() => {
    if (searchQuery !== "") {
      setQueryInput(searchQuery);
      getData();
    }
  }, [searchQuery]);

  function getData(e) {
    if (e) e.preventDefault();

    props.updateQuery(queryInput);

    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${queryInput}&diet=vegetarian&apiKey=${SPOON_API_KEY}`
      )

      .then((res) => {
        setRecipes(res.data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <div>
      <header>
        <h1 style={stileText}>VEGETARIAN RECIPES</h1>
        <p style={stileText}>
          Look for the recipe you like the most and try it!
        </p>
      </header>
      <form style={containerForm} onSubmit={getData}>
        <input
          name="recipe"
          id="recipe"
          type="text"
          placeholder="Write your recipe here"
          style={stileForm}
          value={queryInput}
          onChange={(e) => {
            setQueryInput(e.target.value);
          }}
        ></input>

        <SearchButton></SearchButton>
      </form>
      <div>
        <ul>
          {recipes.map((i) => {
            return (
              <Link style={stileRecipes} key={i} to={`/${i.id}`}>
                <img src={i.image} />
                <h1 style={stileText}>{i.title}</h1>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <p>{error ? error.message : null}</p>
      </div>
    </div>
  );
}

export default Home;

//////////////////////// STYLES ////////////////////////
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
const stileRecipes = {
  border: "solid 1px green",
  paddingBottom: "50px",
  display: "flex",
  paddingTop: "50px",
  alignItems: "center",
  paddingLeft: "50px",
  paddingRight: "50px",
};
