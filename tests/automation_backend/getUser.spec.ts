import { test, expect } from '@playwright/test';

function generateUniqueEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `unique-${randomString}@test.com`;
}

test.describe('Cria um Usuário', () => {
    let userId;

    test.beforeAll(async ({ request }) => {
        const uniqueEmail = generateUniqueEmail();
        const response = await request.post('/usuarios', {
            data: {
                nome: 'Phil Collins',
                email: uniqueEmail,
                password: 'IWishItWouldRainDown1608',
                administrador: 'true'
            },
        });
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        userId = responseBody._id; // Armazena o id para usar na busca e exclusão
    });

    test('Verifica se o id é valido e o apaga', async ({ request }) => {
        expect(userId).toBeTruthy();

        // Busca o usuário
        const response = await request.get(`/usuarios/${userId}`);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('nome');
        // Adicione mais verificações conforme necessário
    });

    test.afterAll(async ({ request }) => {        // Exclui o usuário após a execução do teste
        const response = await request.delete(`/usuarios/${userId}`);
        expect(response.ok()).toBeTruthy();
    });
});
