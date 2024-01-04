/// <reference types="cypress" />

describe('Testes para a tarefa', () => {
  let countOfElements = 0
  
  beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app')
      cy.wait(3000)
      cy.get(".contato").then($elements => {
        countOfElements = $elements.length;
        cy.log('TEste: '+countOfElements)
      });
  })
  it('Deve renderizar o cabeçalho', () => {
      cy.get('header h1').contains('Agenda de contatos')
  })

  it('Deve realizar a inclusão de um contato', () => {
    cy.get('input[type="text"]').type('gabriel')
    cy.get('input[type="email"]').type('gabriel@teste.com')
    cy.get('input[type="tel"]').type('1111111111')
    cy.get('.adicionar').click()
    cy.get('.contato').should('have.length', (countOfElements+1))
    cy.screenshot('tela-inscricao')
  })
  
  it('Deve realizar a edição de um contato', () => {
    cy.get('.edit').last().click()
    cy.get('input[type="text"]').clear().type('Lucas')
    cy.get('.alterar').click()
    cy.screenshot('tela-edicao')
  })

  it('Deve realizar a remoção de um contato', () => {
    cy.get('.delete').last().click()
    cy.get('.contato').should('have.length', (countOfElements - 1))
    cy.screenshot('tela-delecao')
  })

})