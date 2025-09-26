# [[Docker]] - Efêmero
Característica do que é temporário
## Um container é efêmero
Containers são projetados para serem descartáveis e podem ser facilmente parados, destruído ou substituídos. Portanto, se você precisar armazenar dados, é recomendado utilizar ambiente externo ao container.

Se os dados dentro de um container efêmero não foram armazenados externamente(por exemplo, em volumes), esses dados serão perdidos quando o container for encerrado ou removido.

