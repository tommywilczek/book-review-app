describe('Smoke test', () => {
  it('displays hello world', () => {

    cy.visit('http://localhost:1234')
      .contains('Hello, world!');

  });
});
