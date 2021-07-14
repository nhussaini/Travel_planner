/* eslint-disable no-undef */
describe("login route", () => {
  it("Can click Login Button", () => {
    cy.visit("/");
    cy.contains("Login").click();
  });

  it("Can go to login route", () => {
    cy.visit("/login");
    cy.get(".login-title");
  });

  it("Submitting Without Input Causes Error", () => {
    cy.visit("/login");
    cy.get("form").submit();
    cy.contains("Fill up the Form please!");
  });

  it("Can successfully login", () => {
    cy.visit("/login");
    cy.get("#input-email").type("mario@nintendo.com");
    cy.get("#input-password").type("test");
    cy.get("form").submit();
    cy.contains("Your Profile");
  });
});
