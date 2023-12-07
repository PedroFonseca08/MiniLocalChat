# Arquitetura do Sistema

<a href="https://i.imgur.com/LK5eNPw.gif"><img loading="lazy" src="https://i.imgur.com/LK5eNPw.gif" width=700 style="border-radius:50%;" alt="Arquitetura do Sistema" /></a>

## Cliente-Servidor

Nossa aplicação segue o modelo cliente-servidor. O cliente (navegador do usuário) envia requisições para o servidor, que processa a requisição e retorna uma resposta. O servidor é construído usando Java Springboot, enquanto o cliente é uma aplicação React.

## API Restful

A API Restful é uma interface que permite a comunicação entre o cliente e o servidor. Ela segue os princípios REST (Representational State Transfer), que incluem a utilização de métodos HTTP (GET, POST, PUT) para realizar operações e o uso de códigos de status HTTP para indicar o resultado dessas operações.

Nesta aplicação, a API Restful é usada para realizar operações envolvendo os usuários e as conversas, bem como para autenticar usuários e iniciar uma sessão.

## Servidor de Banco de Dados MySQL

Para desenvolver o projeto, foi utilizado um servidor de banco de dados MySQL, que é um sistema de gerenciamento de banco de dados relacional, usado para armazenar os dados da aplicação. Ele usa a linguagem SQL (Structured Query Language) para acessar, atualizar e manipular os dados.

Nesta aplicação, o MySQL é usado para armazenar informações sobre os usuários e as conversas, incluindo seus detalhes de login e cadastro dos usuários e armazenamento das conversas desses usuários.

## Ollama

O serviço Ollama é um serviço de backend que fornece a utilização de LLMs para a aplicação.

A partir da instalação do Ollama, é possível utilizar uma Large Language Model de maneira local e, portanto, é a base para o funcionamento das conversas dos usuários na aplicação MiniLocalChat.
