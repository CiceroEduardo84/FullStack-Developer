const book = {
  title: "Objetos imitáveis",
  category: "javascript",
  author: {
    name: "rodrigo",
    email: "rodrigo@gmail.com",
  },
};

// Object.freeze(book);
// book.category = "css";
// book.author.name = "João";

// console.log(book);

function deepFreeze(object) {
  // Obtém um array com todas as propriedades do abjeto.
  const props = Reflect.ownKeys(object);

  // Itera sobre todas as propriedades do objeto
  for (const prop of props) {
    // Obtém o valor associado a propriedades atual
    const value = object[prop];

    // Verifica se o valor é um objeto ou uma função para continuas aplicando o deepFreeze em objetos aninhados.
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  // Retorna o objto congelado.
  return Object.freeze(object);
}

// Chama a função para completar o objeto com Deep Freeze (congelamento profundo)
deepFreeze(book);

book.category = "html";
book.author.name = "João";

console.log(book);
