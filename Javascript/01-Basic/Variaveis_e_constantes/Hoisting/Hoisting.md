# [[Variaveis]]-Hoisting

Significa levantar ou içar se refere ao comportamento do interpretador de mover as declarações de variáveis e funções para o topo do escopo em que foram definidas, antes mesmo da execução do código.

Esse comportamento possibilita usar uma variável ou função antes que ela esteja definida.
### Hoisting de variáveis
Todas as declarações de variáveis são movidas pro topo do seu [[Escopo]] independentemente de onde tenham sido declaradas, estará disponível para uso em todo o escopo em que foi definida.

###### Importante: 
Mesmo que sejam movidas para o topo do escopo ainda precisam ser declaradas antes de utilizadas. Caso contrario você recebera um referência indefinida(undefined).

### Hoisting de Funções
Todas as declarações de variáveis são movidas pro topo do seu [[Escopo]]. Isso significa que você pode chamar uma função antes mesmo de ser declarada.

Essa característica do JS permite que você organize seu código de forma mais intuitiva, definindo as funções em qualquer ordem que desejar.

![[scope.png]]

### Atenção: 

É importante notar que, embora o hoisting ocorra com var seu uso tem algumas desvantagens, como a falta de escopo de bloco adequado e a possibilidade de levar a comportamentos inesperados.

Devido a essa desvantagens, recomenda-se o uso de let e const em vez de var.
