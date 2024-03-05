Configuração Inicial
Siga os passos abaixo para configurar o ambiente do projeto.

Instalação de Pacotes
Instale as dependências necessárias executando os seguintes comandos no terminal:

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

Próximos Passos
Explore o código do projeto e familiarize-se com sua estrutura.
Comece a escrever seus próprios testes usando Cucumber e Chai.
Consulte a documentação das ferramentas utilizadas para obter mais informações.
Dúvidas?
Entre em contato com a equipe de desenvolvimento para obter ajuda.
Observações:

Este README é apenas um guia inicial. Você pode adaptá-lo conforme suas necessidades.
Utilize ferramentas de formatação de texto para deixar o README mais elegante.
Ferramentas Úteis
Editor de Markdown online: https://stackedit.io/
Extensão de Markdown para VS Code: [URL inválido removido]
Links Úteis
Documentação do Cucumber: https://cucumber.io/
Documentação do Chai: https://www.chaijs.com/
Documentação do Playwright: https://playwright.dev/
Licença
Este projeto está licenciado sob a licença MIT.
