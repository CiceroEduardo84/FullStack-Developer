// Visualizar o conteúdo do document.
// console.log(document);

// Obter o title da página.
console.log(document.title);

// Acessar o elemento pelo ID (SELETOR ID)
const guest = document.getElementById("guest-2");
console.log(guest);

// Mostra as propriedades do objeto.
console.dir(guest);

// Acessar elemento com class (SELECTOR Class)

const guestByClass = document.getElementsByClassName("guest");
console.log(guestByClass);

// Exibir o primeiro elemento da lista
console.log(guestByClass.item(0));
console.log(guestByClass[1]);

// Selecionar list elementos pela tag
const guestsByTag = document.getElementsByTagName("li");
console.log(guestsByTag);
