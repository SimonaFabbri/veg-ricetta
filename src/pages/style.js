export const styleBox = { padding: "50px 50px 50px 50px" };
export const styleBoxMobile = {
  textAlign: "center",
  padding: "20px 20px 20px 20px",
  width: "100%",
};

export const styleText = {
  color: "white",
};

export const containerForm = {
  display: "flex",
};

export const styleForm = {
  height: "60px",
  backgroundColor: "black",
  color: "white",
  width: "230px",
  borderRadius: "5px",
};

export const styleRecipes = {
  paddingBottom: "50px",
  display: "flex",
  paddingTop: "50px",
  alignItems: "center",
  textDecoration: "none",
};

export const styleRecipesMobile = {
  ...styleRecipes,
  display: "block",
  paddingRight: "0px",
  textAlign: "center",
};

export const imageStyle = {
  display: "block",
  maxWidth: "100%",
};

export const errorStyle = { color: "red" };

export function MouseOver(event) {
  event.target.style.opacity = "0.5";
}
export function MouseOut(event) {
  event.target.style.opacity = "1";
}
