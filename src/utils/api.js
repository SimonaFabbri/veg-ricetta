import axios from "axios";

const SPOON_API_KEY = "fe6d0f1cac9a42a487ff452bc15dbf56";

export const searchRecipes = async (query) => {
  let result = {
    recipes: [],
    error: "",
  };

  try {
    const recipes = await axios
      .get
      // `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&apiKey=${SPOON_API_KEY}`
      ();
    result.recipes = recipes.data.results;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const getRecipe = (recipeId) => {
  let res = {
    recipe: [],
    error: "",
  };
  try {
    const recipe = axios
      .get
      // `https://api.spoonacular.com/recipes/${recipeId}/information/?apiKey=${SPOON_API_KEY}`
      ();
    res.recipe = recipe.data;
  } catch (error) {
    res.error = error;
    // writeError(error);
  }
  return res;
};
