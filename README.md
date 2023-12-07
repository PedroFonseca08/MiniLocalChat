<p align="center">
<img height="300" src="https://i.imgur.com/VnaYyam.png" alt="React"/>
</p>

<p align="center">
  <strong>MiniLocalChat</strong><br>
  <em>Disciplina: Sistemas Distribuídos - GCC129</em><br>
  <em>Professor: André de Lima Salgado</em>
</p>


# Chatbot com Armazenamento de Histórico
Este é um projeto de chatbot desenvolvido para armazenar o histórico das conversas de cada usuário. O chatbot é capaz de interagir com os usuários, responder a perguntas comuns e manter um registro das interações para referência futura.

# Tecnologias Utilizadas:
<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="React"/></code>
<code><img height="32" src="https://pt.vitejs.dev/logo.svg" alt="Vite"/></code>
<code><img height="32" src="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj" alt="Tailwind"/></code>
<code><img height="32" src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" alt="Node JS"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" alt="MySQL"/></code>
<code><img height="32" src="https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png" alt="Java"/></code>
<code><img height="32" src="https://avatars.githubusercontent.com/u/317776?s=48&v=4" alt="Spring Boot"/></code>
<code><img height="32" src="https://github.com/jmorganca/ollama/assets/3325447/0d0b44e2-8f4a-4e99-9b52-a5c1c741c8f7" alt="Ollama"/></code>

## Funcionalidades Principais

- **Conversação Interativa:** O chatbot é capaz de engajar os usuários em conversas interativas.

- **Armazenamento de Histórico:** Todas as interações do usuário são registradas e armazenadas para referência futura.

## Requisitos

Certifique-se de ter os seguintes requisitos instalados antes de executar o projeto:
- **MySQL 8 ou superior:**
  - Visite o site oficial do [MySQL](https://www.mysql.com/) e baixe o instalador adequado para o seu sistema operacional.
  - Siga as instruções de instalação fornecidas na página de download.

- **Java 17 (compatível com a versão do Spring):**
  - Visite o site oficial da Oracle ou OpenJDK para baixar o [Java](https://www.oracle.com/java/technologies/javase-downloads.html) ou [OpenJDK](https://openjdk.java.net/).
  - Siga as instruções de instalação para o seu sistema operacional.

- **Node.js 20 ou superior:**
  - Visite o site oficial do [Node.js](https://nodejs.org/).
  - Baixe e execute o instalador adequado para o seu sistema operacional.
  - Siga as instruções de instalação fornecidas na página de download.

- **Ollama:**
  - Consulte a documentação oficial do [Ollama](https://github.com/jmorganca/ollama) para obter instruções específicas de instalação.

## Como Usar

1. **Instalação:**
   - [Clique aqui](./INSTALL.md) para obter instruções de instalação detalhadas.

2. **Execução utilizando o Visual Studio Code:**
   - Abra o projeto no Visual Studio Code.
   - Abra o terminal do Visual Studio Code.
   - Execute os comandos: 
     ```bash
     cd frontend
     npm run dev
     ```
    - Agora abra outro terminal do Visual Studio Code.
    - Encontre pelo próprio explorador de arquivos do Visual Studio Code o arquivo `BackendApplication.java` dentro da pasta `backend/src/main/java/com/GrupoSD/backend`.
    - Clique com o botão direito do mouse no arquivo e selecione a opção `Run Java` (necessário extensão `Extension Pack for Java`).
    - Ative o Ollama no sistema Linux ou WSL2 com o comando `ollama run mistral`.
    - Agora você pode acessar o chatbot em `http://localhost:5173/`.

3. **Uso:**
   - Registre-se com um usuário (ou realize o login, caso já exista).
   - Inicie uma conversa com o chatbot e observe as respostas geradas.

## Arquitetura do Sistema:
<a href="https://i.imgur.com/LK5eNPw.gif"><img loading="lazy" src="https://i.imgur.com/LK5eNPw.gif" width=700 style="border-radius:50%;" alt="Arquitetura do Sistema" /></a>

## Contribuições

Contribuições são bem-vindas! Se você encontrar bugs ou tiver sugestões para melhorar o chatbot, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Autores:

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/95828428?s=96&v=4" width=115><br><sub>Breno Carvalho</sub>](https://github.com/Boakpe) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/108815161?v=4" width=115><br><sub>Caio Noronha</sub>](https://github.com/CaioNoro) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/108813803?s=96&v=4" width=115><br><sub>Lucas Malachias</sub>](https://github.com/lucasmalachias) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/108371507?v=4" width=115><br><sub>Pedro Fonseca</sub>](https://github.com/PedroFonseca08)
| :---: | :---: | :---: | :---: |
