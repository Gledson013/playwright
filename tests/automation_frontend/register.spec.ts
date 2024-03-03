// import { test, expect } from '@playwright/test';

// function generateUniqueEmail() {
//     const randomString = Math.random().toString(36).substring(2, 15);
//     return `unique+${randomString}@example.com`;
// }

// function generateRandomCPF() {
//     const randomNumbers = (length) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
//     let cpf = randomNumbers(9);

//     function calculateDigit(numbers, factor) {
//         let total = 0;
//         for (const number of numbers) {
//             if (factor > 1) total += number * factor--;
//         }
//         const rest = total % 11;
//         return (rest < 2) ? 0 : (11 - rest);
//     }

//     const digit1 = calculateDigit(cpf.split('').map(Number), 10);
//     const digit2 = calculateDigit((cpf + digit1).split('').map(Number), 11);
//     cpf += `${digit1}${digit2}`;

//     return cpf;
// }

// function generateRandomPhoneNumber() {
//     const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11; // Gera um DDD válido
//     const number = Math.floor(Math.random() * (99999999 - 90000000)) + 90000000; // Gera um número válido
//     return `(${ddd}) 9${number}`;
// }

// function generateRandomPassword() {
//     // Aqui você pode criar uma lógica para gerar uma senha aleatória segura.
//     // Este é apenas um exemplo simples usando números aleatórios e letras.
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let password = '';
//     for (let i = 0; i < 10; i++) {
//         password += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return password;
// }

// test('Cadastro na Leroy Merlin', async ({ page }) => {
//     // Navegar para a página de cadastro
//     await page.goto('https://www.leroymerlin.com.br/cadastre-se?redirect=https%3A%2F%2Fwww.leroymerlin.com.br%2Fminha-conta%2Fdados-pessoais');

//     // Gerar dados dinâmicos para o novo usuário
//     const cpf = generateRandomCPF();
//     const nomeCompleto = 'Teste Automatizado';
//     const dataNascimento = '01011990'; // Data de nascimento no formato DDMMYYYY
//     const lojaFavorita = 'Loja Exemplo'; // Adapte conforme necessário
//     const email = generateUniqueEmail();
//     const celular = generateRandomPhoneNumber();
//     const senha = generateRandomPassword();

//     // Preencher o formulário de cadastro
//     await page.fill('input[placeholder="CPF"]', cpf);
//     await page.fill('input[placeholder="Nome completo"]', nomeCompleto);
//     await page.fill('input[placeholder="Data de nascimento"]', dataNascimento);
//     // O campo "Loja favorita" pode ser um dropdown. Você precisará interagir com ele adequadamente.
//     await page.fill('input[placeholder="E-mail"]', email);
//     await page.fill('input[placeholder="Celular"]', celular);
//     await page.fill('input[placeholder="Senha"]', senha);

//     // Concordar com os termos e criar conta
//     await page.check('input[type="checkbox"]'); // Ajuste o seletor conforme necessário
//     await page.click('text=Concordar e criar conta');

//     // Validar criação do registro com sucesso
//     // Esta validação depende da mensagem ou ação que acontece no site após o cadastro.
//     // Adapte a validação para o que é esperado no site da Leroy Merlin.

//     // Validar que a data selecionada corresponde com o input desejado
//     // Você precisará verificar se a data de nascimento aparece corretamente no perfil do usuário
//     // ou em algum outro lugar onde seja exibida após o cadastro. Isso pode exigir fazer login com o usuário recém-criado.
//     // ... o restante do seu código permanece igual
// });
