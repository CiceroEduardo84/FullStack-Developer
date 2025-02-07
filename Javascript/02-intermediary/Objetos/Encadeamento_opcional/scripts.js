/*
  OPTIONAL CHAINING (?.) - encadeamento opcional
  Se a propriedade ou função chamada é nulish (null or undefined) a expressão retorna undefined em vez de gerar um erro.

  Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.
*/

const user = {
  id: 1,
  name: "Rodrigo",
  // address: {
  //   street: "Avenida Brasil",
  //   city: "São Paulo",
  //   geo: {
  //     latitude: 47.808,
  //     langitude: 17.5674,
  //   },
  // },
  message: function () {
    console.log(`Olá, ${this.name}`);
  },
};

console.log(user?.address);
console.log(user?.address?.street);

user.message?.();

console.log(user.address.street);
