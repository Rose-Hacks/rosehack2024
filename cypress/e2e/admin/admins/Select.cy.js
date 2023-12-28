import response from "../../../fixtures/admins.json";

const admins = response.items;
const five = admins.slice(0, 5);

describe("Admin Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "admins",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="checkbox"]').click();
    admins.forEach((admin) => {
      cy.get(`[data-cy="${admin.uid}"]`).should(
        "have.class",
        "bg-rosehack-teal/30"
      );
    });
  });

  it("Select First 5 Entries", () => {
    five.map((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    admins.forEach((admin, index) => {
      if (index < 5)
        cy.get(`[data-cy="${admin.uid}"]`).should(
          "have.class",
          "bg-rosehack-teal/30"
        );
      else
        cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-white/10");
    });
  });
});
