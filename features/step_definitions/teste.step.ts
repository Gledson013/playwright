import { RegisterPage } from '../pages/registro_sucesso/register_page';

import { existsSync,} from 'fs';
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
        browser = await chromium.launch({ headless: false, slowMo: 500});  
        const statePath = 'state.json';
        if (existsSync(statePath)) {
                context = await browser.newContext({ storageState: statePath});
        } else {context = await browser.newContext();}
        page = await context.newPage();
});


AfterAll(async () => {
        if (context) {
                await context.storageState({ path: 'state.json' });
        }
        await page.waitForTimeout(50);

        if (browser) {
                await browser.close(); // Closes the browser
                browser = null;
        }
});


Given('que estou na página de criação de registro', async () => {

        await page.goto('https://www.google.com.br/');
        
        // PODE SER UTILIZADO PARA LOGIN

        // await page.getByLabel('Fazer login').click();
        // await page.getByLabel('E-mail ou telefone').fill('qm.frontend@gmail.com');
        // await page.getByLabel('E-mail ou telefone').press('Enter');
        // await page.getByLabel('Digite sua senha').fill('QM2024meta*');
        // await page.getByLabel('Digite sua senha').press('Enter');

        await page.getByLabel('Google apps').click();

});


When('eu preencho todos os campos obrigatórios', async () => {

        await page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Contacts' }).click();
        await page.getByText('addCreate contact').click();
        await page.getByLabel('Create a contact').click();
        await page.getByLabel('First name').fill('Navio com Sal T370');
        await page.getByLabel('First name').press('Tab');
               
});

When('eu seleciono uma data que corresponda ao input desejado', async () => {

        await page.getByLabel('Last name').fill('25/04/2024 - 7 Dias');

});

When('eu submeto o formulário de registro', async () => {
      
        await page.getByLabel('Save', { exact: true }).click();    

});

Then('um novo registro deve ser criado com sucesso', async () => {
 
        const secondTextLocator = page.locator('text="Added to contacts"').nth(1);
        await expect(secondTextLocator).toBeVisible({ timeout: 5000 });
        
});

Then('a data do registro deve ser exibidamente conforme o input selecionado', async () => {

        await page.waitForTimeout(5000);  
        await expect(page.getByRole('heading', { name: 'Navio com Sal T370 25/04/2024' })).toBeVisible();  

});