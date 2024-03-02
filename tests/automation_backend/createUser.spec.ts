import { test, expect } from '@playwright/test';

// Utilitário para gerar um e-mail único para cada teste
function generateUniqueEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `unique-${randomString}@test.com`;
}

test.describe('Criando um usuário novo', () => {
    test('Cria e em seguida exclui', async ({ request }) => {
        // Dados do novo usuário
        const userData = {
            nome: 'Gledsinho QualityMap',
            email: generateUniqueEmail(),
            password: 'CharlieBrown1608',
            administrador: 'true'
        };

        // Criação do usuário
        const createUserResponse = await request.post('/usuarios', {
            data: userData
        });

        // Verifica se a criação foi bem-sucedida
        expect(createUserResponse.ok()).toBeTruthy();
        const createUserResponseBody = await createUserResponse.json();
        expect(createUserResponseBody).toHaveProperty('_id');
        expect(createUserResponseBody).toHaveProperty('message', 'Cadastro realizado com sucesso');

        // Armazena o ID do usuário para uso posterior
        const userId = createUserResponseBody._id;

        // Exclusão do usuário ao final do teste
        const deleteUserResponse = await request.delete(`/usuarios/${userId}`);
        expect(deleteUserResponse.ok()).toBeTruthy();
        const deleteUserResponseBody = await deleteUserResponse.json();
        expect(deleteUserResponseBody).toHaveProperty('message', 'Registro excluído com sucesso');
    });
});
