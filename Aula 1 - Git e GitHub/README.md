## Configurando o SSH para o GitHub no Ubuntu

**Introdução**

O SSH (Secure Shell) é um protocolo de rede que permite a comunicação segura entre computadores. No contexto do GitHub, ele pode ser usado para autenticação e transferência de dados entre o seu computador local e o GitHub.

Este guia irá te auxiliar na configuração do SSH para o GitHub no Ubuntu, incluindo a geração de chaves SSH, adição da chave pública ao GitHub e utilização do SSH para clonar, gerenciar e enviar seus projetos.

## Gerando uma nova chave SSH

**Abra o terminal do Ubuntu e digite:**
   ```
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
- **Observação:** se estiver usando um sistema herdado que não dá suporte ao algoritmo Ed25519, use: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
<br>
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

**Adicionando a chave pública ao GitHub**

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

- **NOTA:** Aqui é necessário que o Git saiba quem você é. Para isso, é necessário definir um usuário usando o comando `git config --global user.name "Fulano de Tal"` e um email usando o comando `git config --global user.email fulanodetal@exemplo.br`. Caso não tenha feito isso seu PC vai explodir brincadeira, o Git apenas vai retornar um erro após a tentativa de push e solicitar que você execute essas linhas de comando.

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

* Este guia é um resumo básico da configuração do SSH para o GitHub. Para mais informações, consulte os recursos adicionais.
* Certifique-se de manter sua chave SSH privada segura e não a compartilhe com ninguém.
* O uso do SSH é recomendado para maior segurança na comunicação com o GitHub.



**Referências**

- Gerando uma nova chave SSH e adicionando-a ao agente SSH. Disponível em: <https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>. Acesso em: 10 abr. 2024.

<br>

- Adicionar uma nova chave SSH à sua conta do GitHub. Disponível em: <https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>. Acesso em: 10 abr. 2024.

<br>

- Git - Book. Disponível em: <https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git>. Acesso em: 10 abr. 2024.

<br>

- Sobre o Git - Documentação do GitHub. Disponível em: <https://docs.github.com/pt/get-started/using-git/about-git>. Acesso em: 10 abr. 2024.