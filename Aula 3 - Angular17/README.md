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

Após concluir a instalação, crie um diretório para o seu novo projeto. No seu diretório home, execute o seguinte comando no terminal:

```bash
ng new my-first-project
```

O comando `ng new` cria uma pasta de espaço de trabalho Angular e gera um novo esqueleto de aplicativo. Um espaço de trabalho pode conter vários aplicativos e bibliotecas.

Após executar o comando, responda a cada pergunta que o CLI exibirá. Somente após responder a todas as perguntas, o CLI gerará os arquivos e o seu projeto será criado.

### Perguntas do CLI:

**Valendo dois mil reais, vamos para a primeira pergunta:**

```
Would you like to enable autocompletion? This will set up your terminal so pressing TAB
whiletyping Angular CLI commands will show possible options and autocomplete arguments.
(Enabling autocompletion will modify configuration files in your home directory.) (Y/n)
```

Responda `y` ou `n` caso queira habilitar o autocompletion e pressione `enter`.

Quando você habilita o autocompletion, a ferramenta ajusta os arquivos de configuração no seu sistema para que, ao digitar comandos do Angular CLI e pressionar a tecla TAB, o terminal mostre sugestões de comandos e argumentos possíveis.

**Segunda pergunta:**

```
Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics. (y/N)
```

Responda `yes` ou `no` caso queira compartilhar dados de uso sobre o seu projeto com o Google e pressione `enter`.

**Terceira pergunta:**

```
? Which stylesheet format would you like to use? (Use arrow keys)
❯ CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ] 
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less            [ http://lesscss.org                                             ] 
```

Escolha o formato de CSS para o seu projeto usando as setas do seu teclado e pressione `enter`.

**Quarta pergunta:**

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

O Angular possui módulos e componentes [^4]. Na estrutura de arquivos de um projeto Angular, geralmente os módulos e componentes são organizados da seguinte forma:

**Módulos (Modules):** Os módulos são geralmente representados por arquivos com o sufixo `.module.ts`. Eles são responsáveis por agrupar componentes, diretivas, pipes e serviços relacionados em um contexto lógico. Um módulo pode conter diversos componentes, serviços e outros artefatos relacionados. Exemplo: `home.module.ts`.

**Componentes (Components):** Os componentes em Angular são representados por arquivos que definem tanto a lógica quanto a apresentação de partes individuais da interface do usuário. Cada componente geralmente consiste em um arquivo TypeScript (`.component.ts`) que define sua lógica, e um arquivo HTML (`.component.html`) que descreve sua estrutura visual. Além disso, é comum que cada componente tenha um arquivo de estilo associado, que pode ser um arquivo CSS (`.component.css`), SCSS (`.component.scss`), ou até mesmo estilos inline diretamente no arquivo HTML.

Resumindo, de forma simplificada: É como se o **Module** fosse um cômodo de uma casa e os **Components** fossem os móveis que preenchem esse cômodo.

Para criar um componente, use o seguinte comando:

```bash
ng generate component component-name
```

Para criar um módulo, utilize o comando:

```bash
ng generate module module-name
```

### Exemplo prático: Criando página de Login e Home

Siga os passos abaixo para estruturar a aplicação:

1. Crie um módulo chamado `pages` para organizar suas páginas.

   - Para criar o módulo, use:
     
     ```
     ng generate module pages
     ```
     
   - Ou, de forma abreviada, use:
     
     ```
     ng g m pages
     ```


3. Com o módulo criado, você pode adicionar as páginas.

   - Para criar a página `home`, execute o seguinte comando:
     
     ```
     ng generate component pages/home
     ```
     
   - Ou, de forma abreviada, use:
     
     ```
     ng g c pages/home
     ```
     
Isso cria uma pasta chamada `home` que armazena os nossos componentes. 

```
└── pages
    ├── home
    │   ├── home.component.css
    │   ├── home.component.html
    │   ├── home.component.spec.ts
    │   └── home.component.ts
    └── pages.module.ts
```

Siga os mesmos passos para criar nossa página de **Login**.

Ao final, teremos essa estrutura de arquivos dentro da nossa aplicação:

