describe("City Detail Page", () => {
  it("Can visit a City Detail Page", () => {
    cy.visit("/cities/Toronto");
    cy.contains("Hiking");
    cy.contains("Airbnb");
    cy.contains("Hotels");
    cy.contains("Events");
    cy.contains("Rental");
    cy.contains("Guide");
  });

  it("City Detail page has all the links", () => {
    cy.visit("/cities/Toronto");
    cy.contains("Hiking");
    cy.contains("Airbnb");
    cy.contains("Hotels");
    cy.contains("Events");
    cy.contains("Rental");
    cy.contains("Guide");
  });

  it("contains top attractions", () => {
    cy.visit("/cities/Toronto");
    cy.contains("Top Attractions in Toronto");
    cy.contains("CN Tower");
  });

  it("contains Weather Forecast", () => {
    cy.visit("/cities/Toronto");
    cy.contains("7 Day Weather Forecast in Toronto");
  });

  it.only("Can click on Create Trip Button", () => {
    cy.visit("/");
    cy.get("input").type("Montreal", { force: true });
    cy.get("form").submit();
    // cy.get(".btn-sm").click();
    cy.contains("Create Trip").click();
    cy.contains(
      "Choose attractions you want to visit by clicking the heart icon."
    );
  });
});
