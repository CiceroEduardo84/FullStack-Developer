const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez submit no fomrulário 1");
};

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez submit no fomrulário 2");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez submit no fomrulário 3");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez submit no fomrulário 4");
});