```
└── pages
    ├── home
    │   ├── home.component.css
    │   ├── home.component.html
    │   ├── home.component.spec.ts
    │   └── home.component.ts
    ├── login
    │   ├── login.component.css
    │   ├── login.component.html
    │   ├── login.component.spec.ts
    │   └── login.component.ts
    └── pages.module.ts
```

Para criar os componentes que iremos utilizar várias vezes no projeto, precisamos criar uma pasta para armazená-los. Iremos chamar essa pasta de `shared`.

```bash
ng g m shared
```

Por exemplo, vamos criar um botão que será utilizado tanto na Home quanto na página de Login.

```bash
ng g c shared/shared-button
```

Ao final, teremos algo como esta estrutura:

```
├── pages
│   ├── home
│   │   ├── home.component.css
│   │   ├── home.component.html
│   │   ├── home.component.spec.ts
│   │   └── home.component.ts
│   ├── login
│   │   ├── login.component.css
│   │   ├── login.component.html
│   │   ├── login.component.spec.ts
│   │   └── login.component.ts
│   └── pages.module.ts
└── shared
    ├── shared-button
    │   ├── shared-button.component.css
    │   ├── shared-button.component.html
    │   ├── shared-button.component.spec.ts
    │   └── shared-button.component.ts
    └── shared.module.ts
```

### Configurando o Roteamento

Para navegar entre as páginas, precisamos configurar o roteamento. Isso pode ser feito de maneira simples no arquivo `app.routes.ts`.

```typescript
// app.routes.ts

// Importa o tipo Routes do Angular Router, que é utilizado para definir um array de rotas.
import { Routes } from '@angular/router';

// Importa os componentes que serão exibidos quando o usuário acessar as respectivas rotas.
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

// Define o array de rotas da aplicação.
export const routes: Routes = [
    // Rota padrão (vazia). Quando o caminho é vazio (''), redireciona o usuário para a rota 'login'.
    // O pathMatch: 'full' define como o Angular deve combinar a URL atual do navegador com o caminho (ou path) da rota. A URL precisa ser exatamente igual ao caminho definido (neste caso, vazia) para que o redirecionamento ocorra.
    { path: '', pathMatch: "full", redirectTo: 'login' },

    // Rota para o caminho 'login', que renderiza o LoginComponent.
    { path: 'login', component: LoginComponent },

    // Rota para o caminho 'home', que renderiza o HomeComponent.
    { path: 'home', component: HomeComponent },
];

```

Em seguida, adicione o `<router-outlet></router-outlet>` no seu componente raiz, geralmente chamado de `app.component.html`:

```html
<router-outlet></router-outlet>
```

O `<router-outlet>` é uma diretiva do Angular usada para renderizar os componentes correspondentes às rotas definidas na aplicação, funcionando como um marcador onde o conteúdo da rota ativa é exibido. Ele permite criar aplicações de página única (SPA), onde a navegação entre diferentes "páginas" não requer recarregamento da página inteira. Ao definir as rotas em um arquivo de configuração, o Angular injeta o componente correto no `<router-outlet>` baseado na URL acessada. Pode haver vários `<router-outlet>` para layouts mais complexos, e ele suporta rotas aninhadas para exibição de conteúdo dinâmico dentro de componentes.

### O que são Diretivas?

No Angular, diretivas são instruções que permitem modificar o comportamento ou a aparência de elementos no DOM. Existem três tipos principais: **diretivas de atributo**, que alteram a aparência ou o comportamento de um elemento (como `ngClass` e `ngStyle`); **diretivas estruturais**, que modificam o layout removendo ou adicionando elementos ao DOM (`*ngIf`, `*ngFor`); e **diretivas customizadas**, que permitem criar comportamentos reutilizáveis aplicados a elementos. Elas são declaradas usando a anotação `@Directive` e são fundamentais para tornar componentes e elementos HTML interativos e dinâmicos de forma declarativa.

### Alguns exemplos de uso de Diretivas Estruturais

#### 1. `ngClass`

A diretiva `ngClass` muda as classes CSS de um elemento com base em uma condição.

```html
<div [ngClass]="{ 'active': isActive, 'inactive': !isActive }">
  O estado do componente é {{ isActive ? 'Ativo' : 'Inativo' }}.
</div>
```
- Se `isActive` for verdadeiro, a classe `active` é aplicada; se for falso, a classe `inactive` é aplicada.

#### 2. `ngStyle`

