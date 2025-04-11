# [[Database]] - Tipos de dados

Os tipos de dados determinam qual será o conteúdo de cada dado.
Ou seja, que tipo de dado cada coluna irá armazenar em uma tabela.

![[tipos de dados.png]]

## Tipos de dados
O SQLite possui cinco tipos de dados que determinam como os valores são armazenados no banco de dados.

- **NULL:** Representa um valor nulo ou inexistente (quando um campo em uma tabela não contém nenhum dado, ele armazena o valor NULL).
- **INTEGER:** Um valor numérico inteiro, que pode ser positivo ou negativo. Utilizado para armazenar números inteiros sem casas decimais.
- **REAL:** Um valor numérico de ponto flutuante (número com casas decimais). Usado para armazenar valores que exigem precisão decimal, como medições ou cálculos finandceiros.
- **TEXT:** Uma sequência de caracteres de texto. Utilizado para texto como nomes, descrições ou qualquer outro tipo de dados baseados em texto.
- **BLOB:** Dados binários grandes (Binary Large Object). Armazena dados binários, como imagens, arquivos ou qualquer tipo de dados que não seja convertido automaticamente.