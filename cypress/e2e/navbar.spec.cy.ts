describe("Navbar E-Commerce", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("displays desktop nav links", () => {
    cy.get("nav").contains("Shop all").should("be.visible");
    cy.get("nav").contains("Latest arrivals").should("be.visible");
  });

  it("opens mobile menu when hamburger clicked", () => {
    cy.viewport(375, 667);
    cy.get("button[aria-label='Open menu']").click();
    cy.get("#mobile-menu").should("be.visible");
  });

  it("closes mobile menu when overlay clicked", () => {
    cy.viewport(375, 667);
    cy.get("button[aria-label='Open menu']").click();
    cy.get("#mobile-menu > div.flex-1").click();
    cy.get("#mobile-menu").should("not.exist");
  });

  it("displays cart count", () => {
    cy.get("button[aria-label='Shopping cart']").contains("0").should("be.visible");
  });
});