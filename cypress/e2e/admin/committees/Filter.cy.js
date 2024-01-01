import response from "../../../fixtures/committees.json";

const committees = response.items;

describe("Committee Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "committees",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
    cy.get('[data-cy="reject-filter"]').click();
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    committees.forEach((committee) => {
      if (committee.status === 0)
        cy.get(`[data-cy="${committee.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${committee.uid}"]`).should("exist");
    });
  });

  it("Click Rejected", () => {
    cy.get('[data-cy="reject-filter"]').click();
    committees.forEach((committee) => {
      if (committee.status === -1)
        cy.get(`[data-cy="${committee.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${committee.uid}"]`).should("exist");
    });
  });

  it("Click Accepted", () => {
    cy.get('[data-cy="accept-filter"]').click();
    committees.forEach((committee) => {
      if (committee.status === 1)
        cy.get(`[data-cy="${committee.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${committee.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="pending-filter"]').click();
    committees.forEach((committee) => {
      if (committee.status === 1 || committee.status === 0)
        cy.get(`[data-cy="${committee.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${committee.uid}"]`).should("exist");
    });
  });
});