A diretiva `ngStyle` muda os estilos CSS de um elemento diretamente.

```html
<div [ngStyle]="{ 'color': isError ? 'red' : 'black', 'font-weight': isBold ? 'bold' : 'normal' }">
  Este texto muda de cor e peso dependendo do estado.
</div>
```
- Se `isError` for verdadeiro, o texto ficará vermelho; se `isBold` for verdadeiro, o texto ficará em negrito.

#### 3. `*ngIf`

A diretiva `*ngIf` mostra ou esconde elementos com base em uma condição.

```html
<div *ngIf="isLoggedIn">
  Bem-vindo de volta, Fulano!
</div>
<div *ngIf="!isLoggedIn">
  Por favor, faça login.
</div>
```
- Se `isLoggedIn` for verdadeiro, a mensagem de boas-vindas aparecerá. Se for falso, a mensagem pedindo para fazer login será mostrada.

#### 4. `*ngFor`

A diretiva `*ngFor` cria uma lista a partir de uma coleção de itens.

```html
<ul>
  <li *ngFor="let item of items; let i = index">
    {{ i + 1 }}. {{ item.name }}
  </li>
</ul>
```
- Para cada item na lista `items`, um novo item de lista (`<li>`) é criado, mostrando o nome do item e seu número na lista.

### 5. `ngModel`

A diretiva `ngModel` é usada em formulários para capturar o que o usuário digita.

```html
<input type="text" [(ngModel)]="userName" placeholder="Digite seu nome" />
<p>Olá, {{ userName }}!</p>
```
- O que o usuário digita no campo de entrada será armazenado na variável `userName` e será mostrado na mensagem "Olá, [nome]".
  
<!-- ### Criando o Serviço de Autenticação

Para gerenciar o estado da aplicação e os dados do usuário, é fundamental criar um serviço de autenticação. Utilize o comando abaixo para gerar o serviço:

```bash
ng generate service auth
```

Este serviço será responsável por verificar as credenciais do usuário e controlar o acesso à aplicação.

### O que são serviços?

Os serviços no Angular são como ajudantes que tornam mais fácil compartilhar informações e funções entre diferentes partes de um aplicativo. Eles permitem que você escreva um pedaço de código uma vez e o utilize em várias áreas, o que ajuda a manter as coisas organizadas e evita repetição. Esses serviços funcionam como se fossem uma única fonte de verdade, ou seja, há apenas uma versão deles no aplicativo, facilitando o compartilhamento de dados, como informações sobre um usuário logado. Ao separar a lógica que faz o aplicativo funcionar da parte que exibe as informações, os serviços tornam o código mais fácil de manter e testar. Eles são frequentemente usados para gerenciar coisas como logins de usuários ou comunicação com servidores, tornando o desenvolvimento de aplicativos Angular mais simples e eficiente.

### Protegendo a Rota Home com um Guard

Como a página `home` deve ser acessível apenas por usuários autenticados, utilizaremos um guard. Para criar o guard, execute o seguinte comando:

```bash
ng generate guard auth
```

Após executar o comando para criar o guard, o Angular irá fazer a seguinte pergunta:

```
? Which type of guard would you like to create? (Press <space> to select, <a> to toggle all,
<i> to invert selection, and <enter> to proceed)

❯◯ CanActivate
 ◯ CanActivateChild
 ◯ CanDeactivate
 ◯ CanMatch
```
Nessa pergunta, você deverá escolher o tipo de guard que deseja criar. Aqui está o que cada opção significa:

- **CanActivate**: Este guard é usado para proteger uma rota, garantindo que o usuário só possa acessá-la se atender a determinados critérios, como estar autenticado.

- **CanActivateChild**: Este guard protege rotas filhas. Ou seja, se você tiver rotas aninhadas sob uma rota principal, este guard pode ser utilizado para garantir que um usuário tenha acesso às rotas filhas.

- **CanDeactivate**: Este guard verifica se é seguro sair de uma rota atual. Ele pode ser usado, por exemplo, para avisar o usuário se há alterações não salvas em um formulário antes de navegar para outra página.

- **CanMatch**: Este guard é uma nova opção que permite que você controle se uma rota deve ser correspondida ou não, baseado em condições personalizadas.

