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

## Instalando o Tailwind CSS

**1. Instalação do Tailwind CSS** [^3]

O Tailwind CSS é um framework CSS de código aberto que se destaca por sua abordagem única de design utilitário. Em vez de fornecer estilos pré-estilizados para elementos específicos, ele fornece uma série de classes utilitárias que podem ser diretamente aplicadas aos elementos HTML para estilizá-los. Essas classes representam propriedades CSS individuais, como margens, preenchimentos, cores, tamanhos de fonte, alinhamentos e muito mais. [^4]

Se você ainda não tem um projeto Node.js configurado, crie um novo projeto e navegue até o diretório do projeto. Em seguida, instale o Tailwind CSS via npm:

```bash
npm install tailwindcss
```

2. **Configuração do Tailwind CSS**

Após a instalação, você precisa configurar o Tailwind CSS no seu projeto. Você pode gerar um arquivo de configuração padrão executando o seguinte comando:

```bash
npx tailwindcss init
```

Isso criará um arquivo `tailwind.config.js` na raiz do seu projeto, onde você pode personalizar as configurações do Tailwind CSS conforme necessário.

```js
/* tailwind.config.js */

@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Especifique o tipo de arquivo inserindo "./*.{html,js}"
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **Importação do Tailwind CSS**

Depois de configurar o Tailwind CSS, você precisa importá-lo no seu arquivo CSS principal.

No seu arquivo CSS principal, importe o Tailwind CSS usando a diretiva `@import`:

```css
/* style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```


4. **Instalar as dependências**

Precisamos instalar as dependências com o comando a seguir no termina.

```bash
npm init -y
```

Ele é necessário para criar o arquivo package.json

Ao iniciar um novo projeto Node.js, execute o comando `npm init` ou `npm i` para criar o arquivo package.json. Este arquivo contém informações essenciais sobre o seu projeto, como:

```JSON
{
  "name": "meu-projeto-node",  // Nome do projeto
  "version": "0.1.0", // Versão do projeto (geralmente começa com 0.1.0)
  "description": "Meu primeiro projeto Node.js", // Descrição do projeto
  "keywords": ["node", "javascript", "express"], // Palavras-chave para pesquisa
  "author": "Fulano de Tal <fulano@email.com>", // Autor(es) do projeto
  "license": "MIT", // Licença do projeto
  "dependencies": { // Dependências do projeto (pacotes Node.js que o seu projeto utiliza)
    "express": "^4.17.1",
    "body-parser": "^1.19.0"
  },
  "scripts": { // Scripts (comandos para executar tarefas comuns, como testes ou compilação)
    "test": "echo \"Executando testes...\""
  }
}
```
> [!CAUTION]
> Arquivos .json não aceitam comentários, os comentários acima são apenas para fins didáticos. Não repita isso em casa.

Portanto, após executar o comando `npm init -y`, execute o comando `npm init` ou `npm i` para gerar os arquivos de controle de versionamento do Node.js

```bash
npm init
```

**Uso do Tailwind CSS**

Agora que o Tailwind CSS está configurado e importado no seu projeto, você pode começar a usá-lo em seu código HTML. Utilize as classes utilitárias fornecidas pelo Tailwind CSS para estilizar seus elementos conforme necessário.

Por exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Botão Centralizado</title>
    <link rel="stylesheet" href="output.css">
</head>
    <body class="flex items-center justify-center h-screen w-screen">
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Hello World
        </button>
</body>
</html>
```

Isso criará um botão com fundo azul, texto branco, fonte em negrito, padding de 2 unidades em y (vertical) e 4 unidades em x (horizontal), e bordas arredondadas.

Para rodar sua aplicação, execute no seu terminal a seguinte linha:

```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```
Seu arquivo de input é o arquivo css do seu projeto, não esqueça de nomear ele como input.css

Com esses passos, você iniciou o uso do Tailwind CSS em seu projeto e está pronto para começar a estilizar sua interface de usuário de forma rápida e eficiente.

**Referências**

[^1]: Como instalar o Node.js no Ubuntu 20.04 | DigitalOcean. Disponível em: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-pt. Acesso em: 15 de abr. de 2024.

[^2]: Como atualizar o Node.js para a ultima versão no Ubuntu 🐧. Disponível em: https://dev.to/eucarlos/como-atualizar-o-nodejs-para-a-ultima-versao-no-ubuntu-35f3. Acesso em: 15 de abr. de 2024.

[^3]: Installation: Tailwind CLI - Tailwind CSS. Disponível em: https://tailwindcss.com/docs/installation. Acesso em: 15 de abr. de 2024.

[^4]: SANTOS, R. Tailwind CSS: O que é? Como Usar? Disponível em: <https://www.brasilcode.com.br/tailwind-css-o-que-e-como-usar/#:~:text=O%20Tailwind%20CSS%20%C3%A9%20um%20framework%20CSS>. Acesso em: 15 de abr. de 2024.
