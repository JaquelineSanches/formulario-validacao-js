describe('Formulário de validação', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('deve exibir erro ao enviar formulário vazio', () => {
    cy.contains('button', 'Cadastrar').click();

    cy.contains('O nome é obrigatório.');
    cy.contains('O e-mail é obrigatório.');
    cy.contains('A senha é obrigatória.');
    cy.contains('Confirme sua senha.');
  });
});
