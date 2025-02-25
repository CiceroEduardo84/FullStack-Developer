// Shallow copy (cópia superficial): não pega os itens aninhados.

const htmlCourse = {
  course: "HTML",
  students: [{ name: "Rodrigo", email: "rodrigo@gmail.com" }],
};

/*
const jsCouse = {
  ...htmlCourse,
  course: "JavaScript",
};
*/

// Vai modificar o htmlCourse também students é uma referênica e não uma cópia.
// jsCouse.students.push({ name: "João", email: "Joao@gmail.com" });

// Deep copy (cópia profunda)
/*
const jsCouse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [...htmlCourse.students, { name: "João", email: "Joao@gmail.com" }],
};

jsCouse.students.push({ name: "Maria", email: "Maria@gmail.com" });
*/

const jsCouse = {
  ...htmlCourse,
  course: "JavaScript",
};

jsCouse.students = [
  ...htmlCourse.students,
  { name: "João", email: "Joao@gmail.com" },
];

console.log(htmlCourse, jsCouse);
