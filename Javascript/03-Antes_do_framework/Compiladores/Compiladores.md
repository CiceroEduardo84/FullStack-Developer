# [[Javascript]] - Compiladores

Converte código escrito em uma versão específica do JavaScript (ECMAScript) para outra versão, permitindo usar recursos mais recentes da linguagem mesmo em ambientes que não oferecem suporte a essas funcionalidades (Por exemplo, em navegadores mais antigos).

## Transpilação
A transpilação também é um termo utilizado para se referir a compilação para versões anteriores.

1° Etapa - Parser: Mapeia todos os elementos do código js
2° Etapa - Transformer: Manipula os elementos js para gerar o código compatível
3° Etapa - Generator: Gera o código js

## Exemplo:

```js
// Código do Babel com preset es2016
"use strict";

(x,y) => {return x+ y}
```

```js
// Código Babel com preset es2015
"use strict";

(function (x,y){
return x + y;
});
```

## Motivação
São essenciais para a evolução contínua da linguagem.
Porque permite utilizar as novidades da linguagem mesmo em ambientes que não oferecem suporte a elas.

Além disso, facilitam a interoperabilidade entre diferentes ferramentas e bibliotecas que podem ser escritas em versões diferentes do ECMAScript.