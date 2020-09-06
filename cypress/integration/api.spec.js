/// <reference types="cypress" />

context('API tests', () => {
    it('Test button events', () => {
        cy.request('api').as('data');

        cy.get('@data').should(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status');
            expect(response.body).to.have.property('current_events');
        });
    });
});
