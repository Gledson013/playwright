
import { BeforeAll, AfterAll, Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Browser, chromium, Page } from 'playwright';

let browser: Browser | null = null;
let page: Page;

BeforeAll(async () => {
        browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();
});

AfterAll(async () => {
        if (browser) {
                await browser.close();
                browser = null;
        }
});

Given('que estou na página de criação de registro', async () => {
        await page.goto('https://www.leroymerlin.com.br/cadastre-se?redirect=https%3A%2F%2Fwww.leroymerlin.com.br%2Fminha-conta%2Fdados-pessoais');
});


When('eu preencho todos os campos obrigatórios', async () => {
        // Aqui você coloca o código para preencher todos os campos obrigatórios
});

When('eu seleciono uma data que corresponda ao input desejado', async () => {
        // Aqui você coloca o código para selecionar a data desejada
});

When('eu submeto o formulário de registro', async () => {
        // Aqui você coloca o código para submeter o formulário de registro
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
