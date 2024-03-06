
import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { LOCATORS } from './locators';


export class RegisterPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToRegistrationPage() {

        await this.page.goto('https://www.google.com.br/');   
        
        // Realizar LOGIN a primeiva vez e após comentar pois o login fica salvo
        await this.page.getByLabel('Fazer login').click();
        await this.page.getByLabel('E-mail ou telefone').fill('qm.frontend@gmail.com');
        await this.page.getByLabel('E-mail ou telefone').press('Enter');
        await this.page.getByLabel('Digite sua senha').fill('QM2024meta*');
        await this.page.getByLabel('Digite sua senha').press('Enter');
        // Comentar até aqui

        await this.page.click(LOCATORS.googleAppsButton);  // Uso do xpath na camada locators.ts
    }

    async fillForm() {
        await this.page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Contacts' }).click();
        await this.page.getByRole('button', { name: 'Create contact' }).click();
        await this.page.getByLabel('Create a contact').click();
        await this.page.getByLabel('First name').fill('Navio de Cafe 800T');
    }

    async selectDate() {
        await this.page.getByLabel('Last name').fill('25/05/2024 - 7 Dias');
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
