// step_definitions/registro_steps.ts

import { Given, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Before(async function () {
    await this.openBrowser();
});

After(async function () {
    await this.closeBrowser();
});

Given('que estou na página de cadastro da Leroy Merlin', async function () {
    await this.page.goto('https://www.leroymerlin.com.br/cadastre-se?redirect=https%3A%2F%2Fwww.leroymerlin.com.br%2Fminha-conta%2Fdados-pessoais');
    // O resto do seu código...
});
