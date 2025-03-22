# [[Node]] - Como o node lida com requisições HTTP

## Enviando dados
Quando um cliente (como um navegador) envia uma requisição HTTP para uma servidor, essa requisição pode incluir dados em um corpo(body).

![[comunicacao_do_node.png]]

Quando uma requisição chega ao servidor, o corpo da requisição não é imediatamente deponível como uma propriedade simples. Isso ocorre porque o corpo pode ser grande e chega ao servidor como uma fluxo (stream) de dados, dividido em pedaços(chunks)

![[chunks_exemplo.png]]

