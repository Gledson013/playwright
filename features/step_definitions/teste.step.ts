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
        //context = await browser.newContext({ storageState: 'state.json'});
        //context.setDefaultNavigationTimeout(555000);
        //await page.setViewportSize({ width: 1920, height: 1080 });

        const statePath = 'state.json';
        if (existsSync(statePath)) {
                context = await browser.newContext({ storageState: statePath});
        } else {
                context = await browser.newContext();
         }

        // const context = await browser.newContext({ storageState: 'state.json'}); // Para persistir o estado do navegador
        page = await context.newPage();
});

AfterAll(async () => {
        //await context.storageState({ path: 'state.json'});
        if (context) {
                await context.storageState({ path: 'state.json' });
        }
        await page.waitForTimeout(50);
        // if (browser) {
        //         await browser.close();
        //         browser = null;
        // }
});

Given('que estou na página de criação de registro', async () => {

        await page.goto('https://www.google.com.br/');

        // await page.getByLabel('Fazer login').click();
        // await page.getByLabel('E-mail ou telefone').fill('qm.frontend@gmail.com');
        // await page.getByLabel('E-mail ou telefone').press('Enter');
        // await page.getByLabel('Digite sua senha').fill('QM2024meta*');
        // await page.getByLabel('Digite sua senha').press('Enter');
        await page.getByLabel('Google apps').click();

        await page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Contacts' }).click();
        await page.getByText('addCreate contact').click();
        await page.getByLabel('Create a contact').click();
        await page.getByLabel('First name').fill('Navio com Sal T370');
        await page.getByLabel('First name').press('Tab');
        await page.getByLabel('Last name').fill('25/04/2024 - 7 Dias');
        await page.getByLabel('Save', { exact: true }).click();
        await page.waitForTimeout(5000);

        // const toastLocator = page.locator('text="Novo contato criado"');
        // await expect(toastLocator).toContainText("Novo contato criado", { timeout: 5000 });
        // await expect(toastLocator).toBeVisible({ timeout: 5000 });

        await expect(page.getByRole('heading', { name: 'Navio com Sal T370 25/04/2024' })).toBeVisible();

        // await page.getByLabel('Google apps').click();
        // await page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Contacts' }).click();
        // await page.getByRole('button', { name: 'Create contact' }).click();
        // await page.getByLabel('Create a contact').click();
        // await page.getByLabel('First name').fill('Navio com Sal Terminal 16');
        // await page.getByLabel('First name').press('Tab');
        // await page.getByLabel('Last name').fill('20/05/2024 - 700T');
        // await page.getByLabel('Save', { exact: true }).click();
        // await page.getByRole('heading', { name: 'Sampa Crew 16/10/' }).click();
        // await expect(page.getByRole('heading', { name: 'Navio com Sal Terminal 16 20/05/2024 - 700T' })).toBeVisible();
        
        // await page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Calendar' }).click();

        // await page.waitForTimeout(5000);

        // const createButton = page.locator('(//div[contains(text(), "Create")])[1]');
        // await createButton.waitFor({ state: 'visible', timeout: 10000});
        // await createButton.click();

        // await page.locator('//div[text()="Task"]').click();
        // await page.getByPlaceholder('Add title').fill('26/04/2024 - Aniversário Casamento');

        // //await page.getByRole('button', { name: 'Mar 3, 2024 10:00pm Does not' }).click();
        // await page.locator('(//span[@data-key="startDate"])[2]').click();


        

        // await page.getByRole('textbox', { name: 'Start date' }).click();
        // await page.getByRole('tabpanel', { name: 'Task' }).getByLabel('22').click();
        
        // await page.getByRole('button', { name: 'Save' }).press('Enter');
        // await page.getByLabel('Switch to Tasks').click();
        // await page.waitForTimeout(5000);

        // // Passo 1: Localize o iframe
        // const frameLocator = page.frameLocator('iframe[name="I0_1709520428839"]');

        // // Passo 2: Localize o elemento pelo texto e clique nele
        // const elementLocator = frameLocator.locator('xpath=//html-blob[contains(text(), "26/04/2024 - Aniversário Casamento")]').first();
        // await elementLocator.click();

        // // Passo 3: Verifique o texto após o clique
        // await expect(elementLocator).toContainText("26/04/2024 - Aniversário Casamento");


        // const frame = await page.frameLocator('iframe[name="I0_1709520428839"]');
        // const textLocator = frame.locator('xpath=//html-blob[contains(text(), "26/04/2024 - Aniversário Casamento")]');
        // await expect(textLocator).toContainText("26/04/2024 - Aniversário Casamento", { timeout: 5000 });


        //await expect(page.frameLocator('iframe[name="I0_1709520428839"]').getByPlaceholder('Title')).toHaveValue('26/04/2024 - Aniversário Casamento');


        //await page.frameLocator('iframe[name="I0_1709520428839"]').getByLabel('Active tasks').locator('html-blob').click();
        //await expect(page.frameLocator('iframe[name="I0_1709520428839"]').getByLabel('Active tasks').locator('html-blob')).toContainText('26/04/2024 - Aniversário Casamento');





        // const blobLocator = page.locator('(//html-blob[contains(text(), "26/04/2024 - Aniversário Casamento")])[1]');
        // await blobLocator.click();
        //  await expect(blobLocator).toContainText("26/04/2024 - Aniversário Casamento");
        //await page.waitForSelector('(//html-blob[contains(text(), "26/04/2024 - Aniversário Casamento")])[1]');



        // const blobLocator = page.locator('(//html-blob[contains(text(), "26/04/2024 - Aniversário Casamento")])[1]');
        // await expect(blobLocator).toBeVisible();

        
        //const blobLocator = page.locator('xpath=//div[contains(text(), "26/04/2024 - Aniversário Casamento")][1]');
        //await expect(blobLocator).toBeVisible();


        // const textLocator = page.frameLocator('iframe[name="I0_1709514282208"]').locator('xpath=//div[@title="26/04/2024 - Aniversário Casamento"]');
        // await expect(textLocator).toBeVisible({ timeout: 10000 });

        // await expect(page.frameLocator('iframe[name="I0_1709514282208"]')
        //         .locator('.html-blob:has-text("26/04/2024 - Aniversário Casamento")'))
        //         .toBeVisible({ timeout: 10000 });

        //await expect(page.frameLocator('iframe[name="I0_1709514282208"]').locator('xpath=//*[contains(text(), "26/04/2024 - Aniversário Casamento")]')).toBeVisible({ timeout: 10000 });
        
        //await expect(page.frameLocator('iframe[name="I0_1709514282208"]').getByLabel('26/04/2024 - Aniversário').locator('html-blob')).toContainText('26/04/2024 - Aniversário Casamento');
        // await expect(page.frameLocator('iframe[name="I0_1709512774126"]').getByLabel('Scheduled for Friday, March').locator('span')).toContainText('Fri, Mar 22, 10:00 PM');

        // await page.getByPlaceholder('Add title').fill('Aniversário Casamento ');
        // await page.getByPlaceholder('Add title').press('Home');
        // await page.getByPlaceholder('Add title').fill('26/04/2024 - Aniversário Casamento ');
        // await page.getByRole('button', { name: 'Mar 3, 2024 10:00pm Does not' }).click();
        // await expect(page.getByPlaceholder('Add title')).toBeVisible();
        // await expect(page.getByPlaceholder('Add title')).toBeVisible();
        // await expect(page.getByRole('combobox', { name: 'Start time' })).toBeVisible();
        // await page.getByRole('combobox', { name: 'Recurrence Does not repeat' }).click();
        // await page.getByRole('option', { name: 'Does not repeat' }).press('Tab');
        // await page.getByRole('textbox', { name: 'Start date' }).click();
        // await page.getByRole('tabpanel', { name: 'Task' }).getByLabel('12').click();
        // await page.locator('body').press('Tab');
        // await page.getByRole('combobox', { name: 'Start time' }).press('Tab');
        // await page.getByRole('checkbox', { name: 'All day' }).press('Tab');
        // await page.getByRole('combobox', { name: 'Recurrence Does not repeat' }).press('Tab');
        // await page.getByPlaceholder('Add description').press('Tab');
        // await page.getByRole('combobox', { name: 'Task list My Tasks' }).press('Tab');
        // await page.getByRole('button', { name: 'Save' }).press('Enter');
        // await page.getByLabel('Switch to Tasks').click();
        // await expect(page.frameLocator('iframe[name="I0_1709514282208"]').getByLabel('26/04/2024 - Aniversário').locator('html-blob')).toContainText('26/04/2024 - Aniversário Casamento');
        // // await expect(page.frameLocator('iframe[name="I0_1709508747320"]').getByLabel('Scheduled for Tuesday, March 12, 2024').locator('span')).toContainText('Tue, Mar 12,');

        // await page.getByRole('button', { name: 'Mar 3, 2024 10:00pm Does not' }).click();
        // await page.getByRole('textbox', { name: 'Start date' }).click();
        // await page.getByRole('tabpanel', { name: 'Task' }).getByLabel('22').click();
        // await page.getByRole('combobox', { name: 'Start time' }).click();
        // await page.getByRole('option', { name: '9:30pm' }).click();
        // await page.getByRole('combobox', { name: 'Start time' }).press('Tab');
        // await page.getByRole('checkbox', { name: 'All day' }).press('Tab');
        // await page.getByRole('combobox', { name: 'Recurrence Does not repeat' }).press('Tab');
        // await page.getByPlaceholder('Add description').press('Tab');
        // await page.getByRole('combobox', { name: 'Task list My Tasks' }).press('Tab');
        // await page.getByRole('button', { name: 'Save' }).press('Enter');
        // await page.getByLabel('Switch to Tasks').click();
        // await expect(page.frameLocator('iframe[name="I0_1709512774126"]').getByLabel('Scheduled for Friday, March').locator('span')).toContainText('Fri, Mar 22, 9:30 PM');
      
      

       
});


