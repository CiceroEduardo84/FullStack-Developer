# [[Node]] - API RESTFull

## API:
Application Programming Interface(Interface de programação aplicada) oferece funcionalidades sem a necessidade de saber como foram implementados (um conjunto de funcionalidades para serem utilizada/consumidas).

![[API.png]]

## API RESTFull:
Uma API RESTFull (ou API REST) é uma API(interface de programação de aplicações) que segue os princípios da arquitetura REST(Representational State Transfer).

REST é o modelo de arquitetura e não uma linguagem ou tecnologia de programação, que fornece diretrizes para criar aplicações distribuídas que se comuniquem utilizando os princípios protocolos da Web, como por exemplo, o protocolo HTTP.

As APIs RESTFull são amplamente utilizadas na web devido á sua simplicidade e escalabilidade.

### Princípios de uma API REST:

- **Cliente-Servidor**: separa a interface do usuário(cliente) das preocupações de armazenamento(servidor).
- **Stateless**: Cada requisição do cliente para o servidor deve conter todas as informações necessárias para o servidor entender e processsar a requisição. O servidor não armazena nenhuma informação sobre o estado do cliente entre as requisições.
- **Resource-Based**: Ao projetar uma API de acordo com a abordagem "Resource-Based", você está seguindo a restrição de uma interface uniforme ao criar recursos claramente identificados e definir como eles podem ser manipulados usando métodos HTPP específicos.
- **Manipulation of Resorces Through Representations**: em uma arquitetura REST, os recursos são manipulados ou modificados não diretamente, mas sim por meio de representações desses recursos. Por exemplo, no formato JSON.
- **Layered System**: O princípio (sistema em camadas) ajuda a organizar e simplificar sistemas complexos, promovendo a modularidade, escalabilidade e flexibilidade. Isso ajuda na separação de responsabilidades para alcançar uma arquitetura eficaz e de fácil manutenção.
- **Cacheable**: Destaca a importância de permitir que as respostas  da API sejam armazenadas em cache temporariamente no lado do cliente, melhorando o desempenho, a eficiência e a escalabilidade do sistema. Esse princípio incentiva a reutilização de recursos obtidos em vez de buscar repetidamente as mesmas informações do servidor.