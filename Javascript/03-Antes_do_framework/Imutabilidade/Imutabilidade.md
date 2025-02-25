# [[Javascript]] - Imutabilidade

Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma cópia modificada para manter o original inalterado.

## Exemplo:
O address2 não é uma cópia de address1
Será uma referência.

O address2 vai modificar o address1, Porque address2 faz referência a address1 e não um novo objeto na memória.
```JS
const address1 = {
	street:"Av. Brasil",
	number:20,
};

const address2 = address1;
address2.number = 30;
```

# Estratégia
Geralmente há duas maneiras de alterar dados. A primeira é mutar o dado alterando diretamente seu valor.

A segunda é substituir o dado antigo por uma nova cópia com as alterações desejadas.
## Exemplo:
Cria um novo objeto na memória chamado address2 com as propriedades e valores do address1.

```JS
const address1 = {
	street:"Av. Brasil",
	number:20,
};

// const address2 = address1;
const address2 = {...address1};
address2.number = 30;
```

## Na criação de interface
A imutabilidade é utilizada para otimizar a atualização do DOM(Document Object Model)
e para fornecer um modelo mais previsível no desenvolvimento de interfaces(UI).

## Detectar Mudanças
Detectar mudanças e objetos mutados é difícil, como eles são modificados diretamente a detecção do que mudou exatamente requer um objeto mutado para ser comparado com as cópias das suas próprias versões anteriores e a árvore inteira do objeto para ser cruzada.

Detectar mudanças em objetos imutáveis é consideravelmente fácil. Se ele for diferente do anterior, concluímos que o objeto foi alterado.

==Antes==-----algo mudou?--->depois

## Benefício
Como os dados imutáveis podem determinar facilmente se acorreram alterações, isso também ajuda a determinar quando um componente deve ser renderizado novamente.

{ } { } { } { } {Mudou} { }
			|
atualiza(renderiza) o objeto que mudou na tela