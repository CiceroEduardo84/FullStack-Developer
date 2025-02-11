// for...in executa iterações a partir de um objeto e percorre as propriedades.

let person = {
  name: "Rodrigo",
  surname: "Gonçalves",
  email: "rodrigo@email.com",
};

let steps = 1;

for (let property in person) {
  console.log(steps);

  // Exibe o nome da propriedade.
  console.log(property);
  // Exibe o conteúdo da propriedade.
  console.log(person[property]);

  steps++;
}

let students = ["Rodrigo", "João", "Amanda"];

for (let index in students) {
  // console.log(index);
  console.log(students[index]);
}
