import { RegisterPage } from '../pages/registro_sucesso/register_page';

import { existsSync,} from 'fs';
import { BeforeAll, AfterAll, Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserContext, Browser, chromium, Page } from 'playwright';
import { faker } from '@faker-js/faker';
import { generate as generateCPF } from 'gerador-validador-cpf';
import { register } from 'module';

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 3000); // Define o tempo limite para 60 segundos


let browser: Browser | null = null;
let page: Page;
let context: BrowserContext;

let registerPage: RegisterPage;

BeforeAll(async () => {
        console.log(`Diretório atual de trabalho: ${process.cwd()}`);
        browser = await chromium.launch({ headless: false, slowMo: 500});  
        const statePath = 'state.json';
        if (existsSync(statePath)) {
                context = await browser.newContext({ storageState: statePath});
        } else {context = await browser.newContext();}
        page = await context.newPage();

        registerPage = new RegisterPage(page);
});


AfterAll(async () => {
        if (context) {
                await context.storageState({ path: 'state.json' });
        }
        await page.waitForTimeout(50);

        // if (browser) {
        //         await browser.close(); // Closes the browser
        //         browser = null;
        // }
});

Given('que estou na página de criação de registro', async () => {

        registerPage = new RegisterPage(page);
        await registerPage.goToRegistrationPage();  
    
});

When('eu preencho todos os campos obrigatórios', async () => {
 
        await registerPage.fillForm();               
});

When('eu seleciono uma data que corresponda ao input desejado', async () => {

        await registerPage.selectDate();
});

When('eu submeto o formulário de registro', async () => {
      
        await registerPage.submitForm();
});

Then('um novo registro deve ser criado com sucesso', async () => {
 
        await registerPage.verifySuccessRegistration();
});

Then('a data do registro deve ser exibidamente conforme o input selecionado', async () => {

        await registerPage.verifyDate();
});