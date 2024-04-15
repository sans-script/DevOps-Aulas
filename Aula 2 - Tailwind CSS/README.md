## Instalando o Node.js no Ubuntu 20.04

**Introdução**

O Node.js é um ambiente de tempo de execução de código aberto e multiplataforma que permite aos desenvolvedores executarem JavaScript do lado do servidor. Em outras palavras, ele permite que você execute JavaScript no servidor, em vez de apenas no navegador do cliente. 

Este guia apresenta as etapas para instalar o Node.js no Ubuntu 20.04 usando o gerenciador de pacotes `apt` e os repositórios padrão.

**Passo 1: Atualize o índice de pacotes** [^1]

```bash
sudo apt update
```

**Passo 2: Instale o Node.js**

```bash
sudo apt install nodejs
```

**Passo 3: Verifique a instalação do Node.js**

```bash
nodejs -v
```

O comando acima deve retornar a versão do Node.js instalada (por exemplo, `v10.19.0`).

**Passo 4: Instale o npm (gerenciador de pacotes do Node.js)**

```bash
sudo apt install npm
```

**Passo 5: Verifique a instalação do npm**

```bash
npm -v
```

O comando acima deve retornar a versão do `npm` instalada (por exemplo, `v6.14.4`).

**Atualizar o Node.js para a última versão no Ubuntu** [^2]

1. **Instalar globalmente o módulo `n`**

```bash
sudo npm install -g n
```

2. **Escolha a versão do Node.js**

Para instalar a última versão estável do Node.js:

```bash
sudo n stable
```

Isso instalará a versão mais recente do Node.js que é considerada estável.

3. **Verifique a instalação**

```bash
node --version
```

O comando acima deve retornar a versão atualizada do Node.js instalada. Se retornar a versão antiga, reinicie o terminal e execute o comando novamente para ver a versão atualizada.

**Referências**

[^1]: Como instalar o Node.js no Ubuntu 20.04 | DigitalOcean. Disponível em: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-pt. Acesso em: 15 de abr. de 2024. 

‌[^2]: Como atualizar o Node.js para a ultima versão no Ubuntu 🐧. Disponível em: https://dev.to/eucarlos/como-atualizar-o-nodejs-para-a-ultima-versao-no-ubuntu-35f3. Acesso em: 15 de abr. de 2024.
‌

