Sistema de Agendamento de Consultas Médicas


Este projeto da Área de Saúde é um sistema completo de agendamento., um ERP de consultas médicas, composto por três aplicações integradas:

📱 App Mobile: Desenvolvido em React Native
💻 Aplicação Web: Desenvolvida em React com Bootstrap. Com o Bootstrap é possível realizar a criação de interfaces gráficas para sua página na web de forma rápida e fácil.
🌐 API REST: Criada com Node.js e Express, usando SQLite como banco de dados (BD)
O Express.js serve para simplificar e agilizar o desenvolvimento de aplicações web e APIs do lado do servidor (backend) usando Node.js. Ele funciona como um framework web que fornece recursos para gerenciar rotas HTTP, lidar com requisições e respostas, e integrar-se facilmente com bancos de dados, tornando a criação de aplicações escaláveis e fáceis de manter mais eficiente. 

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
Expo : No mundo do desenvolvimento mobile, criar aplicativos para Android e iOS pode ser um desafio, principalmente para quem está começando. É aí que entra o Expo. dev, uma plataforma poderosa que facilita a criação, teste e publicação de aplicativos desenvolvidos com React Native.
O Expo é um framework e uma plataforma de ferramentas para criar aplicativos móveis usando React Native, que simplifica o desenvolvimento, o build e o deploy de apps para Android, iOS e a web. Ele fornece um SDK, um aplicativo chamado Expo Go para testes em tempo real e serviços como o Expo Application Services (EAS) para gerenciar o processo de desenvolvimento de forma mais eficiente, sem exigir a configuração manual de ambientes nativos complexos. 

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

