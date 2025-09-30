Sistema de Agendamento de Consultas Médicas
Este projeto da Área de Saúde é um sistema completo de agendamento., um ERP de consultas médicas, composto por três aplicações integradas:

📱 App Mobile: Desenvolvido em React Native
💻 Aplicação Web: Desenvolvida em React com Bootstrap
🌐 API REST: Criada com Node.js e Express, usando SQLite como banco de dados (BD)


Funcionalidades
📅 CRUD de Consultas Médicas:

Criar uma nova consulta
Visualizar todas as consultas agendadas
Editar os dados de uma consulta
Excluir uma consulta existente
🔗 Integração Completa entre Frontend e Backend:

Comunicação via axios para sincronizar dados entre as plataformas mobile e web, garantindo consistência e performance.
💡 Tecnologias Modernas:

React (com uso de useState, useEffect), React Native, Node.js, Express e axios são usados para assegurar que o sistema seja robusto, moderno e fácil de escalar.

🛠️ Tecnologias Utilizadas  - Aplicação FullStack e Mobile

📱 Frontend Mobile

React Native: Para criar uma interface amigável e intuitiva
Axios: Requisições HTTP para comunicação com o backend
Hooks (useState, useEffect): Gerenciamento de estado e ciclo de vida dos componentes

💻 Frontend Web
React: Base para desenvolvimento da aplicação web
Bootstrap: Design responsivo e interface moderna
Axios: Comunicação simples e eficiente com a API
JavaScript (ES6): Manipulação e controle dos componentes

🌐 Backend
Node.js com Express: Base para a criação da API RESTful
SQLite: Banco de dados leve e eficiente, ideal para o armazenamento de dados de consultas médicas
CRUD Completo: Implementação completa das operações de criação, leitura, atualização e exclusão de consultas

🚀 Como Rodar o Projeto

Instale as Dependências:
npm install
Executar o App Mobile (se estiver no PC):
npm expo start --web
Para abrir o App Mobile no celular (lembre-se de baixar o ExpoGO antes e escanear o QRcode depois):
npm expo start
Executar a Aplicação Web:
npm run dev
Executar a API:
node --watch src/index.js

