# Cenários de Teste - Projeto Formulário com Validação

Este documento reúne os principais cenários de teste elaborados para validar as regras de negócio e o comportamento da interface da aplicação de cadastro.

---

## Informações gerais

**Projeto:** Formulário com Validação  
**Tecnologias:** HTML, CSS e JavaScript  
**Objetivo dos testes:** Validar regras de preenchimento, mensagens de erro e envio com dados válidos

---

# Casos de Teste

## CT01 - Exibir formulário corretamente ao carregar a página

**Objetivo:** Validar carregamento inicial da aplicação.

### Passos:

1. Acessar a aplicação.

### Resultado esperado:

- O formulário deve ser exibido com os campos:
  - Nome
  - E-mail
  - Senha
  - Confirmar senha
- O botão `Cadastrar` deve estar visível.
- Nenhuma mensagem de erro deve ser exibida inicialmente.

---

## CT02 - Validar campo Nome obrigatório

**Objetivo:** Garantir que o campo Nome seja obrigatório.

### Passos:

1. Deixar o campo Nome vazio.
2. Preencher os demais campos corretamente.
3. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `O nome é obrigatório.`
- O campo Nome deve ser destacado com erro.
- O formulário não deve ser enviado.

---

## CT03 - Validar campo E-mail obrigatório

**Objetivo:** Garantir que o campo E-mail seja obrigatório.

### Passos:

1. Deixar o campo E-mail vazio.
2. Preencher os demais campos corretamente.
3. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `O e-mail é obrigatório.`
- O campo E-mail deve ser destacado com erro.
- O formulário não deve ser enviado.

---

## CT04 - Validar formato inválido de e-mail

**Objetivo:** Garantir que o sistema aceite apenas e-mails válidos.

### Passos:

1. Preencher o campo Nome corretamente.
2. Informar um e-mail inválido, como `jaqueline@`.
3. Preencher os campos de senha corretamente.
4. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `Digite um e-mail válido.`
- O campo E-mail deve ser destacado com erro.
- O formulário não deve ser enviado.

---

## CT05 - Validar campo Senha obrigatório

**Objetivo:** Garantir que o campo Senha seja obrigatório.

### Passos:

1. Deixar o campo Senha vazio.
2. Preencher os demais campos corretamente.
3. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `A senha é obrigatória.`
- O campo Senha deve ser destacado com erro.
- O formulário não deve ser enviado.

---

## CT06 - Validar tamanho mínimo da senha

**Objetivo:** Garantir que a senha tenha no mínimo 6 caracteres.

### Passos:

1. Preencher Nome e E-mail corretamente.
2. Informar uma senha com menos de 6 caracteres.
3. Repetir a mesma senha no campo de confirmação.
4. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `A senha deve ter pelo menos 6 caracteres.`
- O campo Senha deve ser destacado com erro.
- O formulário não deve ser enviado.

---

## CT07 - Validar campo Confirmar senha obrigatório

**Objetivo:** Garantir que a confirmação de senha seja obrigatória.

### Passos:

1. Preencher Nome, E-mail e Senha corretamente.
2. Deixar o campo Confirmar senha vazio.
3. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `Confirme sua senha.`
- O campo Confirmar senha deve ser destacado com erro.
- O formulário não deve ser enviado.

---

## CT08 - Validar divergência entre senha e confirmação

**Objetivo:** Garantir que os campos Senha e Confirmar senha tenham o mesmo valor.

### Passos:

1. Preencher Nome e E-mail corretamente.
2. Informar uma senha válida.
3. Informar uma confirmação diferente.
4. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `As senhas não conferem.`
- O campo Confirmar senha deve ser destacado com erro.
- O formulário não deve ser enviado.

---

## CT09 - Validar envio com todos os dados corretos

**Objetivo:** Garantir que o formulário seja aceito quando todos os campos estiverem válidos.

### Passos:

1. Preencher Nome corretamente.
2. Preencher E-mail válido.
3. Informar senha com 6 ou mais caracteres.
4. Repetir a mesma senha no campo de confirmação.
5. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `Cadastro realizado com sucesso!`
- Os campos devem ser limpos após o envio.
- Nenhuma mensagem de erro deve permanecer visível.

