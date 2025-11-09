/// <reference types = "cypress"/>

import commumPage from "../support/pages/commum_page"
import cadastroUsuarioPage from "../support/pages/cadastro_usuario_page"

describe('Cadastro de Usuario', () => {

    beforeEach ('Acessar cadastro de usuário',() => {
        commumPage.acessarCadastroUsuario()

    })

    it.only('Campo Nome vazio', () => {
        cadastroUsuarioPage.clicarCadastrar()
        cadastroUsuarioPage.validarMensagemErro('O campo nome deve ser preenchido') 
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