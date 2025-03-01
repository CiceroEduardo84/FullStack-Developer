// (1) Executa o código de forma síncrona e o valor 1 é impresso imediatamente no console.
console.log(1);

//(3) Microtasks são exexutadas antes de temporizadores e primisses.
queueMicrotask(() => {
  console.log(2);
});

//(5) Macrotasks que aguarda o evento de temporizador ser acionados.
setTimeout(() => {
  console.log(3);
}, 1000);

// (2) Executa síncrona
console.log(4);

//(4) Adiciona uma microtask
Promise.resolve(true).then(() => {
  console.log(5);
});
