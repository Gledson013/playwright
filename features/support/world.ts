// support/world.ts

import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

class CustomWorld {
    browser: Browser;
    page: Page;

    constructor() {
        // Podemos iniciar o navegador aqui, mas isso também pode ser feito antes de cada cenário
    }

    async openBrowser() {
        this.browser = await chromium.launch({ headless: false });
        this.page = await this.browser.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