When('eu preencho todos os campos obrigatórios', async () => {
      
       

        
});

When('eu seleciono uma data que corresponda ao input desejado', async () => {
   
     
       
      
});

When('eu submeto o formulário de registro', async () => {
        // const cpf = generateCPF(); // Gera um CPF válido
        // const email = faker.internet.email(); // Gera um e-mail válido
      


       
});

Then('um novo registro deve ser criado com sucesso', async () => {
        // Aqui você coloca o código para verificar se um novo registro foi criado com sucesso
});

Then('a data do registro deve ser exibidamente conforme o input selecionado', async () => {
        // Aqui você coloca o código para verificar se a data do registro corresponde ao input selecionado
});




// import { BeforeAll, AfterAll, Given, When, Then } from '@cucumber/cucumber';
// import { chromium, Browser, BrowserContext, Page } from 'playwright';
// import expect from 'expect';

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

// BeforeAll(async () => {
//         browser = await chromium.launch();
//         context = await browser.newContext();
//         page = await context.newPage();
// });

// AfterAll(async () => {
//         await browser.close();
// });

// Given("I am on conduit app's Sign In page", async () => {
//         await page.goto('https://www.petz.com.br/checkout/login/indexLogado_Loja');
//         const title = await page.title();
//         expect(title).toBe('Conduit');
// });

// When('I enter email and password', async () => {
//         await page.fill('input[type="email"]', 'gledsonsouzaelgringo@gmail.com');
//         await page.press('input[type="email"]', 'Tab');
//         await page.fill('input[type="password"]', 'mHSrWBK8jF1248');
// });

// When('I click on Sign In button', async () => {
//         await page.click('form >> "Sign in"');
// });

// Then('The page should display {string}', async (expectedString: string) => {
//         const html = await page.innerHTML('.feed-toggle');
//         expect(html).toMatch(expectedString);
// });
