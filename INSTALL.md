# Tutorial de instalação do MiniLocalChat
Bem-vindo ao tutorial de instalação do MiniLocalChat! Siga os passos abaixo para configurar o ambiente e começar a utilizar este aplicativo.

## Clonando o repositório
Clone o repositório do MiniLocalChat para sua máquina local.
```bash
git clone https://github.com/PedroFonseca08/MiniLocalChat.git
```
## Configuração do Frontend
Navegue até o diretório do frontend e instale as dependências usando npm.
```bash
cd MiniLocalChat/frontend/
npm i
```

## Execute o seguinte script SQL no seu banco de dados MySQL:
Execute o seguinte script SQL no seu banco de dados MySQL. Este script criará o esquema e as tabelas necessárias para o MiniLocalChat.
```sql
CREATE USER 'root_SD'@'localhost' IDENTIFIED BY 'admin';

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema chat
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chat
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS chat DEFAULT CHARACTER SET utf8 ;
USE chat ;

-- -----------------------------------------------------
-- Table chat.usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS chat.usuario (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(80) NOT NULL,
  nome_usuario VARCHAR(80) NOT NULL,
  senha VARCHAR(80) NOT NULL,
  PRIMARY KEY (id_usuario),
  UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table chat.conversa
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS chat.conversa (
  id_conversa INT NOT NULL,
  data VARCHAR(45) NOT NULL,
  id_usuario INT NOT NULL,
  pergunta VARCHAR(1000) NOT NULL,
  resposta VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id_conversa, data, id_usuario),
  INDEX fk_conversa_usuario_idx (id_usuario ASC) VISIBLE,
  CONSTRAINT fk_conversa_usuario
    FOREIGN KEY (id_usuario)
    REFERENCES chat.usuario (id_usuario)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

GRANT ALL PRIVILEGES ON chat.* TO 'root_SD'@'localhost';
```

## Configuração do Ollama
Dentro de um sistema Linux ou WSL2, execute os seguintes comandos para instalar e executar o Ollama.
```bash
curl https://ollama.ai/install.sh | sh
ollama run mistral
```

## Pronto!
Após seguir esses passos, seu ambiente estará configurado e pronto para executar o MiniLocalChat. Certifique-se de ter todas as dependências instaladas e o banco de dados configurado corretamente.