/// <reference types="Cypress"/>

Cypress.config().waitForAnimations = true;

describe('Google test for web', () => {
    it('should open google.com', () => {
        cy.visit('www.wsb.pl/wroclaw');
        })
    
    it('should checks training tabs', () => {
        cy.get('.links > .expandable > :nth-child(1)').contains('Studia')
    })
    it('open search and find', () => {
        cy.get('.search-icon > a').click({force: true})
        cy.get('#header-search > .grid-wrapper > .search-input > .search').type('Programista Angular{enter}')
    })
    it('Check for phrase', () => {
        cy.get('.study-directions').should('have.contain', 'Programista Angular')
    })
})