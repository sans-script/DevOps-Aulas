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

Após a instalação, crie uma pasta que irá conter o seu projeto. 
Navegue até o diretório pai do seu projeto e execute o seguinte comando no seu terminal.


```bash
ng new my-first-project
```


> [!TIP]
> Se você executou o comando acima na sua home, não é necessário criar uma nova pasta. O comando acima já cria a pasta contendo os arquivos do seu projeto dentro da sua home.

O comando `ng new` cria uma pasta de espaço de trabalho Angular e gera um novo esqueleto de aplicativo. Um espaço de trabalho pode conter vários aplicativos e bibliotecas. O aplicativo inicial criado pelo comando ng new está no nível superior da área de trabalho. 

Após executar o comando acima, responda cada pergunta que o CLI irá exibir e só assim, após responder cada pergunta, o CLI irá gerar os arquivos e seu projeto estará criado. 

**Valendo dois mil reais, vamos para a primeira pergunta:**

```
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics.
```

Responda `yes` or `no` caso queira compartilhar dados de uso sobre o seu projeto com o Google e precione ´enter´

**Segunda pergunta:**

```
? Which stylesheet format would you like to use? (Use arrow keys)
❯ CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ] 
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less            [ http://lesscss.org                                             ] 
```

Escolha o formato de CSS para o seu projeto usando as setas do seu teclado e precione ´enter´

**Terceira pergunta:**

```
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) 
```
Digite `y` ou `N` para abilitar ou desabilitar o SSR e seu projeto será criado


# O que é SSR? [^3]

|                      | CSR - Client-Side Rendering (Renderização no lado do Cliente)                                                                                                                                                             | SSR - Server-Side Rendering (Renderização no lado do Servidor)                                                                                                                                                          |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Processo inicial     | Servidor envia a resposta (HTML, CSS, JavaScript) ao navegador; Browser baixa o JavaScript; Browser executa o framework; Browser renderiza o site.                                       | Servidor envia os arquivos (HTML, CSS) prontos para serem renderizados pelo navegador; Browser renderiza a página e agora ela é visível, mas ainda não é interativa; Navegador baixa o JavaScript; Browser executa o framework; Agora o site é totalmente interativo. |
| Velocidade inicial   | Velocidade de carregamento inicial pode ser mais rápida.                                                                                                                                              | Velocidade de carregamento inicial pode ser mais lenta.                                                                                                                                         |
| SEO                  | Conteúdo gerado dinamicamente pelo JavaScript pode ser mais difícil de ser rastreado por mecanismos de busca.                                                                                                                                                       | Como o HTML completo é enviado pelo servidor, o conteúdo é facilmente acessível para mecanismos de busca.                                                                                     |
| Performance em SPA   | Melhor desempenho em Single-Page Applications (SPAs).                                                                                                                                               | Pode haver uma diminuição no desempenho em SPAs.                                                                                                                                                  |
| Experiência do usuário | Pode haver uma espera perceptível antes que a página se torne interativa.                                                                                                                         | Página é visível mais rapidamente para o usuário, mas pode haver uma pequena espera antes que a interatividade completa seja alcançada.                                                          |

>[!NOTE]
>SPA significa "Single Page Application", que traduzido para o português seria "Aplicação de Página Única". Uma SPA é um tipo de aplicativo da web que opera em uma única página web, sem a necessidade de recarregar a página inteira durante o uso. Em vez disso, o conteúdo é dinamicamente alterado no navegador conforme o usuário interage com a aplicação.
A principal característica de uma SPA é a capacidade de carregar dinamicamente o conteúdo necessário, como HTML, JavaScript e CSS, conforme necessário. Isso é geralmente feito usando tecnologias como AJAX (Asynchronous JavaScript and XML) ou frameworks JavaScript modernos, como Angular, React ou Vue.js.


**Execute sua aplicação**

Por padrão, o comando anterior gera alguns arquivos e pastas contendo templates do projeto. Para visualizar seu projeto, execute o seguindo comando:

```bash
ng serve
```
Uma URL contendo a sua aplicação será criada, basta acessá-la pelo navegador clicando no link que aparece no seu terminal, algo como ` http://localhost:4200/ `

# Construindo uma aplicação

O Angular possui módulos e componentes. Na estrutura de arquivos de um projeto Angular, geralmente os módulos e componentes são organizados da seguinte forma:

