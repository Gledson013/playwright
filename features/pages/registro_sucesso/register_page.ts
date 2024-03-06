// register_page.ts
import { Page } from 'playwright';
import { expect } from '@playwright/test';


export class RegisterPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToRegistrationPage() {

        await this.page.goto('https://www.google.com.br/');   
        // PODE SER UTILIZADO PARA LOGIN

        // await page.getByLabel('Fazer login').click();
        // await page.getByLabel('E-mail ou telefone').fill('qm.frontend@gmail.com');
        // await page.getByLabel('E-mail ou telefone').press('Enter');
        // await page.getByLabel('Digite sua senha').fill('QM2024meta*');
        // await page.getByLabel('Digite sua senha').press('Enter');
        await this.page.getByLabel('Google apps').click();
    }

    async fillForm() {
        await this.page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Contacts' }).click();
        await this.page.getByRole('button', { name: 'Create contact' }).click();
        await this.page.getByLabel('Create a contact').click();
        await this.page.getByLabel('First name').fill('Navio de Cafe 800T');
        //await this.page.getByLabel('First name').press('Tab');
    }

    async selectDate() {
        await this.page.getByLabel('Last name').fill('25/05/2024 - 7 Dias');
        // Se necessário, adicione mais ações relacionadas à seleção da data
    }

    async submitForm() {
        await this.page.getByLabel('Save', { exact: true }).click();
    }

    async verifySuccessRegistration() {
        const secondTextLocator = this.page.locator('text="Added to contacts"').nth(1);
        await expect(secondTextLocator).toBeVisible({ timeout: 5000 });
    }

    async verifyDate() {
        await this.page.waitForTimeout(5000);
        await expect(this.page.getByRole('heading', { name: 'Navio de Cafe 800T 25/05/2024' })).toBeVisible();
    }



}
