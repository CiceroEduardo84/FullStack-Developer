// for...of itera sobre valores de um objeto iterável.
let students = ["John", "Amanda", "Rodrigo"];

for (let student of students) {
  console.log(students);
}

let user = [
  {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
];

for (const value of user) {
  console.log(value.name);
}
