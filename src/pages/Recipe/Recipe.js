import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { getRecipe } from "../../utils/api";
import { styleText, errorStyle } from "../style";

async function Recipe() {
  const [recipe, setRecipe] = React.useState([]);
  const [error, setError] = React.useState("");

  const navigate = useNavigate();
  const params = useParams();

  const returnRecipe = await getRecipe(params.id);
  if (returnRecipe.recipe) {
    setRecipe(returnRecipe.recipe);
  }

  if (returnRecipe.error) {
    setError(returnRecipe.error);
  }

  React.useEffect(() => {
    getRecipe(params.id);
  });
  //  axios
  //    .get(
  //     `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${SPOON_API_KEY}`
  //   )
  //  .then((res) => {
  //    setRecipe(res.data);
  //  })
  //  .catch((error) => {
  //   console.log(error);
  // writeError(error);
  //  });
  // }, []);
  const isMobile = useMediaQuery({ maxWidth: 660 });
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1 style={styleText}>{recipe.title}</h1>;
      <img src={recipe.image} />
      <div style={styleText}>
        {recipe.analyzedInstructions
          ? recipe.analyzedInstructions.map((instruction, i) =>
              instruction.steps.map((step, j) => <p key={j}>{step.step}</p>)
            )
          : null}
      </div>
      <div>
        <p style={errorStyle}>{error ? error.message : null}</p>
      </div>
    </div>
  );
}

export default Recipe;
