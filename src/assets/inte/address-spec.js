import {
  HomePage,
  PropertySearch,
  CustomerDetail,
  DampInvestigation,
} from "../pageObjects/elements/PageElements";
const dampData = require("../pageObjects/damp-locator.json");
describe("test start page", () => {
  it("should be able to click start button ", async () => {
    new HomePage().startBtn().click();
    new PropertySearch().searchTextBox().type("leeds");
    new PropertySearch().searchBtn().click();
    new PropertySearch().serchResult().should("have.length", 8);
    new PropertySearch().propertyItem().click();
    new PropertySearch().propertySave().click();

    new CustomerDetail().contactName().type("test test");
    new CustomerDetail().contactNumber().type("11111");
    new CustomerDetail().inspectionDate().type("2020-01-01");

    new CustomerDetail().weatherConditions().select("592");
    new CustomerDetail().customerSave().click();
    new CustomerDetail().startBtn().click();

    let pages = parseInt(dampData.length / 10, 10) + 1;

    for (let i = 0; i < pages; i++) {
      let controllers = new DampInvestigation().controlContainer();
      controllers.each(($a) => {
        let controlIdAttribute = $a.find("label").attr("for");
        let controlId = controlIdAttribute.substring(
          13,
          controlIdAttribute.length
        );
        let elementData = dampData.find((x) => x.Id == +controlId);
        switch (elementData.ControlTypeId) {
          case 1:
            cy.get(`#${controlIdAttribute}`).type(`#${elementData.Name}`);
            break;
          case 2:
            cy.get(`#${controlIdAttribute}`).type(
              `${Math.floor(Math.random() * 10 + 1)}`
            );
            break;
          case 3:
            break;
          case 4:
            let pickIndex = Math.floor(
              Math.random() * elementData.Options.length
            );
            cy.get(`#${controlIdAttribute}`).select(
              `${elementData.Options[pickIndex].Id}`
            );
            break;
          case 5:
            cy.get(`#${controlIdAttribute}`).type(`#${elementData.Name}`);
            break;
          case 6:
            cy.get(`label[for="${controlIdAttribute}"]:nth-child(1)`).click();
            break;
        }
      });

      new DampInvestigation().next().contains("Next").click();
    }

    cy.get("form > div.actions.bottom > button").click();
  });
});
