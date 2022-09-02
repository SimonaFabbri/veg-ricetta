import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { getRecipe } from "../../utils/api";
import {
  styleText,
  errorStyle,
  styleBox,
  styleBoxMobile,
  imageStyle,
} from "../style";

function Recipe() {
  const [recipe, setRecipe] = React.useState([]);
  const [error, setError] = React.useState("");

  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    getRecipe(params.id).then((returnRecipe) => {
      if (returnRecipe.recipe) {
        setRecipe(returnRecipe.recipe);
      }

      if (returnRecipe.error) {
        setError(returnRecipe.error);
      }
    });
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 660 });

  return (
    <div style={isMobile ? styleBoxMobile : styleBox}>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1 style={styleText}>{recipe.title}</h1>;
      <img style={imageStyle} src={recipe.image} />
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
