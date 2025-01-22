const input = document.querySelector("input");

// keydown - quando uma tecla é pressionada (captura tudo, incluindo  CTRL, SHIFT, etc.)
/*input.addEventListener("keydown", (event) => {
  console.log(event.key);
});*/

// ketpress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
input.addEventListener("keypress", (event) => {
  console.log(event);
});

input.onchange = () => {
  inputChange();
  // console.log("O input mudou!");
};

function inputChange() {
  console.log("O input mudou!");
}
