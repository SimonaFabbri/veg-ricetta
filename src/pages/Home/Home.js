import React, { useContext } from "react";
import SearchButton from "../../components/SearchButton";
import { Link } from "react-router-dom";
import SearchContext from "../../SearchContext";
import { useMediaQuery } from "react-responsive";
import { searchRecipes } from "../../utils/api";
import {
  styleRecipesMobile,
  styleRecipes,
  styleForm,
  containerForm,
  styleText,
  styleBox,
  errorStyle,
  styleBoxMobile,
} from "../style";

function Home(props) {
  const searchQuery = useContext(SearchContext);
  const [queryInput, setQueryInput] = React.useState(searchQuery);
  const [recipes, setRecipes] = React.useState([]);
  const [error, setError] = React.useState("");
  const [searchSubmitted, setSearchSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (searchQuery !== "") {
      getData();
    }
  }, [searchQuery]);

  async function getData(e) {
    if (e) e.preventDefault();
    setError("");
    setIsLoading(true);

    setSearchSubmitted(true);

    if (searchQuery !== queryInput) {
      props.updateQuery(queryInput);
    }

    const returnRecipies = await searchRecipes(queryInput);

    if (returnRecipies.recipes) {
      setRecipes(returnRecipies.recipes);
    }

    if (returnRecipies.error) {
      setError(returnRecipies.error);
    }
    setIsLoading(false);
  }
  const isMobile = useMediaQuery({ maxWidth: 660 });

  return (
    <div style={isMobile ? styleBoxMobile : styleBox}>
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
      {isLoading ? (
        <p style={styleText}>Loading...</p>
      ) : (
        <div>
          <ul style={{ paddingInlineStart: "0px" }}>
            {recipes.length > 0
              ? recipes.map((recipe, i) => {
                  return (
                    <Link
                      style={isMobile ? styleRecipesMobile : styleRecipes}
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
      )}
      <div>
        <p style={errorStyle}>{error ? error.message : null}</p>
      </div>
    </div>
  );
}

export default Home;
