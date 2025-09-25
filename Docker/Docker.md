# Docker - O que é Docker?
O Docker é um sistema de virtualização não convencional.

## Virtualização não convencional
Em virtualização não convencional temos um software na máquina Host que irá gerenciar as máquinas virtuais(exemplos: VirtualBox, VMWare, Parallels e etc.)

Para cada máquina virtual temos uma instalação completa do Sistema Operacional que queremos virtualizar, além de ter o próprio hardware virtualizado.

## Container
Proporciona um ambiente isolado com o srecurso que a sua aplicação precisara para funcionar(como código, dependências e bibliotecas necessárias para executar a aplicação).

## Isolamento
 - Kernel:  É o coração de um sistema operacional que faz a ponte entre o software e  o hardware e controla processos, memória, dispositivos e chamadas  do sistema.
 - CGroups: É uma funcionalidade que controla e limita a alocação de recursos, tais como CPU, memória, etc. O objetivo é não deixar que um contêiner monopolize os recursos do host para ter um ambiente equilibrado.
 - Namespaces: Isola os recursos, ou seja, um container só "enxerga" os seus próprios processos e arquivos.
## Porque Usar Docker?
 
 Resolve o famoso: "Na minha máquina funciona!".

Com o Docker temos um container com a nossa aplicação. Esse container pode ser levado inteiro para outro ambiente. Com isso não precisamos nos preocupar com o pré-requisitos instalados no outro ambiente, Versão do S.O., permissionamento etc.

## Conceitos de Docker
- Dockerfile: Contém todas as informações necessárias para gerar a nossa imagem Docker.
- Imagem: Contém as informações de um ambiente com tudo que a nossa aplicação precisa para executar, por exemplo, código, dependências e bibliotecas necessárias.
- Container: É a instância de uma imagem em execução, Ou seja, é o ambiente de uma imagem executando.
- Máquina Hospedeira (Host): Pode sre uma máquina virtual rodando em uma máquina física como um servidor ou diretamente na máquina física como o nosso computador.