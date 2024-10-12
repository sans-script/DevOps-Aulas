# Introdução ao Angular

### Introdução

Angular é um framework de código aberto desenvolvido pelo Google para a criação de aplicativos web dinâmicos e interativos. Ele é baseado em TypeScript, uma linguagem que é uma superconjunto do JavaScript, e utiliza uma abordagem orientada a componentes para a construção de interfaces. O Angular oferece uma estrutura robusta para desenvolvimento, incluindo suporte a gerenciamento de estado, roteamento, validação de formulários e muito mais.

Além disso, sua arquitetura modular e o poderoso sistema de injeção de dependência facilitam a manutenção de aplicações complexas, permitindo um desenvolvimento escalável e modularizado. [^1]

### Instalação

Primeiro, instale a CLI usando o npm. O **Angular CLI** [^2] é uma ferramenta de interface de linha de comando que você usará para inicializar, desenvolver, estruturar e manter aplicativos Angular diretamente do seu terminal.

Abra o terminal e execute o seguinte comando:

```bash
npm install -g @angular/cli
```

### Crie seu novo projeto Angular

Após a instalação, crie uma pasta que conterá o seu projeto. Navegue até o diretório pai do seu projeto e execute o seguinte comando no terminal:

```bash
ng new my-first-project
```

> [!TIP]
> Se você executou o comando acima na sua home, não é necessário criar uma nova pasta. O comando acima já cria a pasta contendo os arquivos do seu projeto dentro da sua home.

O comando `ng new` cria uma pasta de espaço de trabalho Angular e gera um novo esqueleto de aplicativo. Um espaço de trabalho pode conter vários aplicativos e bibliotecas. O aplicativo inicial criado pelo comando `ng new` está no nível superior da área de trabalho. 

Após executar o comando, responda a cada pergunta que o CLI exibirá. Somente após responder a todas as perguntas, o CLI gerará os arquivos e o seu projeto será criado.

### Perguntas do CLI:

**Valendo dois mil reais, vamos para a primeira pergunta:**

```
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics.
```

Responda `yes` ou `no` caso queira compartilhar dados de uso sobre o seu projeto com o Google e pressione `enter`.

**Segunda pergunta:**

```
? Which stylesheet format would you like to use? (Use arrow keys)
❯ CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ] 
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less            [ http://lesscss.org                                             ] 
```

Escolha o formato de CSS para o seu projeto usando as setas do seu teclado e pressione `enter`.

**Terceira pergunta:**

```
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) 
```

Digite `y` ou `n` para habilitar ou desabilitar o SSR, e seu projeto será criado.

### Renderização Web: qual a diferença entre CSR, SPA, SSR, SSG e ISR? [^3]

#### 1. CSR (Client Side Rendering)

O **Client Side Rendering** (CSR) é o método mais comum em frameworks modernos, onde a renderização é feita no navegador do usuário. Quando o usuário acessa o site, recebe arquivos que contêm JavaScript, HTML e CSS, e o navegador executa o JavaScript para gerar a interface. Embora fácil de implementar, o CSR pode resultar em lentidão em projetos grandes e é menos eficaz para SEO, pois os mecanismos de busca podem ter dificuldades para indexar o conteúdo renderizado apenas com JavaScript.

#### 2. SPA (Single Page Application)

**Single Page Applications** (SPAs) são uma estratégia que utiliza CSR para carregar uma única página que contém todos os recursos da aplicação. Em vez de carregar novas páginas a cada interação, as SPAs carregam todos os componentes de uma vez, tornando a navegação interna mais rápida. Frameworks populares como React, Vue.js e Angular são projetados como SPAs, mas nem todos os sites que usam CSR são considerados SPAs.

#### 3. SSR (Server Side Rendering)

O **Server Side Rendering** (SSR) realiza a renderização da página no servidor. Isso significa que o usuário recebe uma página totalmente renderizada, o que melhora o SEO, pois os mecanismos de busca podem indexar o conteúdo mais facilmente. O SSR é mais exigente em termos de recursos do servidor, podendo resultar em custos mais altos, mas oferece melhor performance em dispositivos com capacidades limitadas.

#### 4. SSG (Static Site Generation)

**Static Site Generation** (SSG) gera páginas estáticas durante o tempo de construção da aplicação. Isso significa que as páginas são pré-renderizadas e não sobrecarregam o servidor nem o cliente, resultando em ótimo desempenho e SEO. No entanto, a desvantagem é que a geração de sites estáticos pode ser problemática para aplicações com dados que mudam frequentemente, pois as alterações só são aplicadas após um novo build.

#### 5. ISR (Incremental Site Regeneration)

A **Incremental Site Regeneration** (ISR) combina elementos de SSR e SSG, permitindo que algumas páginas sejam geradas durante o build e outras regeneradas de maneira incremental. Isso permite que as páginas sejam atualizadas em horários programados ou sob demanda, utilizando cache para acelerar o acesso às páginas que já foram geradas.

#### 6. Hydration e Resumability

**Hydration** é o processo de transformar o HTML renderizado no servidor em uma aplicação interativa, o que pode causar latência em conexões lentas. O conceito de **resumability**, introduzido pelo framework Qwik, busca melhorar essa experiência, permitindo que o carregamento de código aconteça de forma pausada, apenas quando necessário.

### Execute sua aplicação

Por padrão, o comando anterior gera alguns arquivos e pastas contendo templates do projeto. Para visualizar seu projeto, execute o seguinte comando:

