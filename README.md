# Teste Técnico Yo! (BackEnd)

## Overview

Este é o backend do teste técnico.

Ele é uma API REST simples que serve para responder às requisições HTTP enviadas pelo FrontEnd.

A API consiste em um cadastro simples de clientes.

As principais tecnologias utilizadas são as seguintes:

-   Git
-   Typescript
-   NodeJS
-   ExpressJS
-   Docker
-   Postgres
-   Prisma ORM

Já existem dois endpoints configurados na API:

1. Lista todos os clientes: `GET /customer/all`
2. Busca um cliente pelo ID: `GET /customer/:customerId`

Ambos os endpoints fazem uso do Prisma ORM, para que você possa usá-los como exemplo.

## O que devo fazer no teste?

Você tem 2 objetivos:

1. Criar um endpoint para criação de clientes: `POST /customer`. Os clientes cadastrados deverão ser salvos no banco de dados.
2. Corrigir os erros existentes no endpoint `/customer:customerId`

## O que vai ser avaliado?

Os seguintes pontos serão adotados como critério de avaliação:

1. Se você conseguiu atingir os 2 objetivos do teste
2. Como você estruturou seu código: Nomes de funções e variáveis, tipagem, organização
3. Como você fez seus commits: Mensagens de commit, tamanho dos commits

## Alguns toques para se sair bem no teste:

-   Foque em fazer o que foi pedido no teste
-   Se importe com seu código e lembre-se de escrever código para que outra pessoa possa entender (o público alvo do código de um programador são outros programadores, não o computador)
-   Valorizamos mais um teste bem feito e focado no que foi pedido do que um teste que entrega mais do que foi pedido porém com pouca qualidade
-   Não faça commits grandes

## Como rodar o projeto?

Pra rodar o projeto, você vai precisar ter o NodeJS e o Docker instalados em seu computador.

Todos os comandos de terminal mencionados abaixo devem ser executados a partir da pasta raiz do projeto.

1. Copie o conteúdo do arquivo `.env.example` e cole em um novo arquivo chamado `.env`
2. Execute o seguinte comando: `docker compose up -d`
3. Execute o seguinte comando: `npm install`
4. Execute o seguinte comando: `npx prisma migrate dev && npx prisma generate`
5. Reinicie o VSCode (recomendado, senão o editor vai acusar erros onde não tem)
6. Execute o seguinte comando: `npm run dev`

Boa sorte! :D

## Nota

Eventualmente você pode ter o seguinte erro quando executar o comando `npm run dev`:

```
Error: listen EADDRINUSE: address already in use :::8080
```

Se estiver usando Ubuntu ou WSL 2 com Ubuntu, execute o seguinte comando para finalizar o programa que está usando a porta 8080:

```
sudo kill -9 `sudo lsof -t -i:8080`
```

Então, execute `npm run dev` novamente.

Ou, como alternativa, você pode trocar a porta utilizada pela API. Para isso mude a variável de ambiente `PORT` através do arquivo `.env`. Se você optar por essa opção, não esqueça de ajustar o FrontEnd para que as requisições sejam enviadas para a porta correta.
