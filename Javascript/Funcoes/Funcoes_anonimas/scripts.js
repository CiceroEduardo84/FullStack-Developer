// Função anônima (Função que não possui nome)

const showMessage1 = function () {
  console.log("Hello Word!");
};

console.log(showMessage1);
console.log(showMessage1());

const showMessage2 = function (message, name) {
  return message + name;
};

console.log(showMessage2("Olá", "test"));
