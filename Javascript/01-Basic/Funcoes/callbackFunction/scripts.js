// CALLBACK FUNCTION: é uma função passada para outra função como um argumento.

function execute(taskName, callback) {
  console.log("Executando a tarefa: ", taskName);

  callback();
}

function callback() {
  console.log("Tarefa finalizada!");
}

// Passando para a função
execute("Download do arquivo...", callback);

// criando a função no próprio parâmetro (Função anônima).
execute("Upload do arquivo...", function () {
  console.log("Função callback com uma fnção anônima.");
});

// Ultilizando Arrow Functions
execute("Excluir arquivo...", () => {
  console.log("Arquivo excluído!");
});

// Menor
execute("Salvando arquivo...", () => console.log("Arquivo salvo!"));