Para o nosso caso de uso, que envolve a proteção da rota `home`, precione a barra de espaço para selecionar a opção **CanActivate**. Após a seleção, pressione `<enter>` para prosseguir com a criação do guard.


### O que são guards?

Os guards no Angular são como porteiros que ajudam a controlar o acesso a diferentes partes de um aplicativo. Eles verificam se o usuário tem permissão para acessar uma determinada página ou recurso. Por exemplo, um guard pode impedir que alguém veja a página inicial de um aplicativo, a menos que esteja logado. Isso é útil para proteger informações importantes ou garantir que as pessoas sigam as etapas corretas antes de acessar certas áreas. Os guards ajudam a manter a segurança do aplicativo e a melhorar a experiência do usuário, garantindo que cada pessoa tenha acesso apenas ao que deve.

### Implementando o Serviço de Autenticação

Abaixo está a implementação do nosso serviço de autenticação:

```typescript
// src/app/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Exemplo de credenciais corretas
  private validCredentials = {
    username: 'user',
    password: 'password',
  };

  constructor() {}

  // Método para verificar as credenciais do usuário
  login(username: string, password: string): boolean {
    return (
      username === this.validCredentials.username &&
      password === this.validCredentials.password
    );
  }

  // Método que verifica se o usuário está logado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  // Simula o login utilizando o localStorage para armazenar um token
  authenticate(token: string): void {
    localStorage.setItem('userToken', token);
  }

  // Método para realizar logout, removendo o token do localStorage
  logout(): void {
    localStorage.removeItem('userToken');
  }
}
```

### Implementando o AuthGuard

Agora, vamos implementar o guard de autenticação para proteger a rota `home`:

```typescript
// src/app/auth.guard.ts

import { Injectable } from '@angular/core'; // Permite que essa classe seja usada em outras partes do aplicativo
import { CanActivate, Router } from '@angular/router'; // Importa as ferramentas necessárias para controlar o acesso às páginas
import { AuthService } from './auth.service'; // Importa o serviço que verifica se o usuário está logado

// Torna essa classe disponível para ser usada em todo o aplicativo
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate { // Define que esta classe pode decidir se uma página pode ser acessada
  constructor(private authService: AuthService, private router: Router) {} // Pega o serviço de autenticação e a ferramenta de navegação

  // Esse método verifica se o usuário pode acessar a página
  canActivate(): boolean {
    // Checa se o usuário está logado usando o serviço de autenticação
    if (this.authService.isLoggedIn()) {
      return true; // Se o usuário estiver logado, permite que ele acesse a página
    } else {
      this.router.navigate(['/login']); // Se não estiver logado, leva o usuário para a página de login
      return false; // Bloqueia o acesso à página
    }
  }
}

```

### Configurando as Rotas no App

Agora, precisamos atualizar o arquivo de rotas `app.routes.ts` para incluir a proteção da rota `home`:

```typescript
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' }, // Redireciona para login se a URL estiver vazia
    { path: 'login', component: LoginComponent }, // Rota para a página de login
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Rota para a página home com proteção
];
```

### Implementando a Lógica de Login 

No arquivo `login.component.ts`, implemente a lógica para o login do usuário:

```typescript
// Importa os módulos necessários do Angular
import { Component } from '@angular/core'; // Permite criar um novo componente
import { AuthService } from '../../auth.service'; // Importa o serviço que verifica as credenciais do usuário
import { Router } from '@angular/router'; // Importa a ferramenta que permite navegar entre as páginas
import { CommonModule } from '@angular/common'; // Importa funcionalidades comuns do Angular
import { FormsModule } from '@angular/forms'; // Importa funcionalidades para trabalhar com formulários

// Define o componente com um seletor e configurações
@Component({
  selector: 'app-login', // Nome do componente que será usado no HTML
  standalone: true, // Indica que este componente pode ser usado sozinho
  imports: [CommonModule, FormsModule], // Importa módulos necessários para o funcionamento do componente
  templateUrl: './login.component.html', // Caminho do arquivo HTML que contém o layout do componente
  styleUrl: './login.component.css' // Caminho do arquivo CSS que contém os estilos do componente
})
export class LoginComponent {
  // Declara as variáveis que serão usadas no componente
  username: string = ''; // Armazena o nome de usuário que o usuário digita
  password: string = ''; // Armazena a senha que o usuário digita
  errorMessage: string = ''; // Armazena mensagens de erro para mostrar ao usuário

  // O construtor é chamado quando o componente é criado
  constructor(private authService: AuthService, private router: Router) {}

  // Método que é chamado quando o usuário tenta fazer login
  login() {
    // Verifica se as credenciais do usuário estão corretas
    if (this.authService.login(this.username, this.password)) {
      // Se o login for bem-sucedido, simula um token de autenticação
      this.authService.authenticate('fake-token');
      // Redireciona o usuário para a página inicial
      this.router.navigate(['/home']);
    } else {
      // Se o login falhar, exibe uma mensagem de erro
      this.errorMessage = 'Credenciais inválidas. Tente novamente.'; // Informa ao usuário que as credenciais estão erradas
    }
  }
}
```

