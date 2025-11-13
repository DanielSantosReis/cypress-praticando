/// <reference types = "cypress"/>

import commum_page from '../support/pages/commum_page'

describe('Cadastro de Usuario', () => {

    beforeEach ('Acessar cadastro de usuário',() => {
        commumPage.acessarCadastroUsuario()

    })

    it.only('Campo Nome vazio', () => {
        
    })

    it('Campo E-mail vazio', () => {
    
    })

    it('Campo Senha vazio', () => {
    
    })

    it('Campo Nome inválido', () => {
    
    })

    it('Campo E-mail inválido', () => {
    
    })

    it('Login com sucesso', () => {
    
    })


})