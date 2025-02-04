/* 
  FALSY: quando um valor considerado False e Truthy quando é considerado verdadeiro em contextos onde um boolean é obrigatório(considionais e loops).
*/

console.log("### Exemplos de FALSY");
console.log(false ? "VERDADEIRO" : "FALSO");
console.log(0 ? "VERDADEIRO" : "FALSO");
console.log(-0 ? "VERDADEIRO" : "FALSO");
console.log("" ? "VERDADEIRO" : "FALSO");
console.log(null ? "VERDADEIRO" : "FALSO");
console.log(undefined ? "VERDADEIRO" : "FALSO");
console.log(NaN ? "VERDADEIRO" : "FALSO");

console.log("### Exemplos de TRUTHY");
console.log(true ? "VERDADEIRO" : "FALSO");
console.log({} ? "VERDADEIRO" : "FALSO");
console.log([] ? "VERDADEIRO" : "FALSO");
console.log(1 ? "VERDADEIRO" : "FALSO");
console.log(3.23 ? "VERDADEIRO" : "FALSO");
console.log("0" ? "VERDADEIRO" : "FALSO");
console.log(" " ? "VERDADEIRO" : "FALSO");
console.log("test" ? "VERDADEIRO" : "FALSO");
console.log("false" ? "VERDADEIRO" : "FALSO");
console.log(-1 ? "VERDADEIRO" : "FALSO");
console.log(Infinity ? "VERDADEIRO" : "FALSO");
console.log(-Infinity ? "VERDADEIRO" : "FALSO");