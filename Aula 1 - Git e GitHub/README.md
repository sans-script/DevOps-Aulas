## Configurando o SSH para o GitHub no Ubuntu 

**Introdução**

O SSH (Secure Shell) é um protocolo de rede que permite a comunicação segura entre computadores. No contexto do GitHub, ele pode ser usado para autenticação e transferência de dados entre o seu computador local e o GitHub.

Este guia irá te auxiliar na configuração do SSH para o GitHub no Ubuntu, incluindo a geração de chaves SSH, adição da chave pública ao GitHub e utilização do SSH para clonar, gerenciar e enviar seus projetos.

## Gerando uma nova chave SSH [^1]

**Abra o terminal do Ubuntu e digite:**
   ```
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
- **Observação:** se estiver usando um sistema herdado que não dá suporte ao algoritmo Ed25519, use: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
<br>

**Saída:**
```
> Generating public/private ed25519 key pair. 
Enter file in which to save the key (/home/user/.sshid_ed25519): [Precione ENTER]
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
**Agora digite a linha abaixo para iniciar o ssh-agent em segundo plano:**
   ```
   $ eval "$(ssh-agent -s)"
   ```
   **Saída:**
   ```
   > Agent pid 33908
   ```
**Adicione sua chave SSH privada ao ssh-agent digitando:** 
   ```
   $ ssh-add ~/.ssh/id_ed25519
   ```
**Saída:**
   ```
  > Enter passphrase for /home/user/.ssh/id_ed25519: [Aqui você vai digitar sua senha criada e precionar ENTER]
   ```
**Saída:**
   ```
   > Identity added: /home/user/.ssh/id_ed25519 (your_email@exemple.com)
   ```
**Agora execute o comando abaixo para obter sua chave SSH privada:**
   ```
   $ cat ~/.ssh/id_ed25519.pub
   ```
**Saída:**
   ```
   > ssh-ed25519 sdbjabfbaAquiVaiUmMonteDeLetrakzj3U23nCU +sw2yUs3/6Tu your_email@exemple.com
   ```

**Adicionando a chave pública ao GitHub** [^2]

1. Acesse o GitHub em seu navegador e faça login em sua conta.

2. Clique na sua foto de perfil no canto superior direito da tela e selecione "Configurações".

3. Na barra lateral esquerda, clique em "Chaves SSH e GPG".

4. Clique no botão "Nova chave SSH".

5. No campo "Título", digite um nome descritivo para sua chave, como "Meu computador pessoal".

6. No campo "Chave SSH", copie a sua chave pública. Você pode encontrar a chave pública no arquivo `~/.ssh/id_ed25519.pub`.

7. Clique no botão "Adicionar chave".

**Utilizando o SSH para clonar repositórios**

1. Abra o terminal do Ubuntu.

2. Navegue até o diretório onde você deseja clonar o repositório.

3. Execute o comando `git clone git@github.com:<nome_do_usuário>/<nome_do_repositório>.git`.

**Gerenciando e enviando alterações**

1. Faça as alterações desejadas nos arquivos do repositório.

2. Adicione os arquivos modificados ao índice do Git usando o comando `git add <nome_do_arquivo>` ou `git add .` para adicionar todos os arquivos.

3. Faça um commit das alterações usando o comando `git commit -m "Mensagem de commit"`.

4. Envie as alterações para o repositório remoto usando o comando `git push`.

> [!NOTE]
> **Nota:** Aqui é necessário que o Git saiba quem você é. Para isso, é  necessário definir um usuário usando o comando `git config   --global user.name "Fulano de Tal"` e um email usando o comando  `git config --global user.email fulanodetal@exemplo.br`. Caso   não tenha feito isso seu PC vai explodir brincadeira, o Git  apenas vai retornar um erro após a tentativa de push e solicitar que você execute essas linhas de comando. [^3]
   

* Confirme que você configurou o nome e de usuário e email corretamente no Git:

    ```
    $ git config --global user.name
    > Fulano de Tal
    ```
    ```
    $ git config --global user.email
    > fulanodetal@exemplo.br
    ```

**Observações**

* Certifique-se de manter sua chave SSH privada segura e não a compartilhe com ninguém.
* O uso do SSH é recomendado para maior segurança na comunicação com o GitHub.
* Para mais informações, consulte as referências.

## Git [^4]

O Git é um sistema de controle de versão distribuído que facilita a colaboração em projetos de software, permitindo que várias pessoas trabalhem nos mesmos arquivos simultaneamente. Ele registra as alterações feitas nos arquivos ao longo do tempo, possibilitando a recuperação de versões anteriores do projeto.

**Controle de Versão e o Git**

Um sistema de controle de versão (VCS) monitora o histórico de alterações em projetos colaborativos, fornecendo informações sobre quem fez as alterações, quando e por quê. O Git é um VCS distribuído, o que significa que cada desenvolvedor tem uma cópia completa do projeto e seu histórico, permitindo colaboração sem a necessidade de uma conexão constante com um repositório central.

**Sobre Repositórios**

Um repositório Git é onde os arquivos e o histórico de alterações de um projeto são armazenados. Cada commit representa uma alteração feita em um arquivo, e os commits podem ser organizados em branches, que são linhas de desenvolvimento separadas. Repositórios Git são unidades autocontidas e qualquer pessoa com uma cópia pode acessar todo o código e histórico do projeto.

**Como o GitHub Funciona**

O GitHub hospeda repositórios Git e fornece ferramentas para colaboração, como problemas, pull requests e revisão de código. Ele permite que os desenvolvedores trabalhem juntos em projetos, organizando o trabalho em repositórios e facilitando a criação de branches para desenvolvimento, envio de alterações, discussão de propostas e mesclagem de alterações.