```bash
ng serve
```

Uma URL contendo a sua aplicação será criada. Basta acessá-la pelo navegador clicando no link que aparece no seu terminal, algo como `http://localhost:4200/`.

### Construindo uma aplicação

O Angular possui módulos e componentes. Na estrutura de arquivos de um projeto Angular, geralmente os módulos e componentes são organizados da seguinte forma:

**Módulos (Modules):** Os módulos são geralmente representados por arquivos com o sufixo `.module.ts`. Eles são responsáveis por agrupar componentes, diretivas, pipes e serviços relacionados em um contexto lógico. Um módulo pode conter diversos componentes, serviços e outros artefatos relacionados. Exemplo: `home.module.ts`.

**Componentes (Components):** Os componentes são representados por arquivos que definem a lógica e a apresentação de partes individuais da interface do usuário. Geralmente, os componentes Angular consistem em um arquivo TypeScript (`.component.ts`) que define a classe do componente e um arquivo HTML (`.component.html`) que define a estrutura visual do componente. Exemplo: `product-list.component.ts`, `product-detail.component.ts`, `product-list.component.html`, `product-detail.component.html`. Além disso, é comum que cada componente tenha um arquivo de estilo associado, que pode ser um arquivo CSS (`.component.css`), SCSS (`.component.scss`), ou até mesmo um arquivo de estilo inline diretamente no arquivo TypeScript.

Resumindo, de forma simplificada: É como se o **Module** fosse um cômodo de uma casa e os **Components** fossem os móveis que preenchem esse cômodo. [^4]

Para criar um componente, use o seguinte comando:

```bash
ng generate component component-name
``` 

Para criar um módulo, use o seguinte comando:

```bash
ng generate module module-name
```

Na prática, se você quer construir uma aplicação, execute os seguintes passos:

### Criando uma página de Login e de Home

```bash
ng generate module pages
``` 
ou

```bash
ng g m pages
```

O comando acima cria um módulo chamado `pages`. Dentro desse diretório, criaremos nossas páginas. Para isso, execute o seguinte comando:

```bash
ng generate component pages/home
``` 
ou

```bash
ng g c pages/home
```

Isso cria uma pasta chamada `home` que armazena os nossos componentes. 

```
pages/
├── home/
|   ├── home.component.html
|   ├── home.component.scss
|   ├── home.component.spec.ts
|   └── home.component.ts
└── pages.module.ts
```

Siga os mesmos passos para criar nossa página de **Login**.

Ao final, teremos essa estrutura de arquivos dentro da nossa aplicação:

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
└── pages.module.ts
```

Para criar os componentes que iremos utilizar várias vezes no projeto, precisamos criar uma pasta para armazená-los. Essa pasta é comumente chamada de `shared`.

```bash
ng g m shared
```

Por exemplo, vamos criar um botão que será utilizado tanto na Home quanto na página de Login.

```bash
ng g c shared/shared-button
```

Ao final, teremos algo como esta estrutura:

```
app/
├── pages/
|   ├── home/
|   |   ├── home.component.html
|   |   ├── home.component.scss
|   |   ├── home.component.spec.ts
|   |   └── home.component.ts
|   |
|  

 ├── login/
|   |   ├── login.component.html
|   |   ├── login.component.scss
|   |   ├── login.component.spec.ts
|   |   └── login.component.ts
|   |
|   └── pages.module.ts
|
└── shared/
    ├── shared-button/
    |   ├── shared-button.component.html
    |   ├── shared-button.component.scss
    |   ├── shared-button.component.spec.ts
    |   └── shared-button.component.ts
    |
    └── shared.module.ts
```

### Configurando o Roteamento

Para navegar entre as páginas, precisamos configurar o roteamento. Isso pode ser feito de maneira simples no módulo de páginas.

```typescript
// pages.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesModule { }
```

Em seguida, adicione o `<router-outlet></router-outlet>` no seu componente raiz, geralmente chamado de `app.component.html`:

```html
<router-outlet></router-outlet>
```

### Criando o serviço

Para gerenciar o estado da aplicação e os dados do usuário, podemos criar um serviço. Utilize o comando a seguir:

```bash
ng g service shared/user
```

### Exemplo de um serviço simples

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn = false;

  constructor() { }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }
}
```

### Usando o serviço em um componente

Para usar o serviço, importe-o no componente desejado:

```typescript
import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private userService: UserService) {}

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
```

### Conclusão

Você agora tem um esboço básico de um aplicativo Angular, incluindo a configuração de páginas, rotas e serviços. A partir daqui, você pode expandir sua aplicação com componentes adicionais, gerenciamento de estado e integração com APIs.

### Referencias

[^1]: ANGULAR. *What is Angular?* Disponível em: <https://angular.dev/overview>. Acesso em: 12 out. 2024.
[^2]: ANGULAR. *Installation* Disponível em: <https://angular.dev/installation>. Acesso em: 12 out. 2024.
[^3]: CASA DO DESENVOLVEDORE. *Renderização Web: qual a diferença entre CSR, SPA, SSR, SSG e ISR?* Disponível em: <https://blog.casadodesenvolvedor.com.br/renderizacao-web/>. Acesso em: 12 out. 2024.
[^4]: ANGULAR. *In-depth Guides* Disponível em: <https://angular.dev/guide/components>. Acesso em: 12 out. 2024.

