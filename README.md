# Automação de Testes com Playwright, Cucumber e TypeScript

Projeto de automação de testes end-to-end (E2E) para aplicações web, utilizando Playwright, Cucumber e TypeScript.

## Configuração do Projeto

Siga os passos abaixo para configurar o ambiente de desenvolvimento.

### Pré-requisitos

- Node.js (versão recomendada 14 ou superior)
- npm (gerenciador de pacotes Node.js)

### Instalação

Clone o repositório e instale as dependências.

```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
npm install
```

## Configuração do TypeScript

Inicialize o TypeScript e configure o arquivo tsconfig.json.

```
tsc --init
```

## Instalação do Playwright
Instale o Playwright e todos os navegadores necessários

```
npm init playwright@latest
```
## Instalação do Cucumber
Instale o Cucumber e as dependências relacionadas.
```
npm install @cucumber/cucumber chai @types/chai
```


# Executando Testes
## Testes de Backend
Para executar os testes de backend, use o seguinte comando:

```
npx playwright test
```

## Testes de Backend
Para executar os testes de frantend, use o seguinte comando:

```
npm test
```
## Relatórios
Gere relatórios HTML após a execução dos testes.
```
npm run generate-report
```
## Os relatórios serão salvos no diretório `reports/

## Contribuição
Instruções para contribuir para o projeto.

Faça um Fork do repositório.
Crie uma branch para sua feature (git checkout -b feature/suaFeature).
Faça commit das suas mudanças (git commit -am 'Adiciona alguma feature').
Faça push para a branch (git push origin feature/suaFeature).
Abra um Pull Request.

# Automação de Testes com Playwright e Cucumber no GitHub Actions

Este projeto utiliza GitHub Actions para automatizar a execução de testes end-to-end com Playwright e Cucumber.

## CI/CD com GitHub Actions

O arquivo `.github/workflows/playwright.yml` configura o GitHub Actions para instalar dependências, executar testes e gerar relatórios de teste sempre que ocorrer um `push` ou `pull request` nas branches `main` ou `master`.

### Estrutura do Workflow

O workflow é composto pelas seguintes etapas:

1. Checkout do código
2. Configuração do ambiente Node.js
3. Instalação das dependências do projeto
4. Instalação dos navegadores necessários para o Playwright
5. Execução dos testes com Playwright e Cucumber
6. Upload do relatório de testes como um artefato do workflow

### Exemplo de Workflow

Aqui está o trecho do arquivo de workflow `.github/workflows/playwright.yml` que configura as etapas mencionadas acima:

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - name: Install dependencies
        run: npm install
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run Playwright tests
        run: npx playwright test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30







