import { test, expect } from '@playwright/test';

function generateUniqueEmail() {   // Isso é muito Brabo
    const randomString = Math.random().toString(36).substring(2, 15);
    return `unique-${randomString}@test.com`;
}

test.describe('Cria um user para apos a captura do id ser excluido', () => {
    let userId;

    test.beforeAll(async ({ request }) => {
        const uniqueEmail = generateUniqueEmail();
        const response = await request.post('/usuarios', {
            data: {
                nome: 'Amelie_Poulain',
                email: uniqueEmail,
                password: 'Comptinedunautreete123',
                administrador: 'true'
            },
        });
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        userId = responseBody._id; // Armazena o id do usuário
    });

    test('Verifica se o id é valido e o apaga', async ({ request }) => {
        expect(userId).toBeTruthy();

        const response = await request.delete(`/usuarios/${userId}`);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody.message).toEqual('Registro excluído com sucesso');
    });
});
