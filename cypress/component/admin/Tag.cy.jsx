import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "@/data/dynamic/Tags";

describe("Tag", () => {
  it("Accept", () => {
    const color = COLORS["accept"];
    const onClick = cy.stub();
    const text = "Accept";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Accept-tag"]').contains("accept");
    cy.get('[data-cy="Accept-tag"]').should(
      "have.class",
      "bg-rosehack-teal/10",
      "text-rosehack-teal",
      "hover:bg-rosehack-teal hover:text-black duration-200"
    );
    cy.get('[data-cy="Accept-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Pending", () => {
    const color = COLORS["pending"];
    const onClick = cy.stub();
    const text = "Pending";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Pending-tag"]').contains("pending");
    cy.get('[data-cy="Pending-tag"]').should(
      "have.class",
      "bg-hackathon-tags-yellow-text/10",
      "text-hackathon-tags-yellow-text",
      "hover:bg-hackathon-tags-yellow-text hover:text-black duration-200"
    );
    cy.get('[data-cy="Pending-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Reject", () => {
    const color = COLORS["reject"];
    const onClick = cy.stub();
    const text = "Reject";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Reject-tag"]').contains("reject");
    cy.get('[data-cy="Reject-tag"]').should(
      "have.class",
      "bg-rosehack-pink-200/10",
      "text-rosehack-pink-200",
      "hover:bg-rosehack-pink-200 hover:text-black duration-200"
    );
    cy.get('[data-cy="Reject-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Custom Classes", () => {
    const color = COLORS["accept"];
    const onClick = cy.stub();
    const text = "Accept";

    cy.mount(
      <Tag
        color={color}
        text={text}
        onClick={onClick}
        classes="border-2 border-black"
      />
    );
    cy.get('[data-cy="Accept-tag"]').contains("accept");
    cy.get('[data-cy="Accept-tag"]').should(
      "have.class",
      "bg-rosehack-teal/10",
      "text-rosehack-teal",
      "border-2",
      "border-black",
      "hover:bg-rosehack-teal hover:text-black duration-200"
    );
    cy.get('[data-cy="Accept-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("No onClick", () => {
    const color = COLORS["accept"];
    const text = "Accept";

    cy.mount(<Tag color={color} text={text} />);
    cy.get('[data-cy="Accept-tag"]').contains("accept");
    cy.get('[data-cy="Accept-tag"]').should(
      "have.class",
      "bg-rosehack-teal/10",
      "text-rosehack-teal"
    );
    cy.get('[data-cy="Accept-tag"]').should(
      "not.have.class",
      "hover:bg-rosehack-teal hover:text-black duration-200"
    );
  });
});
