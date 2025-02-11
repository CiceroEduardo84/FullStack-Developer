// Break encerra a execução da repetição ou switch para seguir para a instrução seguinte.

/*let option = 3;

switch (option) {
  case 1:
    console.log("Cadastrar");
    break;
  case 2:
    console.log("Atualizar");
    break;
  case 3:
    console.log("Remover");
    break;
  default:
    console.log("Opção inválida");
    break;
}*/

// Ultilizando o break para finalizar a repetição
for (let i = 0; i < 10; i++) {
  if (i === 5) break;

  console.log(i);
}
