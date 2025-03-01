# [[Javascript]] - Event Loop

## Características

-> Single Threaded
Executa uma coisa por vez

-> No-blocking
Não trava o contexto da execução.

-> Asynchronous
Por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas.

-> Concurrent
As tarefas que executam assíncronamente concorrem uma com as outras pelo processamento.

## Concorrência e Event Loop
O javascript possui um modelo de concorrência baseado em um event loop responsável por gerenciar a execução de código assíncrono e eventos em um único thread, permitindo que o Javascript seja não bloqueante.

![[Eventloop.png]]

## Event Loop

Tudo passa pela Call Stack. Algumas tarefas serão resolvidas nele mesmo e outras somente irá passar pela Call Stack sem fazer nada e será resolvida em alguma Web API.

O Event Loop é quem fica chegando constantemente a Call Stack e Callback Queue.

## Micro e Macro Tasks

Existem dois tipos de tarefas na fila de callback:

- Microtasks
	São tarefas de alta prioridade que são executasdas antes das Macrotasks(temporizadores e promises) 

- Macrotasks:
	São tarefas de menos prioridade, como callbacks de eventos, setTimeout e setInterval.

## RESUMO
1.Execução de código: O código síncrono é executado de cima para baixo, empilhando e desempilhando funções conforme necessário.

2.Eventos Assíncronos: Quando ocorrem eventos assíncronos. como uma requisição concluída, o callback correspondente é enfileirado na fila de callback.

3.Verificação do Event Loop: O event loop verifica a pilha de chamadas e a fila de callback. Se a pilha estiver vazia, ele move um callback da fila de callback.

4.Microtasks: Antes de verificar novamente a fila de callback, o Event Loop executas todas as microtasks pendentes.