---

## CT10 - Validar destaque visual de erro nos campos inválidos

**Objetivo:** Garantir feedback visual para campos com erro.

### Passos:

1. Tentar enviar o formulário com um ou mais campos inválidos.

### Resultado esperado:

- Os campos inválidos devem ser destacados visualmente com borda vermelha.

---

## CT11 - Validar destaque visual de sucesso nos campos válidos

**Objetivo:** Garantir feedback visual para campos preenchidos corretamente.

### Passos:

1. Preencher corretamente cada campo.
2. Enviar o formulário ou validar conforme a lógica atual.

### Resultado esperado:

- Os campos válidos devem ser destacados visualmente com borda verde.

---

## CT12 - Validar limpeza da mensagem de erro após correção

**Objetivo:** Garantir que a mensagem de erro desapareça quando o usuário corrigir o dado e reenviar.

### Passos:

1. Informar um e-mail inválido.
2. Clicar em `Cadastrar`.
3. Corrigir o e-mail para um formato válido.
4. Clicar novamente em `Cadastrar`.

### Resultado esperado:

- A mensagem de erro anterior deve desaparecer.
- O campo deve ser tratado como válido.

---

## CT13 - Validar submissão sem recarregar a página

**Objetivo:** Garantir que o formulário seja tratado por JavaScript, sem refresh da página.

### Passos:

1. Preencher os campos corretamente.
2. Clicar em `Cadastrar`.

### Resultado esperado:

- A página não deve ser recarregada.
- O comportamento deve ocorrer dinamicamente na própria tela.

---

## CT14 - Validar campo Nome preenchido apenas com espaços

**Objetivo:** Garantir que espaços em branco não sejam aceitos como valor válido.

### Passos:

1. Informar apenas espaços no campo Nome.
2. Preencher os demais campos corretamente.
3. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `O nome é obrigatório.`
- O formulário não deve ser enviado.

---

## CT15 - Validar campo E-mail preenchido apenas com espaços

**Objetivo:** Garantir que espaços em branco não sejam aceitos como e-mail válido.

### Passos:

1. Informar apenas espaços no campo E-mail.
2. Preencher os demais campos corretamente.
3. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `O e-mail é obrigatório.`
- O formulário não deve ser enviado.

---

## CT16 - Validar campo Senha preenchido apenas com espaços

**Objetivo:** Garantir que espaços em branco não sejam aceitos como senha válida.

### Passos:

1. Informar apenas espaços no campo Senha.
2. Preencher os demais campos.
3. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir a mensagem: `A senha é obrigatória.`
- O formulário não deve ser enviado.

---

## CT17 - Validar múltiplos erros simultaneamente

**Objetivo:** Garantir que o sistema apresente mais de um erro ao mesmo tempo quando necessário.

### Passos:

1. Deixar Nome vazio.
2. Informar e-mail inválido.
3. Informar senha curta.
4. Deixar confirmação vazia.
5. Clicar em `Cadastrar`.

### Resultado esperado:

- O sistema deve exibir todas as mensagens de erro correspondentes.
- Todos os campos inválidos devem ser destacados.

---

## CT18 - Validar remoção das bordas de sucesso após reset do formulário

**Objetivo:** Garantir que, após cadastro bem-sucedido, os campos não permaneçam com indicação visual de sucesso.

### Passos:

1. Preencher todos os campos corretamente.
2. Clicar em `Cadastrar`.

### Resultado esperado:

- O formulário deve ser limpo.
- As bordas verdes devem ser removidas dos campos.
- Apenas a mensagem de sucesso deve permanecer visível.

---

# Possíveis melhorias futuras identificadas nos testes

- Implementar validação em tempo real enquanto o usuário digita.
- Adicionar botão de mostrar/ocultar confirmação de senha.
- Incluir validação de força da senha.
- Salvar dados temporariamente no navegador.
- Criar testes automatizados para as validações.

---

# Conclusão

Os cenários acima validam as principais regras de negócio e interações da aplicação, cobrindo:

- campos obrigatórios
- validação de e-mail
- validação de senha
- confirmação de senha
- comportamento visual
- envio com sucesso
- tratamento de erros
