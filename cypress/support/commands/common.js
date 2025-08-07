Cypress.Commands.add('cadastraUsuarioRandom', () => {
    cy.visit('/#/cadastro')
    const { v4: uuidv4 } = require('uuid')
    const uuid = uuidv4().replace(/-/g, '').substring(0, 4) // Apenas 4 caracteres
    //Act    
    cy.get('#email').focus().click().type(`teste${uuid}@empresa.com`) 
    cy.get('#username').focus().type('teste' + uuid)        
    cy.get('#senha').focus().type('teste123')
    cy.get('#nome').focus().type('Teste de Usuário')
    cy.get('#dataNascimento').focus().type('21/10/1990')
    cy.get('#nomePai').focus().type('Teste Pai')
    cy.get('#nomeMae').focus().type('Teste Mãe')
    cy.contains('.btn', 'Cadastrar').click() 
    cy.contains('.card-title', 'Login').should('be.visible')   

   return cy.wrap(uuid)// <-- Retorna o uuid para o teste
})

Cypress.Commands.add('verificarMensagensNoToast', mensagem => {
    cy.get('.toast').should('contain', mensagem)
})

Cypress.Commands.add('preencheUsuario', (usuario, senha) => {
    cy.get('#login').focus().click().type(usuario)
      cy.get('#senha').focus().type(senha)
})

Cypress.Commands.add('recuperarSenha', (email, senha, nascimento) => {
    cy.visit('/#/recuperar-senha')    
    cy.get('#email').focus().click().type(email)    
    cy.get('#dataNascimento').focus().type(nascimento)
    cy.get('#nomePai').focus().type('Teste Pai')
    cy.get('#nomeMae').focus().type('Teste Mãe')
    cy.get('#novaSenha').focus().type(senha)
    cy.get('.btn').click() 
})
