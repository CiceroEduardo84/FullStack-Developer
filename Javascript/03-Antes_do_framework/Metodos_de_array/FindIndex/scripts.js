// O método findIndex() retorna o indice no array do primeiro elemento que satisfazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
const values = [4, 6, 8, 12];

// Obtendo o primeiro indice do elemento que o valor e maior do que 4.
const index = values.findIndex((value) => value > 4);
console.log(index);
console.log(value[index]);

// Exemplo de quando não encontra
console.log(values.findIndex((value) => value > 12));
