let one = 1;
let two = 2;

let balance = 500;
let payment = 120;

// == igual a

console.log("Igual a:");
console.log(one == two);
console.log(one == 1);
console.log(one == "1");

// != diferente de
console.log("Diferente de");
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// === estritamente igual a (tipo e valor)

console.log(one === 1);
console.log(one === "1");

// !== estritamente diferente de (tipo e valor)
console.log(one !== two);
console.log(one !== 1);
console.log(two !== 2);
console.log(two !== "2");

// > maior que
console.log(balance > payment);

// < menor que
console.log(balance < payment);

// >= maior ou igual que
console.log(balance >= payment);

// <= menor ou igual que
console.log(balance <= payment);