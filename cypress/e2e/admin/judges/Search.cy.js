import judges from "../../../fixtures/Judges.json";

describe("Judge Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/judges");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Judges Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(judges[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${judges[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("John Cena");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    judges.forEach((judge) => {
      if (judge.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${judge.uid}"]`).should("exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
    });
  });
});
