showMessage("Olá, Test");

function showMessage(message) {
  console.log(message);
  endLine();

  function endLine() {
    console.log("----------");
  }
}

showMessage("Tudo bem?");

// Não existe nesse escopo.
endLine();
