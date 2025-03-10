# [[Javascript]] - Bundlers

Agrupa(empacota) diversos arquivos e suas dependências em um ou mais pacotes com o objetivo de otimizar o carregamento de páginas web.

## Exemplo:
O bundler agrupa(empacota) os arquivos e suas dependências em um único arquivo.

```html
<script type="module" src="test1.js"></script>
<script type="module" src="test2.js"></script>
<script type="module" src="test3.js"></script>
<script type="module" src="test4.js"></script>
```

```html
<script type="module" src="bundle.js"></script>
```

## Funcionamento
No geral, a operação de um empacotador é dividida em duas etapas:
Geração do gráfico de dependência e empacotamento.

### Mapeando um gráfico de dependências
A primeira coisa que um empacotador de módulo fez é gerar um mapa de relacionamento de todos os arquivos servidos. Este processo é denominado resolução de dependências.

O empacotador requer um arquivo de entrada(geralmente o arquivo principal). Em seguida analisa o arquivo de entrada para entender suas dependências.

Depois disso, ele percorre as dependências para determinar as dependências dessas dependências.
![[arvore.png]]
## Agrupamento

Depois de receber entradas e passar por suas dependências durante a fase de Resolução de Depêndencias, um bundler entrega ativos estáticos que o navegador pode processar com êxito.

Este estágio de saída é denominado Packing. Durante esse processo, o empacotador aproveitará a resolução de dependência para integrar nossos vários arquivos de código é retornar um único pacote para o navegador carregar.