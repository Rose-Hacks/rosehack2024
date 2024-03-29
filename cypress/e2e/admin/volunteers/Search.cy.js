import response from "../../../fixtures/volunteers.json";

const volunteers = response.items;

describe("Volunteer Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "volunteers",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="search-input"]').type("Meow");
    cy.contains("No Volunteers Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type(volunteers[0].name);
    cy.get(`[data-cy="${volunteers[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type("John Cena");
    volunteers.forEach((volunteer) => {
      if (volunteer.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
    });
  });
});
