import { adminList } from "../../../../src/data/mock/Admin";

describe("Admin Selecting", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });

  it("Select All Click Action", () => {
    cy.get('[data-cy="select-all"]').click();
    adminList.forEach((admin) => {
      cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First Five Entries", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    adminList.forEach((admin, index) => {
      if (index < 5)
        cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-green-100");
      else cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-white");
    });
  });
});