**Módulos (Modules):** Os módulos são geralmente representados por arquivos com o sufixo `.module.ts.` Eles são responsáveis por agrupar componentes, diretivas, pipes e serviços relacionados em um contexto lógico. 

Um módulo pode conter diversos componentes, serviços e outros artefatos relacionados. Exemplo: home.module.ts.

**Componentes (Components):** Os componentes são representados por arquivos que definem a lógica e a apresentação de partes individuais da interface do usuário. Geralmente, os componentes Angular consistem em um arquivo TypeScript (.component.ts) que define a classe do componente e um arquivo HTML (.component.html) que define a estrutura visual do componente. Exemplo: product-list.component.ts, product-detail.component.ts, product-list.component.html, product-detail.component.html.
Além disso, é comum que cada componente tenha um arquivo de estilo associado, que pode ser um arquivo CSS (.component.css), SCSS (.component.scss), ou até mesmo um arquivo de estilo inline (.component.css) diretamente no arquivo TypeScript.

Resumindo, bem a grosso modo: É como se o **Module** fosse um cômodo e os **Components** os móveis que preenchem aquele cômodo. [^4]

Para criar um Component, use o seguinte comando:

```bash
ng generate component component-name
``` 
Para criar um módulo, use o seguinte comando:

```bash
ng generate module module-name
```

Na prática, se você quer construir uma aplicação, execute as seguinte estapas:

**Criando uma página de Login e de Home**

```bash
ng generate module pages
``` 
ou

```bash
ng g m pages
```

O comando acima cria um módulo chamado `pages`, dentro desse diretório iremos criar nossas páginas, para isso precisamos executar o seguinte comando:

```bash
ng generate component pages/home
``` 
ou

```bash
ng g c pages/home
```
Isso cria uma pasta chamada home que armazena os nossos componentes. 

```
pages/
├── home/
|   ├── home.component.html
|   ├── home.component.scss
|   ├── home.component.spec.ts
|   └── home.component.ts
└──pages.module.ts
```

Siga os mesmos passos para nossa página de **Login**

Ao final teremos essa estrutura de arquivos dentro da nossa aplicação:
```
pages/
├── home/
|   ├── home.component.html
|   ├── home.component.scss
|   ├── home.component.spec.ts
|   └── home.component.ts
|
├── login/
|   ├── login.component.html
|   ├── login.component.scss
|   ├── login.component.spec.ts
|   └── login.component.ts
|
└──pages.module.ts
```
Para criar nossas demais peças que iremos utilizar, peças essas que podem ser utilizadas várias e várias vezes no projeto, precisamos criar uma pasta para armazena-las. Essa pasta é comumente chamada de `shared`

```bash
ng g m shared
```
Por exemplo, vamos criar um botão que vai ficar tanto na Home quanto na página de Login.

```bash
ng g c shared/shared-button
```
Ao final, teremos algo como essa estrura aqui:
```
app/
├──.pages/
|  ├── home/
|  |   ├── home.component.html
|  |   ├── home.component.scss
|  |   ├── home.component.spec.ts
|  |   └── home.component.ts
|  |
|  ├── login/
|  |   ├── login.component.html
|  |   ├── login.component.scss
|  |   ├── login.component.spec.ts
|  |   └── login.component.ts
|  |
|  └──pages.module.ts
|  |
|  .shared/
|  ├── shared-button/
|  |   ├── shared-button.component.html
|  |   ├── shared-button.component.scss
|  |   ├── shared-button.component.spec.ts
|  |   └── shared-button.component.ts
|  |
|  └──shared.module.ts
```

**Referências**
[^1]: Angular: o que é, para que serve e um Guia do framework. Disponível em: https://www.alura.com.br/artigos/angular-js. Acesso em 19 de abr. de 2024.

[^2]: Angular CLI: CLI Overview and Command Reference. Disponível em: https://angular.io/cli. Acesso em 19 de abr. de 2024.

[^3]: Como o Next.js ajuda no SEO das SPAs? Disponível em: https://www.alura.com.br/artigos/como-next-js-ajuda-no-seo-spas. Acesso em: 20 de abr. de 2024.

[^4]: Qual a diferença entre Module e Component no Angular? #Curtinhas #Angular. Disponível em: https://fabiodemiranda.com.br/diferenca-module-component-angular-curtinha-angular/. Acesso em: 20 de abr. de 2024.
