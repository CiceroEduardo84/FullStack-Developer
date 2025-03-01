// Função que retorna uma Promise.

function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona.
    setInterval(() => {
      const isSucess = true;

      if (isSucess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo deu errado!");
      }
    }, 3000); // Simula uma operação que leva 3 segundos
  });
}

// visualizando o retorno é uma primise
// console.log(asyncFunction());

console.log("Executando função assíncrona!");

// const response = asyncFunction();
// console.log(response);

asyncFunction()
  .then((reponse) => {
    console.log("SUCESSO:", reponse);
  })
  .catch((error) => {
    console.log("Erro:", error);
  })
  .finally(() => {
    console.log("fim da execução");
  });
