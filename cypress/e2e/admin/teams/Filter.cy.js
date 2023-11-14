import response from "../../../fixtures/teams.json";

const teams = response.items;

describe("Teams Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "teams",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="reject-filter"]').click({ force: true });
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="accept-filter"]').click({ force: true });
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="pending-filter"]').click({ force: true });
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
  });

  it("Click Disqualify", () => {
    cy.get('[data-cy="reject-filter"]').click({ force: true });
    teams.forEach((team) => {
      if (team.status === -1)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Qualify", () => {
    cy.get('[data-cy="accept-filter"]').click({ force: true });
    teams.forEach((team) => {
      if (team.status === 1)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click({ force: true });
    teams.forEach((team) => {
      if (team.status === 0)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click({ force: true });
    cy.get('[data-cy="reject-filter"]').click({ force: true });
    teams.forEach((team) => {
      if (team.status === 1 || team.status === -1)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });
});
