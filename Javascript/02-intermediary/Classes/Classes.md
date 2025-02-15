# [[Javascript]] - Classes
No javascript as classes são uma forma de criar objetos de definir seu comportamento por meio de construtores e métodos.

Elas foram introduzidas no ECMAScript 2015 (também conhecido como ES6) para fornecer uma sintaxe mais amigável para a criação de objetos e heranças de protótipos(syntax sugar).

## Construtores e Métodos
Uma classe é basicamente um modelo para criar objetos.
Ela contém um construtor, que é um método especial chamado quando um objeto é instanciado a partir da classe.

Além do construtor, você pode adicionar métodos a uma classe. Métodos são funções associadas a objetos e descrevem o comportamento desses objetos.

```JS
class Animal{
	// Construtor
	constructor(name){
		this.name = name;
	}

	// Método
	makeSound(){
		console.log("Some generic sound");
	}
}
```

## Herança
Uma classe pode herdar propriedades e métodos de outras classe. Permitindo a reutilização de código.

```JS
class Dog extends Animal{
	// Sobrescrevendo o método makeSound
	makeSound(){
		console.log("Woof! Woof!");
	}
	
	// Novo método específico para a classe Dog
	fetch(){
		console.log("Fetching the ball");
	}
}
```
