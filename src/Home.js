import React, { useContext } from "react";
import SearchButton from "./SearchButton";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchContext from "./SearchContext";
import { useMediaQuery } from "react-responsive";

const SPOON_API_KEY = "fe6d0f1cac9a42a487ff452bc15dbf56";

//////////////////////// DISPLAY RESPONSIVE ////////////////////////

function Home(props) {
  const searchQuery = useContext(SearchContext);
  const [queryInput, setQueryInput] = React.useState(searchQuery);
  const [recipes, setRecipes] = React.useState([]);
  const [error, setError] = React.useState("");
  const [searchSubmitted, setSearchSubmitted] = React.useState(false);
  // TODO: Aggiungere uno stato per controllare la ricerca

  React.useEffect(() => {
    if (searchQuery !== "") {
      getData();
    }
  }, [searchQuery]);

  function getData(e) {
    if (e) e.preventDefault();

    setSearchSubmitted(true);

    if (searchQuery !== queryInput) {
      props.updateQuery(queryInput);
    }
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${queryInput}&diet=vegetarian&apiKey=${SPOON_API_KEY}`
      )

      .then((res) => {
        setRecipes(res.data.results);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }
  const isMobile = useMediaQuery({ maxWidth: 660 });

  return (
    <div style={styleBox}>
      <header>
        <h1 style={styleText}>VEGETARIAN RECIPES</h1>
        <p style={styleText}>
          Look for the recipe you like the most and try it!
        </p>
      </header>
      <form style={containerForm} onSubmit={getData}>
        <input
          name="recipe"
          id="recipe"
          type="text"
          placeholder="Write your recipe here"
          style={styleForm}
          value={queryInput}
          onChange={(e) => {
            setQueryInput(e.target.value);
          }}
        ></input>

        <SearchButton></SearchButton>
      </form>

      <div>
        <ul style={{ paddingInlineStart: "0px" }}>
          {recipes.length > 0
            ? recipes.map((recipe, i) => {
                return (
                  <Link
                    style={isMobile ? prova : styleRecipes}
                    key={i}
                    to={`/${recipe.id}`}
                  >
                    <img src={recipe.image} />
                    <h1 style={styleText}>{recipe.title}</h1>
                  </Link>
                );
              })
            : null}
        </ul>
        {searchSubmitted && recipes.length === 0 && !error ? (
          <p style={styleText}>
            No recipes found with the search query: {searchQuery}
          </p>
        ) : null}
      </div>
      <div>
        <p style={{ color: "red" }}>{error ? error.message : null}</p>
      </div>
    </div>
  );
}

export default Home;

//////////////////////// STYLES ////////////////////////
const styleBox = { paddingLeft: "100px" };

const styleText = {
  color: "white",
};
const containerForm = {
  display: "flex",
};

const styleForm = {
  height: "60px",
  backgroundColor: "black",
  color: "white",
  width: "230px",
  borderRadius: "5px",
};

const styleRecipes = {
  paddingBottom: "50px",
  display: "flex",
  paddingTop: "50px",
  alignItems: "center",
  paddingRight: "50px",
  marginRight: "100px",
};

const prova = {
  ...styleRecipes,
  display: "block",
  paddingRight: "0px",
  textAlign: "center",
};
