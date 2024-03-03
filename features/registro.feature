# language: pt

Funcionalidade: Cadastro na Leroy Merlin
  Como um novo cliente
  Quero me registrar no site da Leroy Merlin
  Para que eu possa fazer compras online

  Cenário: Registro bem-sucedido
    Dado que estou na página de cadastro da Leroy Merlin
    Quando preencho o formulário com dados válidos
    E concordo com os termos e clico em criar conta
    Então devo ser redirecionado para a página de confirmação de cadastro
