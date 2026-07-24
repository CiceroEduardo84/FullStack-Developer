# [[React]] - Estados e Renderização

## Render
Antes dos componentes sere exibidos na tela eles devem ser renderizados pelo React.

Imagine que seus componentes são cozinheiros na cozinha montando pratos do restaurante a partir dos ingredientes.

Nesse cenário o React é o garçom que faz os pedidos dos clientes e entrega os seus pedidos.
Esse processo tem três etapas:

### Etapa 1 - Acionar

Há duas razões para um componente ser renderizado
1. **Quando é a renderização inicial do componente.**
	Quando o seu aplicativo é iniciado a renderização inicial é iniciada.
2. **O estado do componente mudou.**
	A atualização do estado do componente enfileira automaticamente um renderização. Você pode imaginar o cliente do restaurante pedindo mais coisas.

![[rerenderizacao.png]]

### Etapa 2 - React renderiza seus componentes

Depois de acionar uma renderização o React chama seus componentes para descobrir o que exibir na tela.
O **Rendering** é o React chamando seus componentes.
Na **renderização inicial**, o React chamará o componente raiz.
Para renderização o React chamará o componente de função cuja atualização de estado acionou a renderização.

**Esse processo e recursivo.** O componente também pode disparar um gatilho para renderizar algo em seguida, e assim por diante.
O processo continuará até que não haja mais componentes aninhados e o  React saiba exatamente o que deve ser exibido na tela.

### Etapa 3 - React confirma as alterações na DOM

Após renderizar(chamar) seus componentes, o React modificará o DOM.

Para **renderização inicial** o React usará a API DOM para colocar todos os nós DOM criados na tela.

Para **re-renderização** o React aplicará as operações mínimas necessárias (calculadas durante a renderização) para fazer o DOM corresponder a saída de renderização mais recente.

**O React só altera os nós DOM se houver um diferença entre as renderizações.**