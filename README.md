# Automação de Testes com Playwright e Cucumber

Este projeto utiliza Playwright e Cucumber para automação de testes de front-end e back-end.

## Configuração Inicial

Siga os passos abaixo para configurar o ambiente do projeto.

### Instalação de Pacotes

Instale as dependências necessárias executando os seguintes comandos no terminal:

```bash
npm init -y
npm install playwright @cucumber/cucumber chai
npm install --save-dev @types/chai @types/node typescript
tsc --init
npm install @faker-js/faker gerador-validador-cpf dotenv
npm install --save-dev eslint eslint-plugin-cucumber cucumber-html-reporter

Configuração do Relatório HTML
Gere relatórios HTML dos testes com o seguinte comando:

node generate-report.js

Executando Testes
Execute os testes com os comandos abaixo:

Para testes do desafio de front-end:
npm test

Para testes de back-end:
npx playwright test

Certifique-se de ajustar os scripts no seu arquivo package.json conforme necessário para refletir estes comandos.

Execução dos Comandos de Teste
Use o formato JSON para executar os testes e gerar relatórios:
npx cucumber-js --format json:test-results/cucumber_report.json

Comandos Adicionais
Para funcionalidades adicionais ou execução de tarefas específicas, use os comandos a seguir conforme necessário:



