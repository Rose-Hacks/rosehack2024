import response from "../../../fixtures/judges.json";

const judges = response.items;

describe("Judges Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "judges",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
    cy.get('[data-cy="rejected-filter"]').click();
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === 1)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="rejected-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === -1)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === 0)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="rejected-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === 1 || judge.status === -1)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });
});
