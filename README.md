# Automação Playwright com Cucumber

Este projeto é uma automação de testes usando Playwright e Cucumber.

## Configuração Inicial

Para configurar este projeto, execute os seguintes comandos no terminal:

```bash
npm init -y
npm install playwright
npm install @cucumber/cucumber
npm install chai
npm install --save-dev @types/chai
npm install --save-dev @types/node
npm install --save-dev typescript
tsc --init
Instalação de Dependências Adicionais
Instale as dependências adicionais necessárias para o projeto:

bash
Copy code
npm install @faker-js/faker
npm install gerador-validador-cpf
npm install dotenv
npm install eslint --save-dev
npm install eslint-plugin-cucumber --save-dev
Gerando Relatórios
Para gerar relatórios a partir dos testes, use os seguintes comandos:

bash
Copy code
npm install --save-dev cucumber-html-reporter
node generate-report.js
npx cucumber-js --format json:test-results/cucumber_report.json
Executando os Testes
Para executar os testes, utilize o comando:

bash
Copy code
npm test
Certifique-se de ter configurado os scripts de teste apropriadamente no seu arquivo package.json.

Esse README é um guia básico e você pode expandi-lo conforme necessário para seu projeto e repositório específicos.

perl
Copy code

Para adicionar isso ao seu GitHub, crie um arquivo `README.md` na raiz do seu projeto com o conteúdo acima. Em seguida, use os comandos `git add`, `git commit` e `git push` para adicionar, comitar e enviar o arquivo README para o seu repositório remoto no GitHub.
