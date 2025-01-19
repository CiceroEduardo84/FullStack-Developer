/* 
  - Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função.
  - Argumentos: é o valor que é passado para a função.
*/

// Passando o parâmetro username.
function message(username) {
  console.log("Olá", username);
}

// Passando argumentos
message("João");
message("Ana");

function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);
sum(7, 3);

//Definindo um valor (argumento) padrão.
function jointext(text1, text2 = "", text3 = "") {
  console.log(text1, text2, text3);
}

jointext("Rodrigo", "Gonçalves", "Santana");
jointext("Santana", "Gonçalves", "Rodrigo");

jointext("Rodrigo", "Gonçalves");
