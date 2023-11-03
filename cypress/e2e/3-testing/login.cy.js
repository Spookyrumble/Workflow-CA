describe("Login Modal Test", () => {
  it("should allow a user to log in", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type("cypressTesterHMA@noroff.no");
    cy.get("#loginPassword").type("socialmedia");
    cy.get("button[type=submit]").contains("Login").click();
  });
});
