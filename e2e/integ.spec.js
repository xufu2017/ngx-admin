Property--
describe('load propertydetails', () => {

    it('check the property details', () => {
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > button').should('be.visible').should('be.enabled')
      cy.get('#navReportDetailsTabs > ul > li:nth-child(2) > button').should('be.visible').should('be.enabled')
      cy.get('#navReportDetailsTabs > ul > li:nth-child(3) > button').should('be.visible').should('be.enabled')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > article > button > div.has-info > p:nth-child(1)').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(2) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(3) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > section > button').click()
    });
  });
  
  --review
  describe('review property and customer details', () => {

    it('review property and customer details', () => {
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > button').should('be.visible').should('be.enabled')
      cy.get('#navReportDetailsTabs > ul > li:nth-child(2) > button').should('be.visible').should('be.enabled')
      cy.get('#navReportDetailsTabs > ul > li:nth-child(3) > button').should('be.visible').should('be.enabled')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(1) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(2) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(3) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(4) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(5) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(6) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div:nth-child(7) > p').should('have.value')
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > section > button').click()
      cy.get('#navReportDetailsTabsContent > ul > li.content.active > section > a').click()
    });
  });
  
  
  --address 
  
describe('test address search', () => {

  beforeEach(()=>{
    cy.get('#app > main > div > span > a').click()
    cy.get('#app > header > div > h1').should('have.text', "Report Details")
    cy.get('#navReportDetailsTabs > ul > li:nth-child(1) > button').should('have.text', " Property ")
    cy.get('#navReportDetailsTabs > ul > li:nth-child(1) > button').should('be.visible').should('be.enabled')
  })
  it('type the address', () => {
    cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div > input[type=text]').should('be.visible').type('Leeds')
    cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > button').click()
    cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > button').should('be.visible').should('be.enabled')
    cy.get('#navReportDetailsTabs > ul > li:nth-child(2) > button').should('be.visible').should('be.disabled')
    cy.get('#navReportDetailsTabs > ul > li:nth-child(3) > button').should('be.visible').should('be.disabled')
    cy.get('#navReportDetailsTabsContent > ul > li.content.active > ul > li:nth-child(4) > button > div.has-info > p:nth-child(1)').click()
  });

  it('type the address', () => {
    cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > div > input[type=text]').should('be.visible').type('1 victoria street')
    cy.get('#navReportDetailsTabsContent > ul > li.content.active > div > button').click()
    cy.get('#navReportDetailsTabsContent > ul > li.content.active > ul > li:nth-child(1) > button > div.has-info > p:nth-child(1)').click()
  });
});
  
  
  --customer
  
  describe('Enter Customer Details', () => {

  it('enter customer details', () => {
    cy.get('#contactName').should('not.have.value').type('Test')
    cy.get('#contactNumber').should('not.have.value').type('07445454544')
    cy.get('#inspectionDate').type('30/12/2020')
    cy.get('select').select('#weatherConditions').should('have.value', '592')
  });
});

--damp review 

