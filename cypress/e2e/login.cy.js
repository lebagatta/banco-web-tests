describe('Login', () => {
  it('login com dados válidos devem permitir entrada no sistema', () => {
    cy.visit('http://localhost:4000')
    cy.get('#login-section').should('be.visible')
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('123456')
    cy.get('#login-section > .btn').click()
  
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})

