# Introdução ao Linux com WSL

### Introdução

O Windows Subsystem for Linux (WSL) é uma ferramenta poderosa que permite aos usuários do Windows executar um ambiente Linux diretamente em seus sistemas operacionais Windows. Isso abre várias possibilidades, incluindo a execução de comandos e programas nativos do Linux, facilitando uma experiência de desenvolvimento mais fluida e eficiente. Neste material, vamos explorar o que é o WSL, como ele funciona e como utilizá-lo para aprimorar sua produtividade no desenvolvimento.

### O que é o WSL?

O WSL é uma camada de compatibilidade que permite rodar binários do Linux no Windows sem a necessidade de uma máquina virtual. Ele permite que você use a maioria dos comandos e programas de um sistema Linux, enquanto ainda está no ambiente Windows. O WSL é especialmente útil para desenvolvedores que desejam acessar ferramentas do Linux diretamente do Windows sem a complexidade de instalar e gerenciar um sistema dual-boot ou uma VM completa.

### Vantagens do WSL

- **Integração com o Windows**: O WSL permite usar ferramentas nativas do Linux diretamente no Windows, como Git, Bash, e linguagens de programação como Python, Node.js, entre outras.

- **Leve e rápido**: Diferente de máquinas virtuais, o WSL usa menos recursos do sistema, resultando em uma experiência mais leve e rápida.

- **Ambiente de desenvolvimento flexível**: Você pode configurar diferentes distribuições do Linux no WSL, como Ubuntu, Debian e OpenSUSE, de acordo com sua preferência.

### Instalando o WSL

Para instalar o WSL no Windows, siga os passos abaixo:

1. **Habilitar o recurso WSL**:
   
   - Abra o **PowerShell** como administrador e execute o seguinte comando:
     
     ```bash
     wsl --install
     ```
     
   - Isso irá habilitar automaticamente o recurso do WSL e instalar a distribuição padrão do Linux (Ubuntu 22.04.4 LTS). [^1]

3. **Escolher uma distribuição Linux**:
   
   - Caso deseje instalar outra distribuição além do Ubuntu, você pode listar as disponíveis com o comando:
     
     ```bash
     wsl --list --online
     ```
     
   - Para instalar uma nova distribuição, execute:
     
     ```bash
     wsl --install -d <nome-da-distribuicao>
     ```
     
     Exemplo:
     
     ```bash
     wsl --install -d debian
     ```

5. **Iniciar o WSL**:
   
   - Após a instalação, você pode iniciar o WSL e abrir a linha de comando do Linux digitando `wsl` no **Prompt de Comando** ou no **PowerShell** [^2].

   - Também é possível usar o atalho "Ubuntu" (ou da distribuição que você instalou) no menu Iniciar do Windows.

### Usando o WSL para Desenvolvimento

Com o WSL, você pode configurar ambientes de desenvolvimento completos diretamente no Windows, aproveitando a facilidade de uso das ferramentas Linux.

### Desenvolvimento Web

- **Node.js**: Instale o Node.js diretamente no WSL para gerenciar dependências e rodar projetos JavaScript com facilidade. Para uma maior flexibilidade na instalação e gerenciamento de versões do Node.js, você pode utilizar o **NVM** (Node Version Manager), que permite alternar entre diferentes versões do Node.js [^3].

  Para instalar o NVM, siga os passos:

1. Execute o comando abaixo para baixar e instalar o script do NVM:
     
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     ```

2. Após a instalação, feche e reabra o terminal, ou execute:
     
     ```bash
     source ~/.bashrc
     ```

3. Para verificar a instalação e listar as versões disponíveis, execute:
     
     ```bash
     nvm ls-remote
     ```

4. Para instalar uma versão específica do Node.js, por exemplo, a versão 18:
     
     ```bash
     nvm install 18
     ```

5. Você pode alternar entre diferentes versões com o comando:
     
     ```bash
     nvm use 18
     ```

5. Verifique a versão do node:
     
     ```bash
     node -v
     ```

5. É importante verificar se o Node Package Manager, o NPM, está instalado na sua máq:
     
     ```bash
     npm -v
     ```

### Integração com o VS Code

O **Visual Studio Code** oferece uma excelente integração com o WSL, permitindo que você desenvolva diretamente no Linux enquanto usa a interface gráfica do VS Code no Windows. Para configurar isso:

1. Instale o **VS Code** no Windows [^4].
2. Instale a extensão **Remote - WSL** no VS Code [^5].
3. Abra o terminal WSL dentro do VS Code e comece a editar seus arquivos diretamente no Linux.

### Conclusão

O Windows Subsystem for Linux (WSL) oferece aos usuários do Windows uma maneira poderosa de personalizar e aprimorar sua experiência de desenvolvimento no terminal. Com ele, é possível combinar a versatilidade do Linux com a familiaridade do Windows, resultando em uma produtividade aumentada e uma interface de usuário mais amigável. Seja configurando ambientes de desenvolvimento ou utilizando ferramentas do Linux, o WSL torna o desenvolvimento no Windows mais agradável e eficiente.

### Referências

[^1]: LEARN MICROSOFT. *Instalar o WSL*. Disponível em: <https://learn.microsoft.com/pt-br/windows/wsl/install>. Acesso em: 12 out. 2024.  
[^2]: LEARN MICROSOFT. *Usar o WSL*. Disponível em: <https://learn.microsoft.com/pt-br/windows/wsl/basic-commands>. Acesso em: 12 out. 2024.  
[^3]: NVM SH. *Installing and Updating*. Disponível em: <https://github.com/nvm-sh/nvm>. Acesso em: 12 out. 2024.  
[^4]: VISUAL STUDIO CODE. *Download VS Code*. Disponível em: <https://code.visualstudio.com/download>. Acesso em: 12 out. 2024.  
[^5]: VISUAL STUDIO CODE. *Remote - WSL extension*. Disponível em: <https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl>. Acesso em: 12 out. 2024.  
