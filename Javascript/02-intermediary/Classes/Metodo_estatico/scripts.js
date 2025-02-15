class User {
  static showMessage(message) {
    // Usando o static posso acessar o metodo sem instânciar a classe
    console.log();
  }
}

// const user = new User();
// user.showMessage();

User.showMessage("Essa é uma mensagem");
