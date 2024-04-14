# Desafio Senior Sistemas William Roberto

Documentação do Projeto

## Descrição

O projeto foi construído utilizando Angular para o front end e Java Spring para o back end, tendo o MySQL como banco de dados da aplicação.

## Tecnologias Utilizadas

- Java 17 ou superior;
- Spring Boot;
- MySQL;
- Node.js;
- Angular;
- TypeScript;

## Funcionalidades

- Página inicial;
- Painel dos Clientes (Cadastrar, Listar, Atualizar, Deletar);
- Painel dos Contatos (Cadastrar, Listar, Atualizar, Deletar);

## Estrutura do Projeto

O projeto foi estruturado no mesmo repositório, com um diretório para o back end: `cd crm-senior-backend-project` e outro para o front end: `cd crm-senior-frontend-project`

## Instalação e Uso

### Requisitos

#### Back End 

- Java 17 ou superior; 
- Maven (configurado nas variáveis de ambiente);
- MySQL 8 (pode ser um XAMPP, por exemplo);

#### Front End

- Node.js;
- Angular;

### Passos para Instalação

#### Baixando o projeto

1. Clone o repositório: `git clone https://github.com/williams181/Desafio-FullStack-Senior-Sistemas-William-Roberto`;
2. Entre na pasta do projeto: `cd Desafio-FullStack-Senior-Sistemas-William-Roberto`;

#### Execução do projeto

#### Back end

1. Acesse o diretório do projeto com a IDE de sua preferência e abra o projeto `cd crm-senior-backend-project`;
2. Configure o arquivo `application.properties` presente no projeto Java com as informações do seu banco de dados;
3. Execute o back end da aplicação inserindo o seguinte comando no terminal: `mvn spring-boot:run`;

#### Front end

1. Acesse o diretório do projeto com a IDE de sua preferência e abra o projeto `cd crm-senior-frontend-project`;
2. Execute o front end da aplicação inserindo os seguintes comandos no terminal:
    - `npm install`;
    - `npm install -g @angular/cli`;
    - `ng serve --open`;

## Licença

Este projeto está licenciado sob a [William Roberto](LICENSE).

## Contato

- William Roberto - [E-mail](mailto:william.roberto39@hotmail.com)
