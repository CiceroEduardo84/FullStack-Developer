# [[Javascript]] - Prototype chain
Herança e cadeia de protótipos

## Classes X Prototype

JavaScript é dinâmico e não dispões de uma implementação de uma class(a palavra-chave class foi introduzida no ES2015, mas é syntax sugar, o JavaScript permanece baseado em prototype).


# Prototype
 Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado prototype.

 O objeto prototype também tem um atributo prototype, e assim por diante, até o que o valor null seja encontrado como sendo o seu prototype. O null que, por definições, não tem prototype, e age como um link final nesta cadeia de protótipos(prototype chain).

### Prototype chain

```JS
["Rodrigo","João","Ana"] -> Array.prototype -> Object.prototype -> null
```

## Resumo
 - Quando um objeto é criado ele possui automaticamente uma propriedade que referência outro objeto e esse objeto é chamado de Prototype;
 - O objeto prototype herda propriedades e métodos do seu protótipo ascendente. Essa propriedade não pertence ao objeto em si, mas sim ao prototype do objeto;
 - O prototype é o mecanismo pelo qual os objetos JavaScript herdam recursos uns dos outros;
 - A cadeia termina quando chegamos a um protótipo que tem null por protótipo;
 - Um objeto pode utilizar qualquer propriedade ou método que existir nesse encadeamento de Protótipos.