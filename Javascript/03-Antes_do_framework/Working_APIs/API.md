# [[Javascript]] - API

Uma API(Application Programming Interface) é uma Interface que disponibiliza um conjunto de funcionalidades para serem utilizadas.

Ex: API de CEP, previsão do tempo, cotação de moedas, etc.

## Relação Cliente Servidor

![[clienteServidor.png]]

## Ultilizando uma API

A    ---                  Rota=Caminho                    ---  B
APP --- https://meuservidor.com.br/products ---  API

https = Protocolo de comunicação
meuservidor.com.br = Endereço do servidor
products = Recurso da API

## Métodos HTTP

- GET = Leitura
- POST = Criação
- PUT = Atualização
- DELETE = Deleção
- PATCH = Atualização parcial

## JSON
O JSON(JavaScript Object Notation), é uma notação de objetos utilizado para representar dados.

É amplamente utilizado na comunicação entres servidores e clientes.

### Exemplo:
{
	chave: valor
}

```JSON
{
	"user":{
		"id":787878,
		"name":"Teste teste",
		"address":{
			"street":"Rua A",
			"country":"Brazil"
		}
	},
	"books":[
		{
			"id":123,
			"title":"Js",
			"value":150
		},
		{
			"id":124,
			"title":"CSS",
			"value":90
		}
	]
}
```
