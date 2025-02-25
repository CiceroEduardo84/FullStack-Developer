const book = {
  title: "Objetos imutáveis",
  category: "Javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
  },
};

const updateBook = {
  ...book,
  title: "Criando um font-end moderno com Html",
  category: "html",
  type: "Programing",
};

// Original Intacto
console.log(book);

// Modificado
console.log(updateBook);

// ultilizando operator de desestruturação (rest operator) para remover propriedades

const { category, ...bookWithoutCategory } = book;
console.log(bookWithoutCategory);