describe('review damp features', () => {

    it('review the damp features', () => {
        cy.get('#app > header > div > h1').should('have.text', "Review")
        cy.get('#app > main > form > div.content.damp-form-review > div:nth-child(1) > h2').should('have.text', "Please review before submission.")
        cy.get('#app > main > form > div.actions.bottom > a').should('be.visible').should('be.enabled').should('have.text', "Back")
        cy.get('#app > main > form > div.actions.bottom > button').should('be.visible').should('be.enabled').should('have.text', "Save")
        cy.get('#app > main > form > div.actions.bottom > button').click()
        cy.get('#app > main > form > div.actions.bottom > button').should('be.visible').should('be.disabled').should('have.text', "Save")
    });
  });
  
  --damp-spec
  describe('enter the damp features', () => {
    it('enter the damp features', () => {
      cy.get('#app > header > div > h1').should('have.text', "Damp Investigation")
      cy.get('select').select('#dampAttribute198').should('have.value', '446')
      cy.get('select').select('#dampAttribute199').should('have.value', '448')
      cy.get('select').select('#dampAttribute200').should('have.value', '450')
      cy.get('select').select('#dampAttribute201').should('have.value', '460')
      cy.get('select').select('#dampAttribute202').should('have.value', '463')
      cy.get('select').select('#dampAttribute203').should('have.value', '468')
      cy.get('select').select('#dampAttribute204').should('have.value', '471')
      cy.get('select').select('#dampAttribute205').should('have.value', '156')
      cy.get('select').select('#dampAttribute206').should('have.value', '478')
      cy.get('select').select('#dampAttribute207').should('have.value', '481')
      cy.get('#app > main > form > div.actions > button').should('be.visible').should('be.enabled').should('have.text', "Next")
      cy.get('#app > main > form > div.actions > button').click()
      cy.get('select').select('#dampAttribute208').should('have.value', '486')
      cy.get('select').select('#dampAttribute209').should('have.value', '491')
      cy.get('select').select('#dampAttribute210').should('have.value', '498')
      cy.get('select').select('#dampAttribute211').should('have.value', '501')
      cy.get('select').select('#dampAttribute212').should('have.value', '507')
      cy.get('select').select('#dampAttribute213').should('have.value', '510')
      cy.get('select').select('#dampAttribute214').should('have.value', '514')
      cy.get('select').select('#dampAttribute215').should('have.value', '518')
      cy.get('select').select('#dampAttribute216').should('have.value', '523')
      cy.get('select').select('#dampAttribute217').should('have.value', '527')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()      
      cy.get('select').select('#dampAttribute218').should('have.value', '532')
      cy.get('select').select('#dampAttribute219').should('have.value', '535')
      cy.get('select').select('#dampAttribute220').should('have.value', '540')
      cy.get('select').select('#dampAttribute221').should('have.value', '544')
      cy.get('select').select('#dampAttribute222').should('have.value', '554')
      cy.get('select').select('#dampAttribute223').should('have.value', '556')
      cy.get('select').select('#dampAttribute224').should('have.value', '558')
      cy.get('select').select('#dampAttribute225').should('have.value', '155')
      cy.get('#dampAttribute226').type('Test')
      cy.get('select').select('#dampAttribute227').should('have.value', '560')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('select').select('#dampAttribute228').should('have.value', '157')
      cy.get('select').select('#dampAttribute229').should('have.value', '563')
      cy.get('select').select('#dampAttribute230').should('have.value', '155')
      cy.get('select').select('#dampAttribute231').should('have.value', '155')
      cy.get('select').select('#dampAttribute232').should('have.value', '566')
      cy.get('select').select('#dampAttribute233').should('have.value', '156')
      cy.get('select').select('#dampAttribute234').should('have.value', '570')
      cy.get('select').select('#dampAttribute235').should('have.value', '158')
      cy.get('select').select('#dampAttribute236').should('have.value', '573')
      cy.get('select').select('#dampAttribute237').should('have.value', '157')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('select').select('#dampAttribute238').should('have.value', '575')
      cy.get('select').select('#dampAttribute239').should('have.value', '155')
      cy.get('select').select('#dampAttribute240').should('have.value', '578')
      cy.get('select').select('#dampAttribute241').should('have.value', '583')
      cy.get('select').select('#dampAttribute242').should('have.value', '586')
      cy.get('select').select('#dampAttribute243').should('have.value', '157')
      cy.get('select').select('#dampAttribute244').should('have.value', '158')
      cy.get('#dampAttribute245').type('Test')
      cy.get('#dampAttribute246').type('Test')
      cy.get('#dampAttribute247').type('Test')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('#app > header > div > h1').should('have.text', "Room Reports")
      cy.get('#dampAttribute248').type('Test')
      cy.get('#dampAttribute249').type('Test')
      cy.get('#dampAttribute250').type('Test')
      cy.get('#dampAttribute251').type('Test')
      cy.get('#dampAttribute252').type('Test')
      cy.get('#dampAttribute253').type('Test')
      cy.get('#dampAttribute254').type('Test')
      cy.get('#dampAttribute255').type('Test')
      cy.get('#dampAttribute256').type('Test')
      cy.get('#dampAttribute257').type('Test')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('#dampAttribute258').type('Test')
      cy.get('#dampAttribute259').type('Test')
      cy.get('#dampAttribute260').type('Test')
      cy.get('#dampAttribute261').type('Test')
      cy.get('#dampAttribute262').type('Test')
      cy.get('#dampAttribute263').type('Test')
      cy.get('#dampAttribute264').type('Test')
      cy.get('#dampAttribute265').type('Test')
      cy.get('#dampAttribute266').type('Test')
      cy.get('#dampAttribute267').type('Test')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('#dampAttribute268').type('Test')
      cy.get('#dampAttribute269').type('Test')
      cy.get('#dampAttribute270').type('Test')
      cy.get('#dampAttribute271').type('Test')
      cy.get('#dampAttribute272').type('Test')
      cy.get('#dampAttribute273').type('Test')
      cy.get('#dampAttribute274').type('Test')
      cy.get('#dampAttribute275').type('Test')
      cy.get('#dampAttribute276').type('Test')
      cy.get('#dampAttribute277').type('Test')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('#dampAttribute278').type('Test')
      cy.get('#dampAttribute279').type('Test')
      cy.get('#dampAttribute280').type('Test')
      cy.get('#dampAttribute281').type('Test')
      cy.get('#dampAttribute282').type('Test')
      cy.get('#dampAttribute283').type('Test')
      cy.get('#dampAttribute284').type('Test')
      cy.get('#dampAttribute285').type('Test')
      cy.get('#dampAttribute286').type('Test')
      cy.get('#dampAttribute287').type('Test')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      //cy.get('#app > main > form > div.actions > button:nth-child(1)').click()
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('#dampAttribute288').type('Test')
      cy.get('#dampAttribute289').type('Test')
      cy.get('select').select('#dampAttribute290').should('have.value', '590')
      cy.get('#dampAttribute291').type('Test')
      cy.get('select').select('#dampAttribute292').should('have.value', '588')
      cy.get('#dampAttribute293').type('Test')
      cy.get('select').select('#dampAttribute294').should('have.value', '590')
      cy.get('#dampAttribute295').type('Test')
      cy.get('select').select('#dampAttribute296').should('have.value', '589')
      cy.get('#dampAttribute297').type('Test')
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
      cy.get('#app > main > form > div.content > div:nth-child(2) > div > label').click()
      //cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2']).should('be.checked')
      //#app > main > form > div.content > div:nth-child(1) > div > label > span:nth-child(1) > svg
      //#app > main > form > div.content > div:nth-child(2) > div > label > span:nth-child(1) > svg
      //#app > main > form > div.content > div:nth-child(3) > div > label > span:nth-child(1) > svg
      cy.get('#dampAttribute301').type('Test')
      //#app > main > form > div.content > div:nth-child(5) > div > label > span:nth-child(1) > svg
      //#app > main > form > div.content > div:nth-child(6) > div > label > span:nth-child(1) > svg
      //#app > main > form > div.content > div:nth-child(7) > div > label > span:nth-child(1) > svg
      cy.get('#app > main > form > div.actions > button:nth-child(1)').should('be.visible').should('be.enabled').should('have.text', "Previous")
      cy.get('#app > main > form > div.actions > button:nth-child(2)').should('be.visible').should('be.enabled').should('have.text', "Next")
       cy.get('#app > main > form > div.actions > button:nth-child(2)').click()
    });
});

--start

describe('test address search', () => {
    it('click get started button', () => {
      cy.get('#app > main > div > span > a').click()
      cy.get('#app > header > div > h1').should('have.text', "Report Details")
      cy.get('#navReportDetailsTabs > ul > li:nth-child(1) > button').should('have.text', " Property ")
      cy.get('#navReportDetailsTabs > ul > li:nth-child(1) > button').should('be.visible').should('be.enabled')
    });
});
    
    
  