**Comandos Básicos do Git**

- `git init`: inicializa um novo repositório Git.
- `git clone`: cria uma cópia local de um projeto remoto.
- `git add`: prepara alterações para serem incluídas no próximo commit.
- `git commit`: salva um snapshot das alterações no histórico do projeto.
- `git status`: mostra o status das alterações.
- `git branch`: lista as branches locais.
- `git merge`: mescla linhas de desenvolvimento.
- `git pull`: atualiza o branch local com alterações remotas.
- `git push`: envia commits locais para o repositório remoto.

**Comandos mais avançados do Git**

Aqui estão explicações e exemplos de uso dos comandos `git rebase`, `git merge` e `git stash`:

1. `git rebase`: usado para reorganizar o histórico de commits de uma branch. Ele move ou combina uma sequência de commits de uma branch para outra, alterando a base (base) dos commits. Isso é útil para manter um histórico de commits limpo e linear.

    **Exemplo:**
    Suponha que você esteja trabalhando em uma branch `feature`, e  enquanto você está trabalhando nela, vários commits foram adicionados à branch principal (`main`). Antes de mesclar sua    `feature` de volta à `main`, você pode reorganizar seu  histórico de commits usando `git rebase` para que ele se  aplique limpa e linearmente ao topo da `main`.

    ```
    $ git checkout feature
    $ git rebase main
    ```

<br>

2. `git merge`: usado para mesclar duas ou mais linhas de desenvolvimento (geralmente branches) juntas. Ele combina as alterações de uma branch específica em outra, criando um novo commit que representa a combinação dessas alterações.

    **Exemplo:**
    Suponha que você tenha terminado de trabalhar em uma nova   funcionalidade na branch `nova-funcionalidade` e queira mesclar   suas alterações de volta à branch `main`. Você pode fazer isso    usando `git merge`:

        
    ```
    $ git checkout main
    $ git merge nova-funcionalidade
    ```

<br>


3. `git stash`: usado para temporariamente armazenar alterações locais que ainda não foram commitadas em um local temporário chamado "stash". Isso permite que você limpe o seu diretório de trabalho e mude para outra branch sem ter que fazer um commit não relacionado ou perder suas alterações.

    **Exemplo:**
    Suponha que você esteja trabalhando em uma branch `feature` e   precise mudar para outra branch `bugfix` para corrigir um problema    urgente. No entanto, você ainda não terminou de trabalhar na   `feature`. Você pode usar `git stash` para armazenar  temporariamente suas alterações, mudar para a branch `bugfix` e  depois aplicar suas alterações novamente quando estiver pronto:

    ```markdown
    $ git checkout main
    $ git merge nova-funcionalidade
    # Faça as correções necessárias
    $ git stash apply
    ```

**Como criar um repositório e subir alterações usando a linha de comando do Git**

1. **Inicialize um novo repositório Git localmente**:
   Abra o terminal ou prompt de comando e navegue até o diretório onde deseja criar o repositório. Em seguida, execute o comando `git init` para inicializar um novo repositório Git neste diretório.

   ```bash
   git init
   ```

2. **Adicione arquivos ao repositório**:
   Adicione os arquivos que você deseja incluir no repositório usando o comando `git add`. Você pode adicionar arquivos específicos ou adicionar todos os arquivos no diretório usando `git add .`.

   ```bash
   git add arquivo1.txt arquivo2.txt
   ```

   ou

   ```bash
   git add .
   ```
   
3. **Faça um commit das alterações**:
   Depois de adicionar os arquivos, você precisa fazer um commit para confirmar as alterações no repositório. Use o comando `git commit -m "Mensagem do commit"` para fazer isso. Substitua "Mensagem do commit" por uma breve descrição das alterações que você está commitando.

   ```bash
   git commit -m "Adicionando arquivos de projeto inicial"
   ```

4. **Conecte seu repositório local a um repositório remoto**:
   Se ainda não tiver um repositório remoto configurado (por exemplo, no GitHub), você precisará conectá-lo ao seu repositório local. Use o comando `git remote add origin URL_DO_REPOSITORIO_REMOTO`, substituindo `URL_DO_REPOSITORIO_REMOTO` pela URL do seu repositório remoto.

   ```bash
   git remote add origin https://github.com/seu_usuario/seu_repositorio.git
   ```

5. **Envie suas alterações para o repositório remoto**:
   Agora que seu repositório local está conectado ao repositório remoto, você pode enviar suas alterações usando o comando `git push`. Sua branch talvez esteja, por padrão, nomeada como `master`. Para resolver isso,  o comando `git branch -M main` é utilizado para renomear o branch atual para `main`.

   ```bash
   git branch -M main
   ```
   **Em seguida execute:**
   ```bash
   git push -u origin main
   ```

Pronto! Agora suas alterações locais foram enviadas para o repositório remoto e estão disponíveis para colaboradores ou para serem acessadas de outros dispositivos. Certifique-se de atualizar seu repositório local usando `git pull` sempre que começar a trabalhar em um novo conjunto de alterações para garantir que você esteja sincronizado com as alterações remotas mais recentes.

**Referências**

[^1]: Gerando uma nova chave SSH e adicionando-a ao agente SSH. Disponível em: <https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>. Acesso em: 10 de abr. de 2024.

[^2]: Adicionar uma nova chave SSH à sua conta do GitHub. Disponível em: <https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>. Acesso em: 10 de abr. de 2024.

[^3]: Git - Book. Disponível em: <https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git>. Acesso em: 10 de abr. de 2024.

[^4]: Sobre o Git - Documentação do GitHub. Disponível em: <https://docs.github.com/pt/get-started/using-git/about-git>. Acesso em: 10 de abr. de 2024.
