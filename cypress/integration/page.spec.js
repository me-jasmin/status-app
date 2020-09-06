/// <reference types="cypress" />

context('Page tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Test titles, dates and descriptions', () => {
        cy.get('.accordion__item__title__text, .timeline__time, .timeline__text').each(element => {
            cy.get(element).should('not.be.empty');
        });
    });

    it('Test accordians', () => {
        cy.get('.accordion__item:not(.accordion__item--disabled)').each(element => {
            cy.get(element)
                .click()
                .should('have.class', 'accordion__item--opened')
                .find('.accordion__item__content')
                .should('not.be.empty');
        });
    });
});
