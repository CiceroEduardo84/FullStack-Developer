# [[JWT]] - Autenticação

A autenticação é o processo de verificar a identidade de um usuário. É como provar que a pessoa é quem ela diz ser.

## Fluxo de autenticação

Quando um usuário faz o login em uma aplicação, ela fornece credenciais(como: e-mail e senha) que são verificadas. Se as credenciais forem válidas o usuário será considerado autenticado.

![[Fluxo de autenticação.png]]

# Autorização
 
 A autorização define o que um usuário autentico pode ou não fazer dentro do sistema. Depois de identificado, o sistema verifica quais permissões o usuário tem.

## Fluxo de autorização

Um usuário pode estar autenticado no sistema, mas ainda assim não tem permissão para acessar um painel administrativo ou excluir dados. A autorização determina esse nível de acesso com base no papel(role) ou permissão atribuídas ao usuário.

![[Fluxo de autorização.png]]