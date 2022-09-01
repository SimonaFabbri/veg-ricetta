export const styleButton = {
  display: "inlineBlock",
  backgroundColor: "black",
  boxShadow: "0px 15px 10px -10px gray",
  height: "60px",
  color: "white",
  lineHeight: "50px",
  marginLeft: "30px",
  borderRadius: "7px",
  padding: "0px 30px",
  transition: "all 2s",
  color: "white",
};
export function MouseOverButton(event) {
  event.target.style.transform = "translateY(-10px)";
  event.target.style.boxShadow = "0px 25px 10px -10px gray";
}
export function MouseOutButton(event) {
  event.target.style.transform = "translateY(10px)";
  event.target.style.boxShadow = "0px 15px 10px -10px gray";
}

export function onClickButton(event) {
  event.target.style.backgroundColor = "white";
  event.target.style.color = "black ";
}
