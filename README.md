# 📋 Formulário de Cadastro com Validação

Projeto desenvolvido com foco na validação de dados de entrada, regras de negócio e aplicação de conceitos de Qualidade de Software (QA), incluindo testes manuais, automação de testes e BDD.

---

## 🚀 Demonstração

🔗 https://jaquelinesanches.github.io/formulario-validacao-js/

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git e GitHub
- Cypress (Testes automatizados E2E)

---

## ⚙️ Funcionalidades

- 📌 Validação de campos obrigatórios
- 📧 Validação de formato de e-mail
- 🔐 Validação de senha (mínimo de 6 caracteres)
- 🔁 Validação de confirmação de senha
- ❌ Exibição de mensagens de erro por campo
- ✅ Feedback visual (campos válidos e inválidos)
- 🔄 Limpeza do formulário após envio
- 🎯 Prevenção de envio com dados inválidos

---

## 🧪 Testes realizados

Este projeto contempla diferentes níveis de testes:

### ✔️ Testes Manuais

Documentados no arquivo:
➡️ `testes.md`

Cobrem:

- Campos obrigatórios
- Validação de e-mail inválido
- Senha mínima
- Divergência entre senhas
- Testes negativos e positivos
- Feedback visual dos campos

---

### 🤖 Testes Automatizados (Cypress)

Localizados em:
➡️ `cypress/e2e/formulario.cy.js`

Cobrem:

- Envio de formulário vazio
- Validação de mensagens de erro
- Fluxo completo de cadastro com sucesso

---

### 🧠 BDD (Behavior Driven Development)

Cenários descritos em Gherkin:
➡️ `cypress/e2e/formulario.feature`

---

## ▶️ Como executar os testes automatizados

```bash
1. Instale as dependências:

npm install

2. Execute o Cypress:

- npx cypress open

3. Selecione o teste:

- formulario.cy.js
```
