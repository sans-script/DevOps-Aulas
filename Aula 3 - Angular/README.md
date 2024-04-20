# Introdução ao Angular 17

**Introdução**

Angular é um framework de código aberto desenvolvido pelo Google para a criação de aplicativos dinâmicos e interativos da web.

Ele se baseia em TypeScript, uma linguagem superset do JavaScript, e utiliza uma abordagem orientada a componentes para a construção de interfaces. O Angular oferece uma estrutura sólida para desenvolvimento, incluindo suporte a gerenciamento de estado, roteamento, validação de formulários e muito mais.

Além disso, sua arquitetura modular e o poderoso sistema de injeção de dependência facilitam a manutenção de aplicações complexas. [^1]


# Instalação
Primeiro de tudo, instale a CLI usando o npm. O **Angular CLI** [^2]  é uma ferramenta de interface de linha de comando que você usa para inicializar, desenvolver, estruturar e manter aplicativos Angular diretamente de um shell de comando.

 Abra o terminal e execute o seguinte código:

```bash
npm install -g @angular/cli
```
**Crie seu novo projeto Angular**

Após a instalação, crie uma pasta que irá conter o seu projeto. Navegue até o diretório pai do seu projeto e execute o seguinte comando no seu terminal.

```bash
ng new my-first-project
```

O comando ng new cria uma pasta de espaço de trabalho Angular e gera um novo esqueleto de aplicativo. Um espaço de trabalho pode conter vários aplicativos e bibliotecas. O aplicativo inicial criado pelo comando ng new está no nível superior da área de trabalho.

> [!TIP]
> Se você executou os comandos acima na sua home, não é necessário criar uma nova pasta. O comando acima já cria a pasta contendo os arquivos do seu projeto dentro da sua home.






**Execute sua aplicação**

Por padrão, o comando anterior gera alguns arquivos e pastas contendo templates do projeto. Para visualizar seu projeto, execute o seguindo comando:

```bash
ng serve
```
Uma URL contendo a sua aplicação será criada, basta acessá-la pelo navegador clicando no link que aparece no seu terminal, algo como ` http://localhost:4200/ `




**Referências**
[^1]: Angular: o que é, para que serve e um Guia do framework. Disponível em: https://www.alura.com.br/artigos/angular-js. Acesso em 19 de abr. de 2024.

[^2]: Angular CLI: CLI Overview and Command Reference. Disponível em: https://angular.io/cli. Acesso em 19 de abr. de 2024.