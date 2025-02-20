// O atrict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javscript.

function showMessage() {
  "use strict";

  personName = "Teste";
  console.log("Olá", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let studnet = new Student();
// Tenta mudar em um orioriedade
// studnet.point = 10;

// Tentando deletar uma propriedades de um um onjeto que passa
// studnet.point;
// delete windows.document

// Quando passamos paramtros diplicados.
function sum(a, a, c) {
  return a + a + c;
}

const result = sum(1, 3, 2); // 3+3+2 = 8
console.log("RESULTADO:", result);
