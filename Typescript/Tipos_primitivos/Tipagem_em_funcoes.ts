function sum(x: number, y: number): number {
  const result = x + y;
  console.log("Resultado = " + result);

  return result;
}

const result = sum(7, 8);

const showMessage = (name: string): string => {
  const message = "Óla" + name;

  return message;
};

showMessage("Teste teste");
