# Automação Playwright com Cucumber

Este projeto é uma automação de testes usando Playwright e Cucumber.

## Configuração Inicial

Para configurar este projeto, execute os seguintes comandos no terminal:

npm init -y
npm install playwright
npm install @cucumber/cucumber
npm install chai
npm install --save-dev @types/chai
npm install --save-dev @types/node
npm install --save-dev typescript
tsc --init
npm install @faker-js/faker
npm install gerador-validador-cpf
npm install dotenv
npm install eslint --save-dev
npm install eslint-plugin-cucumber --save-dev
npm install --save-dev cucumber-html-reporter
node generate-report.js
npx cucumber-js --format json:test-results/cucumber_report.json


## Executando os Testes

Para executar os testes do desafio de front-end, utilize o comando:

npm test


E para iniciar os testes do desafio de back-end, use:

npx playwright test


Certifique-se de ter configurado os scripts de teste apropriadamente no seu arquivo `package.json`.
