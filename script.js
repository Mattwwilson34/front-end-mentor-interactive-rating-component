const card = document.querySelector(".card");
const star = document.querySelector(".circle-star");
const header = document.querySelector("h1");
const message = document.querySelector(".message");
const ratingContainer = document.querySelector(".rating-container");
const ratingCircles = document.querySelectorAll(".rating-circle");
const button = document.querySelector("button");

const clearActiveCircleClass = () => {
  ratingCircles.forEach((circle) => circle.classList.remove("active-circle"));
};

// handle click on rating circles
ratingCircles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    // check if circle already active
    if (circle.classList.contains("active-circle")) {
      return;
    }
    // remove all active circle classes
    clearActiveCircleClass();
    e.target.classList.toggle("active-circle");
  });
});

// get circle text value based on selection
const getCurrentSelection = () => {
  let currSelection = null;
  ratingCircles.forEach((circle) => {
    if (circle.classList.contains("active-circle")) {
      currSelection = circle.innerHTML;
    }
  });
  return currSelection;
};

// remove elemetns after submit
const clearElements = () => {
  star.remove();
  ratingContainer.remove();
  button.remove();
};

// add elements after submit
const addElements = () => {
  const currSelection = getCurrentSelection();
  const img = document.createElement("img");
  const p = document.createElement("p");

  img.classList.add("thank-you-svg");
  p.classList.add("thank-you-selection");

  img.src = "./images/illustration-thank-you.svg";
  p.innerText = `You selected ${currSelection} out of 5`;

  img.alt = "mobile phone with a receipt comming out of it";

  card.prepend(img, p);
};

// handle submit button click
button.addEventListener("click", () => {
  clearElements();
  addElements();

  card.classList.add("center");

  //change text of existing items
  header.textContent = "Thank You!";
  message.textContent =
    "We appreciate you taking the time to give nice a rating. If you ever need more support, don't hesitate to get in touch!";
});
