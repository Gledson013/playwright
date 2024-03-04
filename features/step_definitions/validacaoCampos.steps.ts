import { RegisterPage } from '../pages/registro_sucesso/register_page';

import { existsSync, } from 'fs';
import { BeforeAll, AfterAll, Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserContext, Browser, chromium, Page } from 'playwright';
import { faker } from '@faker-js/faker';
import { generate as generateCPF } from 'gerador-validador-cpf';

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 3000); // Define o tempo limite para 60 segundos


let browser: Browser | null = null;
let page: Page;
let context: BrowserContext;

BeforeAll(async () => {
    console.log(`Diretório atual de trabalho: ${process.cwd()}`);
    browser = await chromium.launch({ headless: false, slowMo: 500 });
    const statePath = 'state.json';
    if (existsSync(statePath)) {
        context = await browser.newContext({ storageState: statePath });
    } else { context = await browser.newContext(); }
    page = await context.newPage();
});


AfterAll(async () => {
    if (context) {
        await context.storageState({ path: 'state.json' });}
    await page.waitForTimeout(50);

    if (browser) {
        await browser.close(); // Closes the browser
        browser = null;
    }
    
});


Given('que estou na página de registros', async function () {    
    await page.goto('https://www.google.com.br/');
});


When('eu submeto o formulário com o campo Ano vazio', async function () {

    // await page.getByLabel('Fazer login').click();
    // await page.getByLabel('E-mail ou telefone').fill('qm.frontend@gmail.com');
    // await page.getByLabel('E-mail ou telefone').press('Enter');
    // await page.getByLabel('Digite sua senha').fill('QM2024meta*');
    // await page.getByLabel('Digite sua senha').press('Enter');

    await page.getByLabel('Google apps').click();
    await page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Contacts' }).click();
    await page.getByRole('button', { name: 'Create contact' }).click();
    await page.getByLabel('Create a contact').click();
    await page.getByLabel('First name').fill('Navio de Cafe 800T');
    await page.getByLabel('First name').press('Tab');
    await page.getByLabel('Last name').fill('25/10/2024');
    // await page.getByLabel('Last name').press('Tab');
    // await page.getByLabel('Show more').first().press('Tab');
    // await page.getByLabel('Company').press('Tab');
    await page.getByLabel('Month', { exact: true }).click();
    await page.getByRole('option', { name: 'November' }).click();
    await page.getByLabel('Save', { exact: true }).click();
    
});

Then('eu devo ver uma mensagem de erro Por favor, Preencha a data completa', async function () {
    await expect(page.getByText('Please fill in a complete date')).toBeVisible();
});
