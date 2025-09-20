// cypress/e2e/matchingengine_spec.cy.js

describe('Matching Engine - Verify Repertoire Management Module', () => {
  before(() => {
    cy.visit('https://www.matchingengine.com/');
  });

  it('Navigates to Repertoire Management Module page', () => {
    cy.get('#burger').click();
    // Expand Modules menu in header
    cy.contains('Modules').click();

    // Click Repertoire Management Module
    cy.contains('Repertoire Management Module').click();

    // Ensure page has loaded
    cy.url().should('include', 'repertoire-management-module');

    cy.wait(3000) // wait 3 seconds

    // Scroll to Additional Features section
    cy.contains('Additional Features').scrollIntoView();

       // Click Products Supported
    cy.contains('Products Supported').click();

    cy.get('[data-aria-posinset="5"] > span')
  .should('have.text', 'Cue Sheet / AV Work')
  cy.get('[data-aria-posinset="6"] > span')
  .should('have.text', 'Recording')
  cy.get('[data-aria-posinset="7"] > span')
  .should('have.text', 'Bundle')
  cy.get('[data-aria-posinset="8"] > span')
  .should('contain.text', 'Advertisement')

  });

});
