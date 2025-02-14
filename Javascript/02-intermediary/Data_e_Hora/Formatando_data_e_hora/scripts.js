let date = new Date("2024-07-02T14:30:00");

// Formata para o dia sempre ter 2 digitos
console.log(date.getDate().toString().padStart(2, "0"));

// Formata para o mês sempre ter 2 digitos
let month = (date.getMonth() + 1).toString().padStart(2, "0");
console.log(month);

let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

console.log(`${day}/${month}/${year} ás ${hour}:${minute}`);
