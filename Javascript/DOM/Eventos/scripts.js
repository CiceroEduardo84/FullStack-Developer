window.addEventListener("load", () => {
  console.log("A página foi carregada!");
});

addEventListener("click", (event) => {
  event.preventDefault();

  // Retorna todas as informações do evento.
  // console.log(event);

  // Retorna o elemento clicado.
  console.log(event.target);

  // Retorna o texto do elemento clicado.
  console.log(event.target.textContent);
});
