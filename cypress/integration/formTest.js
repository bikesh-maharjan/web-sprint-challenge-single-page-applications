// write tests here
describe("Inputs and submit button", () => {
  it("can navigate to the site", () => {
    // this is setup for the actual test
    cy.visit("http://localhost:3001/pizza");
    // assert that the site we landed at is the correct one
    cy.url().should("include", "localhost");
  });
  it("submit button is disabled", () => {
    // grab the element
    // check that it's actually disabled
    cy.get("#submitBtn").should("be.disabled");
  });

  it("can type a new name", () => {
    // grab element (in itself is a test)
    // type something with cy
    // assert that the value of the input is the thing we typed
    cy.get('input[name="name"]').type("Bikesh").should("have.value", "Bikesh");
  });
  it("can add new address checkbox", () => {
    cy.get('input[name="address"]')
      .type("1600 my address 95405")
      .should("have.value", "1600 my address 95405");
  });
  it("can add new insructions", () => {
    cy.get('input[name="specialInstructions"]')
      .type("I want more cheese")
      .should("have.value", "I want more cheese");
  });

  it("can click the checkbox", () => {
    cy.get('[id="checkbox"]').check();
  });
  it("can submit the form new", () => {
    cy.get("#submitBtn").click();
  });

  it("can go back to reorder page",()=>{
      cy.get("#reOrder").click()
  })
});
