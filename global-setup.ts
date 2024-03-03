import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    // Use qualquer configuração global que você precisa antes dos testes começarem
    require('ts-node').register({
        project: 'tsconfig.json' // Certifique-se de que o caminho para o tsconfig.json esteja correto
    });
}

export default globalSetup;
