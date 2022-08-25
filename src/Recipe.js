import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useMediaQuery } from "react-responsive";

const SPOON_API_KEY = "fe6d0f1cac9a42a487ff452bc15dbf56";

function Recipe() {
  const navigate = useNavigate();
  const params = useParams();

  const [recipe, setRecipe] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${SPOON_API_KEY}`
      )
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((error) => {
        console.log(error);
        // writeError(error);
      });
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 660 });
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1 style={{ color: "white" }}>{recipe.title}</h1>;
      <img src={recipe.image} />
      <div style={{ color: "white" }}>
        {recipe.analyzedInstructions
          ? recipe.analyzedInstructions.map((instruction, i) =>
              instruction.steps.map((step, j) => <p key={j}>{step.step}</p>)
            )
          : null}
      </div>
    </div>
  );
}

export default Recipe;
