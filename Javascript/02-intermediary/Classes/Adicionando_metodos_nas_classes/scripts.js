class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendEmail() {
    console.log(
      "E-mail enviado para",
      this.name,
      "para o endereço",
      this.email
    );
  }
}

const user = new User("Rodrigo", "rodrigo@email.com");
user.sendEmail();
