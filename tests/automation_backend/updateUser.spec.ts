import { test, expect } from '@playwright/test';

function generateUniqueEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `unique-${randomString}@test.com`;
}

test.describe('Criando um usuário para assim atualiza-lo', () => {
    let userId;  // Fora do veforeAll para que possa ser acessado em outros testes

    test.beforeAll(async ({ request }) => {
        const uniqueEmail = generateUniqueEmail();
        const response = await request.post('/usuarios', {
            data: {
                nome: 'Taylor Swift',
                email: uniqueEmail,
                password: 'YouNeedToCalmDown1627',
                administrador: 'true'
            },
        });
        expect(response.ok()).toBeTruthy();  // Verfica se a resposta foi 200 201
        const responseBody = await response.json();  // Comvertida em json
        userId = responseBody._id;
    });

    test('Dados para atualizar, informa o userId da alteração que foi gerado no beforeAll, atualiza e confere alteração.', async ({ request }) => {
        expect(userId).toBeTruthy();

        // Dados para atualização do usuário
        const updatedData = {
            nome: 'Austin Swift',
            email: generateUniqueEmail(), // assumindo que o e-mail também deve ser único após atualização
            password: '138934Lover',
            administrador: 'false'
        };

        // Atualiza o usuário
        const response = await request.put(`/usuarios/${userId}`, {
            data: updatedData,
        });
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody.message).toEqual('Registro alterado com sucesso');

        // Verifica se os dados do usuário foram atualizados corretamente
        const getUserResponse = await request.get(`/usuarios/${userId}`);
        expect(getUserResponse.ok()).toBeTruthy();
        const getUserResponseBody = await getUserResponse.json();
        expect(getUserResponseBody.nome).toEqual(updatedData.nome);
        expect(getUserResponseBody.email).toEqual(updatedData.email);
        // Verifique outras propriedades conforme necessário
    });

    test.afterAll(async ({ request }) => {
        // Excluir o usuário após o teste para limpar
        await request.delete(`/usuarios/${userId}`);
    });
});
