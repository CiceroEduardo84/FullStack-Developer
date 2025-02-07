const creditCard = "1234567812344928";
// console.log(creditCard.length);

// Pega o 4 últimos digitos
const lastDigits = creditCars.slice(-4);
// console.log(lastDigts);

// O padstart preenche a string no início.
const maskedNumber = lastDigits.padStar(creditCard.length, "X");

console.log(maskedNumber);

// O padEnd preenche a string fínal.
const number = "123";
console.log(number.padEnd(10, "#"));
