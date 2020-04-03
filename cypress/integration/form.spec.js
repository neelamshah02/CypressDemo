describe("Go to Todo page", () => {
  it("Visit the todopage", () => {
    cy.visit("/");
    cy.get("input[name=firstName]").type("neelam");
    cy.get("input[name=lastName]").type("shah");
    cy.get("input[name=email]").type("neelam@cg.com");
    cy.get("input[name=mobile]").type("99269755");
    cy.get("input[name=add1]").type("steinstemveien,26");
    cy.get("input[name=add3]").type("sandnes");
    cy.get("input[name=post]").type("4032");
    cy.get('[type="checkbox"]').check();
    cy.get("input[type=submit]").click();
  });
});
describe("Form validation check", () => {
  it("validate first name", () => {
    cy.visit("/");
    cy.get("input[type=submit]").click();
    cy.get("p")
      .first()
      .contains("jhjhbhj is required");
  });

  it("validate last name className selector", () => {
    cy.visit("/");
    cy.get("input[type=submit]").click();
    cy.get(".lastname").contains("LastName is required");
  });

  it("validate email with id selector", () => {
    cy.visit("/");
    cy.get("input[type=submit]").click();
    cy.get("#emaild").contains("Email is required");
  });

  it("address 1 validate", () => {
    cy.visit("/");
    cy.get("input[type=submit]").click();
    cy.window().scrollTo("bottom");
    cy.get(".add1").contains("Address Line 1 is required");
  });
  it("check if address line 2 is optional", () => {
    cy.visit("/");
    cy.get("input[type=submit]").click();
    cy.contains(".add2").should("not.be.visible");
    //cy.screenshot()
  });
});
