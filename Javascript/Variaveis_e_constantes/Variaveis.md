# [[Javascript]]-Variáveis

![variáveis](exemple_variable.png)

### O que é?

- São espaços reservados da memória RAM(Random Access Memory) do computador para armazenar algo temporariamente.

### Exemplo:

- O armário é a memória.
- As gavetas são espaços na memória para guardar(armazenar) algo.
- Nome para identificar a variável.
  A variável pode variar.

## Tipos

### Var

- Declara uma vriavel.
  ```js
  var user;
  ```
  Obs: pode ser subescrita.

### Let

- Declarar variável sem valor

  ```js
  let user;
  ```

  Obs: Não permite criar uma variável com mesmo nome, difente do var

### Const

- Const declara variável com valor fixo (Não pode alterar)
  ```js
  const user;
  ```
  Obs: se tentar subescrever irá gerar um erro

## Case-Sensitive

Quando uma linguegm de programação é case-sensitive significa que ela é sensivel a letras maiúsculas e minúsculas.

```js
var product = "Teclado mecânico";
var Product = "Mouse gamer";
```
