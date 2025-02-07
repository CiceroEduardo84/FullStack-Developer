let message = "Estou estudando os fundamentos de JS!";

// Substituir parte de um texto
/*console.log(message.replace("JS", "Javascript"));
console.log(message);
*/

// Extraindo uma parte da string (start, end)
console.log(message.slice(6, 30));

// Extraindo uma parte da string de trás pra frente
console.log(message.slice(-11));

//Remover espaços em brancos
let textWithSpace = "    Texto de exemplo   ";
//Remove no incio e no final da string
console.log(textWithSpace.trim().length);
