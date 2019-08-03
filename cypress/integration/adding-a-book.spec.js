describe('adding a book', () => {
  it('adds a book title', () => {
    const bookTitle = 'Captain Underpants';

    cy.visit('http://localhost:1234');

    cy.get('[data-test="newBookTitleField')
      .should('not.exist');

    // Open Modal
    cy.get('[data-test="addBookBtn"]')
      .click();

    // Should be focused on the input
    cy.focused().parent().parent().should('have.attr', 'data-test', 'newBookTitleField')

    // Cancel Modal should work
    cy.get('[data-test="cancelBtn"]')
      .click();

    cy.get('[data-test="newBookTitleField')
      .should('not.exist');

    // Modal should save
    cy.get('[data-test="addBookBtn"]')
      .click();

    cy.get('[data-test="newBookTitleField"]').children().children('input')
      .type(bookTitle);

    cy.get('[data-test="saveBookBtn"]')
      .click();

    cy.get('[data-test="newBookTitleField')
      .should('not.exist');

    cy.contains(bookTitle);
  });
});
