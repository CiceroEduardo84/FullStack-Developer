/*
  FOR repete até que a condição especificada seja FALSA

  - variável de controle
  - condição
  - incremento ou decremento da variável de controle
*/
/*
for (step = 0; step < 10; step++) {
  console.log(step);
}

// Exemplo de tabuada.
console.log("### TABUADA ###");
console.log(`7 X 0 =${7 * 0}`);
console.log(`7 X 1 =${7 * 1}`);
console.log(`7 X 2 =${7 * 2}`);
console.log(`7 X 3 =${7 * 3}`);
console.log(`7 X 4 =${7 * 4}`);
console.log(`7 X 5 =${7 * 5}`);
console.log(`7 X 6 =${7 * 6}`);
console.log(`7 X 7 =${7 * 7}`);
console.log(`7 X 8 =${7 * 8}`);
console.log(`7 X 9 =${7 * 9}`);
console.log(`7 X 10 =${7 * 10}`);
*/

let number = 7;
for (step = 0; step <= 10; step++) {
  console.log(`${number} x ${step} = ${number * step}`);
}
