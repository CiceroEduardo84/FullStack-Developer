let fruits = ["Apple", "Watermelon", "Strawberry"];
// console.log(fruits);

// Encontra e retorna o indice do elemento no Array.
let position = fruits.indexOf("Watermelon");
console.log(position);

// Remove a partir do índice.
// fruits.splice(1, 3);
fruits.splice(position, 1);
console.log(fruits);
