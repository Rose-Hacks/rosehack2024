Cypress.Commands.add("fetch", ({ role, portal, page }) => {
  cy.intercept("/api/auth/session", { fixture: `${role}_role.json` }).as(
    "session"
  );
  cy.intercept("GET", `/api/dashboard/${page}`, {
    fixture: `${page}.json`,
  }).as("GET");

  cy.intercept(
    "GET",
    `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    {
      fixture: `${page}.json`,
    }
  ).as("GET");
  cy.visit("/");
  cy.wait("@session");

  cy.visit(`/${portal}/${page}`);
  cy.wait("@GET");
});

Cypress.Commands.add("action", ({ tag, page }) => {
  cy.intercept("PUT", `/api/dashboard/${page}`, {
    message: "OK",
    status: 200,
  }).as("PUT");
  cy.get('[data-cy="toolbar"]').find(`[data-cy="${tag}-tag"]`).click();
  cy.wait("@PUT");
});

Cypress.Commands.add("delete", ({ page }) => {
  cy.intercept("DELETE", `/api/dashboard/${page}?remove=*`, {
    message: "OK",
    status: 200,
  }).as("DELETE");
  cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
  cy.get('[data-cy="confirm-button"]').click();
  cy.wait("@DELETE");
});
