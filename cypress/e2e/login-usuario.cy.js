const { it } = require("mocha")

describe('Login de Usuario', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('https://example.com/login')

    })

})