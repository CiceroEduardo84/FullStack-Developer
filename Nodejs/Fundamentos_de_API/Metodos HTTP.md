# [[Node]] - Metodos HTTP
Conjunto de métodos de requisição responsáveis por indicar a ação a ser executada.

- **GET**: Leitura
- **POST**: Criação
- **PUT**: Atualizar
- **DELETE**: Deletar
- **PATCH**: Atualização Parcial

## Exemplos de métodos HTTP
Mesma rota, porém ações diferentes

- **GET**: https://meuservidor.com.br/products
- **POST**: https://meuservidor.com.br/products

## HTTP response status code
Os códigos de status de resposta HTTP indicam o status de uma solicitação. Por exemplo, se uma solicitação HTTP específica foi concluída com êxito.

- **1xx**: Informativo
- **102**: Processando

- **2xx**: Sucesso.
- **200**: Requisição bem sucedida.
- **201**: Criado - geralmente usado para o POST após a inserção.

- **3xx**: Redirecionamento.
- **301**: Movido permanentemente.
- **302**: Movido.

- **4xx**: Erro cliente.
- **400**: Bad request.
- **401**: Não autorizado.
- **404**: Não encontrado.

- **5xx**: Erro no servidor.
- **500**: Erro interno.