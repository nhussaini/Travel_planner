/* eslint-disable no-undef */
describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("Shows Welcome Text", () => {
    cy.contains("Plan your trips with ease.");
  });

  it("Shows Trending Destination", () => {
    cy.visit("/");
    cy.contains("Trending Destinations");
  });

  it("Can Submit the form", () => {
    cy.visit("/");
    cy.get("form").submit();
  });

  it("Submitting the form without input shows Error", () => {
    cy.visit("/");
    cy.get("form").submit().contains("Please type a city name");
  });

  it("shows Error if cant find a City", () => {
    cy.visit("/");
    cy.get("input").type("ABCDEFGH", { force: true });
    cy.get("form").submit();
    cy.contains(
      `Sorry, we couldn't find "ABCDEFGH" worldwide, try a different city.`
    );
  });

  it("Can Submit form with input and visit the page", () => {
    cy.visit("/");
    cy.get("input").type("toronto", { force: true });
    cy.get("form").submit();
    cy.contains("Explore Toronto");
  });
});
