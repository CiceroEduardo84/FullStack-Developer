// Arrow Function (função de seta)

const showMessage1 = () => {
  console.log("Óla");
};

console.log(showMessage1);
showMessage1();

const showMessage2 = (username, email) => {
  // console.log("Óla, ", username, ". Seu email é ", email);

  console.log(`Óla ${username}. Seu email é: ${email}`);
};

showMessage2("Maria", "maria@email.com");
