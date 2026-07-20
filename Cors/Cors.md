# [[Node]] - Cors(Cross-Origin Resource Sharing)

É uma funcionalidade de segurança que permite que uma página web acesse recursos de outra origem.

![[cors.png]]

## Como funciona?

- O CORS é ativado quando uma página tenta acessar um recurso de um origem diferente daquela que a serviu.
- O CORS adiciona cabeçalhos HTTP que informam ao navegador se deve permitir o acesso aos dados solicitados.
- O cabeçalho CORS incluem Access-Control-Allow-Origin, Access-Control-Allow-Credentials, entre outros.
- O servidor verifica o cabeçalho da origem atual e responde com os dados solicitados.
- O navegador visualiza os cabeçalhos de solicitação de controle de acesso e compartilha os dados retornados com a aplicação cliente.