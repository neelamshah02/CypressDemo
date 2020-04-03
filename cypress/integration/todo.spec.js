describe ('Second Test', () => {
    it ('Visit the app', () => {
      cy.visit ('/todo');
      cy.contains("Cypress test on todo list")
    });
    it ('enter task', () => {
      cy.visit ('/todo');
      cy.get(".new").type("my first task to run cypress")
      cy.get("#add").click();
      cy.get(".item").contains("my first task to run cypress")
    });
    xit ('do not enter task should fail', () => {
      cy.visit ('/todo');
      cy.get("#add").click();
      cy.get(".item").contains("my first task to run cypress")
    });
  });
