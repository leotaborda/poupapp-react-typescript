# React com Typescript: Aplique Hooks e Context API Tipados

Este repositório contém o código desenvolvido durante o curso "React com Typescript: Aplique Hooks e Context API Tipados" da Alura. O objetivo principal do curso é aprimorar a estrutura e a acessibilidade de uma aplicação React utilizando Typescript, Hooks e Context API.

## Sobre o Curso

O curso aborda a refatoração de componentes React para otimizar o gerenciamento de estados e a manipulação do DOM, com foco na melhoria da acessibilidade e na eliminação de padrões como "prop drilling".

### Tópicos Abordados

*   **Introdução ao PolpaApp:** Apresentação da tela inicial e da necessidade de centralização de dados e estados.
*   **Funcionalidade de Adição de Transações:** Implementação de uma modal para adicionar transações, com foco na correção de problemas de acessibilidade.
*   **Acessibilidade da Modal:** Refatoração da modal para torná-la mais acessível, utilizando React e TypeScript.
*   **Refatoração do Componente Modal:** Remoção de propriedades desnecessárias e otimização do componente para manipulação de abertura e fechamento.
*   **Implementação do `forwardRef`:** Utilização do `forwardRef` para expor o elemento `dialogElement` ao componente pai.
*   **Definição da Interface `ModalHandle`:** Criação de uma interface para lidar com os métodos de controle da modal.

## Estrutura do Código

O código está organizado da seguinte forma:

*   `src/`: Contém o código fonte da aplicação.
*   `components/`: Inclui os componentes React reutilizáveis.
*   `Modal/`: Componente específico da modal, com seus respectivos arquivos de estilo e lógica.
*   `index.tsx`: Arquivo principal do componente modal, onde a refatoração é realizada.

## Como Executar o Projeto

Para executar este projeto, siga as instruções abaixo:

1.  Clone este repositório:

    ```bash
    git clone [URL do Repositório]
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd [nome do diretório]
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

    O projeto estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* e enviar *pull requests* para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
