





# Configurando o SSH para o GitHub no Ubuntu

## Introdução

O SSH (Secure Shell) é um protocolo de rede que permite a comunicação segura entre computadores. No contexto do GitHub, ele pode ser usado para autenticação e transferência de dados entre o seu computador local e o GitHub. Usar SSH é altamente recomendado, pois proporciona uma camada adicional de segurança, garantindo que suas credenciais não sejam expostas em redes inseguras.

## Gerando uma Nova Chave SSH [^1]

**Abra o terminal do Ubuntu e digite:**

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- **Observação:** Se estiver usando um sistema mais antigo que não dá suporte ao algoritmo Ed25519, use:

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**Saída:**

```
> Generating public/private ed25519 key pair. 
Enter file in which to save the key (/home/user/.ssh/id_ed25519): [Pressione ENTER]
```

**Saída:**

```
> Created directory '/home/user/.ssh'.
Enter passphrase (empty for no passphrase): [Aqui você precisa criar uma senha]
Enter same passphrase again: [Digite sua senha novamente]
```

**Saída:**

```
> Your identification has been saved in /home/user/.ssh/id_ed25519
Your public key has been saved in /home/user/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:BnfBJBhk3f7eqewNfXSWneROUZdX+6wkAF3qN4dVG/4 your_email@example.com
The key's randomart image is:
+--[ED25519 256]--+
|     .++ovo..  .B|
|     . .o_o  .oB |
|    (⌐■_■)   .*. |
|       oo.. oo.B |
|  ^_____^ ..= o=E|
|...*    ಠ_ಠ     |
|   ¯\_(ツ)_/¯.O.O|
|           ..o_o.|
|        ^o^.+..  |
+----[SHA256]-----+
```

**Inicie o ssh-agent em segundo plano:**

```
eval "$(ssh-agent -s)"
```

**Saída:**

```
> Agent pid 33908
```

**Adicione sua chave SSH privada ao ssh-agent:**

```
ssh-add ~/.ssh/id_ed25519
```

**Saída:**

```
> Enter passphrase for /home/user/.ssh/id_ed25519: [Aqui você vai digitar sua senha criada e pressionar ENTER]
```

**Saída:**

```
> Identity added: /home/user/.ssh/id_ed25519 (your_email@example.com)
```

**Agora execute o comando abaixo para obter sua chave SSH pública:**

```
cat ~/.ssh/id_ed25519.pub
```

**Saída:**

```
> ssh-ed25519 sdbjabfbaAquiVaiUmMonteDeLetrakzj3U23nCU +sw2yUs3/6Tu your_email@example.com
```

## Adicionando a Chave Pública ao GitHub [^2]

1. Acesse o GitHub em seu navegador e faça login em sua conta.
   
3. Clique na sua foto de perfil no canto superior direito da tela e selecione "Configurações".
   
5. Na barra lateral esquerda, clique em "Chaves SSH e GPG".
   
7. Clique no botão "Nova chave SSH".
   
9. No campo "Título", digite um nome descritivo para sua chave, como "Meu computador pessoal".
    
11. No campo "Chave SSH", copie a sua chave pública que você obteve anteriormente.
    
13. Clique no botão "Adicionar chave".

## Utilizando o SSH para Clonar Repositórios

1. Abra o terminal do Ubuntu.
   
3. Navegue até o diretório onde você deseja clonar o repositório.
   
5. Execute o comando:

```
git clone git@github.com:<nome_do_usuário>/<nome_do_repositório>.git
```

## Gerenciando e Enviando Alterações

1. **Realize as alterações desejadas** nos arquivos do repositório.

2. **Adicione os arquivos modificados ao índice do Git**. Você pode fazer isso de duas maneiras:

   - Para adicionar um arquivo específico, utilize:
     
     ```
     git add <nome_do_arquivo>
     ```
     
   - Para adicionar todos os arquivos modificados de uma vez, use:
     
     ```
     git add .
     ```
     
3. **Crie um commit** para registrar suas alterações no histórico do repositório. É recomendável utilizar **commits semânticos**, que ajudam a descrever de forma clara e concisa a natureza das alterações realizadas. Um commit semântico geralmente segue a seguinte estrutura:

   ```
   tipo(escopo): descrição
   ```

   - **tipo**: indica a natureza da alteração (ex: `feat` para nova funcionalidade, `fix` para correção de bugs, `docs` para alterações na documentação, etc.).
   - **escopo** (opcional): identifica a parte do código afetada pela alteração (ex: um componente específico ou um módulo).
   - **descrição**: uma breve descrição do que foi alterado.

   Por exemplo:
   
   ```
   git commit -m "feat(rating): add star rating component"
   ```
   
   O **escopo**, citado anteriormente, pode ser opcional. Veja:
   
   ```
   git commit -m "feat: add star rating component"
   ```

   Essa abordagem ajuda a manter um histórico de commits mais organizado e facilita a compreensão das alterações ao longo do tempo. Para mais informações sobre commits semânticos, consulte a documentação de Commits Convencionais. [^3]

5. **Envie suas alterações para o repositório remoto** utilizando o comando:
 
   ```
   git push
   ```
   
## Configurando o Usuário no Git [^4]

Para que suas contribuições no Git sejam devidamente atribuídas a você, é fundamental configurar seu nome de usuário e endereço de e-mail. Essas informações são usadas nas mensagens de commit para identificar quem fez as alterações e garantir que suas contribuições sejam corretamente associadas ao seu perfil em plataformas como GitHub e GitLab.

### 1. Configurando o Nome de Usuário

Primeiro, defina seu nome de usuário globalmente com o seguinte comando:

