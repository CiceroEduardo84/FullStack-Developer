//console.log(user); // Consigo usar, porém ainda não ha nada dentro dela.
var user = "Rodrigo";
console.log(user);

// Hoisting
// var user;
// console.log(user);

// Escopo global
var email = "joão@email.com";

{
  //Escopo de bloco
  console.log(email);
}

{
  var age = 18;
}

console.log(age);

// let address = "Rua X";
{
  console.log(address);
  let address = "Rua X";
  console.log(address);
}
