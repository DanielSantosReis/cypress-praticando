/// <reference types = "cypress"/>

import { expect } from "chai"

export default {
    clicarCadastrar(){
        cy.get('#btnRegister')
            .click()
    },

   // validarMensagemErro(mensagem){
        // cy.get('.errorLabel')
        //     .then((element) => {
        //       expect(element).to.be.visible
        //     expect(element.text()).eq('O campo nome deve ser preenchido')
        // })}

    validarMensagemErro(mensagem){
        cy.get('.errorLabel')
            .should('be.visible')
                .should('have.text',  mensagem)
    }
}