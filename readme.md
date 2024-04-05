#Extração de dados com Cypress#

Este projeto demonstra como realizar a extração de dados de websites usando Cypress.

Sumário
Pré-requisitos
Instalação
Testes
Cypress.json
Estrutura de Pastas
Relatórios
Pré-requisitos
Node.js instalado (versão 12.x ou superior)
NPM instalado (versão 6.x ou superior)
Instalação
Para instalar as dependências do projeto, execute o comando:

npm install


Testes

#Para executar os testes, execute o comando:

npm run test

Cypress.json
O arquivo cypress.json contém as configurações para a execução dos testes. Aqui, você pode configurar o URL base, os tempos dos testes, entre outras opções.

Estrutura de Pastas
A estrutura de pastas do projeto é a seguinte:

extração-dados-cypress/
│
├── cypress/
│   ├── integration/
│   │   └── extracao-dados.spec.js
│   ├── fixtures/
│   ├── plugins/
│   └── support/
│
├── cypress.json
└── package.json