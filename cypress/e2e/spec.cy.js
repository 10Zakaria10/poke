describe("E2E test", () => {
  it("should display list of pokemons", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy*="pokemon-card"]').should("exist");
  });
  it("should display modal of Pokemon when click on a Pokemon", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="pokemon-card-2"]').click();
    cy.get(".MuiModal-root").should("exist");
  });
  it("should display modal of Pokemon with detailed image when click on a Pokemon", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="pokemon-card-2"]').click();
    cy.get('img[alt="DetailedImage"]').should("exist");
  });
});
