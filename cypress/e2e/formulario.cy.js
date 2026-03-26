describe('Validação de formulário', () => {
  it('Deve exibir erro ao enviar formulário vazio', () => {
    cy.visit('https://jaquelinesanches.github.io/formulario-validacao-js/');

    cy.contains('button', 'Cadastrar').click();

    cy.contains('O nome é obrigatório.').should('be.visible');
    cy.contains('O e-mail é obrigatório.').should('be.visible');
    cy.contains('A senha é obrigatória.').should('be.visible');
  });

  it('Deve cadastrar com sucesso ao preencher os campos corretamente', () => {
    cy.visit('https://jaquelinesanches.github.io/formulario-validacao-js/');

    cy.get('input[placeholder="Digite seu nome"]').type('Jaqueline');
    cy.get('input[placeholder="Digite seu e-mail"]').type('jaque@email.com');
    cy.get('input[placeholder="Digite sua senha"]').type('123456');
    cy.get('input[placeholder="Confirme sua senha"]').type('123456');

    cy.contains('button', 'Cadastrar').click();

    cy.on('window:alert', texto => {
      expect(texto).to.contains('Cadastro realizado com sucesso');
    });
  });
});
