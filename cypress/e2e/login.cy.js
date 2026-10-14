describe('Login', () => {
  it('login com dados válidos devem permitir entrada no sistema', () => {
    cy.visit('http://localhost:4000')
    cy.get('#login-section').should('be.visible')
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('123456')
    cy.contains('button', 'Entrar').click()
  
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  it('login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.visit('http://localhost:4000')
    cy.get('#login-section').should('be.visible')
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('654321')
    cy.contains('button', 'Entrar').click()
  
    cy.get('.toast').should('have.text' , 'Erro no login. Tente novamente.')
  }) 
})    