-->
### Criando o Formulário de Login

No arquivo `login.component.html`, crie um formulário simples para a entrada de credenciais:


```html
<div class="login-container">
    <h2>Login</h2>
    <form>
        <div>
            <label for="username">Usuário:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Entrar</button>
    </form>
</div>

```

<!-- 
```html
<div class="login-container">
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <div>
        <label for="username">Usuário:</label>
        <input type="text" id="username" [(ngModel)]="username" name="username" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required />
      </div>
      <div *ngIf="errorMessage" class="error">{{ errorMessage }}</div> 
      <button type="submit">Entrar</button>
    </form>
</div>
``` -->

### Estilização com Tailwind CSS [^4]

#### 1. Instale o Tailwind CSS

Execute o seguinte comando para instalar o Tailwind CSS, juntamente com o PostCSS e o Autoprefixer:

```bash
npm install -D tailwindcss postcss autoprefixer
```

#### 2. Inicialize o arquivo de configuração do Tailwind CSS

Em seguida, crie o arquivo de configuração do Tailwind CSS com o comando abaixo:

```bash
npx tailwindcss init
```

#### 3. Configure o Tailwind CSS

Abra o arquivo `tailwind.config.js` e adicione a configuração abaixo para especificar onde o Tailwind deve buscar os arquivos que utilizarão suas classes:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 4. Adicione as diretivas do Tailwind CSS no arquivo de estilização global

No seu arquivo de estilos global (geralmente `styles.css`), inclua as diretivas do Tailwind para que suas classes sejam aplicadas corretamente:

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 5. Modifique seu HTML como achar melhor, usaremos esse exemplo abaixo.

```html
<div class="login-container flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Usuário:</label>
                <input type="text" id="username" name="username" required
                    class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Senha:</label>
                <input type="password" id="password" name="password" required
                    class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <button type="submit"
                class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Entrar
            </button>
        </form>
    </div>
</div>

```

#### 6. Execute a aplicação

Por fim, inicie a aplicação Angular com o comando:

```bash
ng serve
```

O Angular já cuida da compilação do CSS automaticamente, portanto não é necessário executar um comando separado para isso.

### Mensagem de Boas-Vindas na Página Home

No arquivo `home.component.ts`, implemente uma mensagem simples para a página inicial:

```html
<h2>Hello World!!!</h2>
```

### Conclusão

Você agora tem um esboço básico de um aplicativo Angular, incluindo a configuração de páginas, rotas e serviços. A partir daqui, você pode expandir sua aplicação com componentes adicionais, gerenciamento de estado e integração com APIs.

### Referencias

[^1]: ANGULAR. *What is Angular?* Disponível em: <https://angular.dev/overview>. Acesso em: 12 out. 2024.

[^2]: ANGULAR. *Installation* Disponível em: <https://angular.dev/installation>. Acesso em: 12 out. 2024.

[^3]: CASA DO DESENVOLVEDORE. *Renderização Web: qual a diferença entre CSR, SPA, SSR, SSG e ISR?* Disponível em: <https://blog.casadodesenvolvedor.com.br/renderizacao-web/>. Acesso em: 12 out. 2024.

[^4]: TAILWIND CSS. *Install Tailwind CSS with Angular* Disponível em: <https://tailwindcss.com/docs/guides/angular>. Acesso em: 12 out. 2024.

[^5]: ANGULAR. *In-depth Guides* Disponível em: <https://angular.dev/guide/components>. Acesso em: 12 out. 2024.

