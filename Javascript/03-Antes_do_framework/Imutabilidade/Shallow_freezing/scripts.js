const book = {
  title: "Objetos imitáveis",
  category: "javascript",
  author: {
    name: "rodrigo",
    email: "rodrigo@gmail.com",
  },
};

// O javascript em si não impõe rstrições á modificação dos objetos.
// book.category = "HTML";

// Congelar o objeto e impede a modificação.
Object.freeze(book);
book.category = "CSS"; // não modifica

// O Object.freeze() não impede modificações profundas em objetos aninhados(Shallow freezing).
book.author.name = "joão";
console.log(book);
