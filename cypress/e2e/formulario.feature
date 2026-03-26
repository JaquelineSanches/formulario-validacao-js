Funcionalidade: Validação de formulário

Cenário: Exibir erro ao enviar formulário vazio
Dado que o usuário está na página do formulário
Quando ele clica no botão cadastrar sem preencher os campos
Então deve aparecer mensagem de erro

Cenário: Cadastro com sucesso
Dado que o usuário está na página do formulário
Quando ele preenche todos os campos corretamente
E clica no botão cadastrar
Então o cadastro deve ser realizado com sucesso