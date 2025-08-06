describe('Cadastro de Usuário', () => {
  beforeEach(() =>{
    //Arrange
    cy.visit('/#/cadastro')
    cy.screenshot('apos-visitar-pagina')
  })
  it('Acessar a tela de cadastro de usuário', () => {    
    //Act
    cy.get('a').contains('Cadastro').click()     
    cy.screenshot('apos-clicar-em-cadastro')
    
    //Assert    
    cy.contains('.card', 'Email').should('be.visible')
  })

  it('Cadastrar um usuário', () => {    
    //Arrange
    cy.cadastraUsuarioRandom().then   
    cy.screenshot('apos-clicar-em-cadastro')
    
    //Assert
    cy.verificarMensagensNoToast('Usuário cadastrado com sucesso. Confirme seu email para ativar a conta.')    
    
  })
})