```
git config --global user.name "Fulano de Tal"
```

Substitua **"Fulano de Tal"** pelo seu nome completo ou pelo nome que deseja que apareça nas suas mensagens de commit. Essa configuração ajuda a garantir que sua identidade seja reconhecida em todos os repositórios nos quais você trabalha.

### 2. Configurando o Endereço de E-mail

Em seguida, configure seu endereço de e-mail com o comando abaixo:

```
git config --global user.email fulanodetal@exemplo.br
```

Certifique-se de substituir **fulanodetal@exemplo.br** pelo seu endereço de e-mail real. Este e-mail será associado aos seus commits, por isso é recomendável usar o e-mail que você utiliza nas plataformas de hospedagem de código. Assim, suas contribuições serão devidamente reconhecidas e vinculadas ao seu perfil.

### Importância da Configuração

É crucial que o e-mail utilizado seja o mesmo que você registrou na sua conta do GitHub. Isso garantirá que suas contribuições sejam corretamente atribuídas ao seu perfil, permitindo que você seja reconhecido como colaborador nos repositórios em que contribui. Caso não configure corretamente, você não verá seu nome e e-mail nos commits e, ao tentar realizar um push, o Git retornará um erro, solicitando que você execute essas linhas de comando.

### Verificando as Configurações

Após configurar seu nome e e-mail, você pode confirmar se as configurações foram aplicadas corretamente com o seguinte comando:

```
git config --global --list
```

Esse comando exibirá uma lista das configurações globais do Git, incluindo seu nome e e-mail.

### Confirmação da Configuração

Para garantir que você configurou o nome e e-mail corretamente no Git, execute os seguintes comandos:

```
git config --global user.name
```
O resultado deve ser:

```
Fulano de Tal
```

E para verificar seu e-mail:

```
git config --global user.email
```
O resultado deve ser:

```
fulanodetal@exemplo.br
```

Essas etapas garantem que suas configurações estejam corretas, ajudando a manter um histórico de contribuições limpo e reconhecido.

## Observações

- Certifique-se de manter sua chave SSH privada segura e não a compartilhe com ninguém.
- O uso do SSH é recomendado para maior segurança na comunicação com o GitHub.
- Para mais informações, consulte as referências.

## Git [^5]

O Git é um sistema de controle de versão distribuído que facilita a colaboração em projetos de software, permitindo que várias pessoas trabalhem nos mesmos arquivos simultaneamente. Ele registra as alterações feitas nos arquivos ao longo do tempo, possibilitando a recuperação de versões anteriores do projeto.

### Controle de Versão e o Git

Um sistema de controle de versão (VCS) monitora o histórico de alterações em projetos colaborativos, fornecendo informações sobre quem fez as alterações, quando e por quê. O Git é um VCS distribuído, o que significa que cada desenvolvedor tem uma cópia completa do projeto e seu histórico, permitindo colaboração sem a necessidade de uma conexão constante com um repositório central.

### Sobre Repositórios

Um repositório Git é onde os arquivos e o histórico de alterações de um projeto são armazenados. Cada commit representa uma alteração feita em um arquivo, e os commits podem ser organizados em branches, que são linhas de desenvolvimento separadas. Repositórios Git são unidades autocontidas e qualquer pessoa com uma cópia pode acessar todo o código e histórico do projeto.

### Como o GitHub Funciona

O GitHub hospeda repositórios Git e fornece ferramentas para colaboração, como problemas, pull requests e revisão de código. Ele permite que os desenvolvedores trabalhem juntos em projetos, organizando o trabalho em repositórios e facilitando a criação de branches para desenvolvimento, envio de alterações, discussão de propostas e mesclagem de alterações.

### Comandos Básicos do Git

- `git init`: inicializa um novo repositório Git.
- `git clone`: cria uma cópia local de um projeto remoto.
- `git add`: prepara alterações para serem incluídas no próximo commit.
- `git commit`: salva um snapshot das alterações no histórico do projeto.
- `git status`: mostra o status das alterações.
- `git branch`: lista as branches locais.
- `git merge`: mescla linhas de desenvolvimento.
- `git pull`: atualiza o branch local com alterações remotas.
- `git push`: envia commits locais para o repositório remoto.

### Comandos Mais Comuns

Os comandos do Git são essenciais para realizar tarefas comuns, como adicionar arquivos ao repositório, fazer commits e gerenciar branches. Um conhecimento prático dos comandos é fundamental para o desenvolvimento e a colaboração em projetos.

### Conclusão

A configuração do SSH para o GitHub no Ubuntu é uma etapa importante para garantir uma experiência de desenvolvimento segura e eficiente. Após configurar corretamente suas chaves SSH, você poderá clonar, gerenciar e enviar alterações para seus repositórios com facilidade e segurança.

## Referências

[^1]: GITHUB. *Generating a new SSH key and adding it to the ssh-agent*. Disponível em: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>. Acesso em: 12 out. 2024.  

[^2]: GITHUB. *Adding a new SSH key to your GitHub account*. Disponível em: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>. Acesso em: 12 out. 2024.  

[^3]: CONVENTIONAL COMMITS. *Conventional Commits*. Disponível em: <https://www.conventionalcommits.org/en/v1.0.0/>. Acesso em: 12 out. 2024.

[^4]: GIT SCM. *Git Configuration*. Disponível em: <https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup>. Acesso em: 12 out. 2024.

[^5]: CHACON, S.; STRAUB, B. *Pro Git*. Apress. Disponível em: <https://git-scm.com/>. Acesso em: 12 out. 2024.  
