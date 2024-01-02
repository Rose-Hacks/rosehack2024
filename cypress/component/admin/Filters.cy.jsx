import Filters from "@/components/dynamic/admin/Filters";
import { useState } from "react";

describe("Filters Component", () => {
  it("Default", () => {
    const Parent = () => {
      const [filters, setFilters] = useState({
        reject: true,
        accept: true,
        pending: true,
      });
      const [objects, setObjects] = useState([
        { name: "pending" },
        { name: "reject" },
        { name: "accept" },
      ]);
      const input = "";

      const onClick = (filter) => {
        const filterValues = { ...filters, [filter]: !filters[filter] };
        setFilters(filterValues);
      };

      return (
        <Filters
          filters={filters}
          setFilters={setFilters}
          objects={objects}
          setObjects={setObjects}
          input={input}
          onClick={onClick}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "border-white/50", "text-white/50");
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "border-white/50", "text-white/50");
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "border-white/50", "text-white/50");
  });

  it("Click Filters", () => {
    const setObjects = cy.stub();

    const Parent = ({ setObjects }) => {
      const [filters, setFilters] = useState({
        reject: true,
        accept: true,
        pending: true,
      });
      const objects = [];
      const input = "";

      const onClick = (filter) => {
        const filterValues = { ...filters, [filter]: !filters[filter] };
        setFilters(filterValues);
      };

      return (
        <Filters
          filters={filters}
          setFilters={setFilters}
          objects={objects}
          setObjects={setObjects}
          input={input}
          onClick={onClick}
        />
      );
    };

    cy.mount(<Parent setObjects={setObjects} />);

    cy.get('[data-cy="pending-filter"]')
      .click()
      .then(() => expect(setObjects).to.be.called);
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="reject-filter"]')
      .click()
      .then(() => expect(setObjects).to.be.called);
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="accept-filter"]')
      .click()
      .then(() => expect(setObjects).to.be.called);
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
  });
});
