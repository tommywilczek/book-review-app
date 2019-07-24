describe('adding a book', () => {
  it('adds a book title', () => {
    const bookTitle = 'Captain Underpants';

    cy.visit('http://localhost:1234');

    cy.get('[data-test="newBookTitleField')
      .should('not.exist');

    cy.get('[data-test="addBookBtn"]')
      .click();

    cy.get('[data-test="newBookTitleField"]')
      .type(bookTitle);

    cy.get('[data-test="saveBookBtn"]')
      .click();

    cy.get('[data-test="newBookTitleField')
      .should('not.exist');

    cy.contains(bookTitle);
  });
});
