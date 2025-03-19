# [[Node]]-Funcionamento do Node.js

## Ex: Cafeteria
Vamos utilizar como analogia uma cafeteria para compreender o funcionamento do Node.js

### Barista:
Imagine que a nossa cafeteria, há apenas um barista que faz todos os cafés.

Não importa quantos clientes entrem na cafeteria, apenas esse único barista estará lidando todos os pedidos.

Este barista trabalha de maneira muito eficiente, alternando rapidamente entre diferentes tarefas, mas nunca faz duas coisas exatamente ao mesmo tempo(Single Thread).

### Single Thread
No Node.js, há apenas uma única thread principal que executa o código JavaScript. Esse único thread é responsável por lidar com todas as requisições, executar funções e gerenciar operações de I/O(Input/Output).

 A eficiência vem do fato de que esse thread não fica bloqueada esperando que as operações de I/O terminem; em vez disso, ele delega essas operações e continua processando outras tarefas.
### Os pedidos:
imagine que o barista tem uma lista de tarefas para cada pedido. Cada vez que o barista pega o pedido, ele o coloca no topo da lista e começa a trabalhar nele. Quando ele termina uma tarefa, ele risca da lista e pega a próxima tarefa do topo.

A CallStack é como essa lista de tarefas. Cada função que precisa ser executada é colocada na pilha(stack). O Node.js executa a função no topo da pilha e quando essa função termina, ele a remove da pilha e passa para a próxima.

### O organizador:
Além do barista, a cafeteria tem um organizador que monitora a lista de tarefas de barista.

Quando o barista está ocupado, o organizador está atento ás tarefas que estão terminando(como um bolo sendo assado) garantindo que o barista nunca fique parado e continue trabalhando eficientemente.

O Event Loop é como esse organizador. Ele monitora a CallStack e a fila de eventos(event queue). Se a CallStack estiver vazia, ele pega a próxima tarefa da fila de eventos e a coloca na Call Stack para ser executada.
![[event-loop.png]]

