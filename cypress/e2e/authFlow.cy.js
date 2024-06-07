describe('This file is to test the auth', () => {
    it('should check the auth flow', () => {
      cy.visit('localhost:3000/sign-up')
      cy.contain('create an account')
    })
})  
