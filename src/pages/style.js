export const styleBox = { paddingLeft: "100px" };
export const styleBoxMobile = { paddingLeft: "40px" };

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
  paddingRight: "50px",
  marginRight: "100px",
  textDecoration: "none",
};

export const styleRecipesMobile = {
  ...styleRecipes,
  display: "block",
  paddingRight: "0px",
  textAlign: "center",
};

export const errorStyle = { color: "red" };

export function MouseOver(event) {
  event.target.style.opacity = "0.5";
}
export function MouseOut(event) {
  event.target.style.opacity = "1";
}
