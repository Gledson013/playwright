Feature: Fazer um registro com sucesso

  O objetivo é validar a criação de um registro com sucesso, garantindo que a data
  selecionada corresponda ao input desejado e utilizando comandos reutilizáveis.

  Scenario: Criação bem-sucedida de um novo registro
    Given que estou na página de criação de registro
    When eu preencho todos os campos obrigatórios
    And eu seleciono uma data que corresponda ao input desejado
    And eu submeto o formulário de registro
    Then um novo registro deve ser criado com sucesso
    And a data do registro deve ser exibidamente conforme o input selecionado


  Scenario: Exibir Mensagem de Erro para Campo Obrigatório Não Preenchido
    Given que estou na página de registros
    When eu submeto o formulário com o campo Ano vazio
    Then eu devo ver uma mensagem de erro Por favor, Preencha a data completa

