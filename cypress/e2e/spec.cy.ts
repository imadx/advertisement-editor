describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://advertisement-editor.onrender.com/");

    // Title updates
    cy.get('input[name="title"]').clear().type("Updated Advertisement");
    cy.get('[data-test-id="advertisement-preview"]').contains(
      "Updated Advertisement",
    );

    // Link updates
    cy.get('input[name="callToActionText"]')
      .clear()
      .type("Click here to learn more");
    cy.get('input[name="callToActionLink"]')
      .clear()
      .type("https://www.cypress.io");
    cy.get('[data-test-id="advertisement-preview"]').contains(
      "Click here to learn more",
    );
    cy.get('[data-test-id="advertisement-preview"] a').should(
      "have.attr",
      "href",
      "https://www.cypress.io",
    );

    // Content updates
    cy.get('textarea[name="content"]')
      .clear()
      .type(
        "Updated Content lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      );
    cy.get('[data-test-id="advertisement-preview"]').contains(
      "Updated Content lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    );
  });
});
