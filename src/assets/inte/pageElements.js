/// <reference types="cypress" />

const locators=require("../../element-locator.json")

export class SideBar{

    homeIcon=()=>cy.get(locators.sidebar.homeIcon);
    createNewReport=()=>cy.get(locators.sidebar.createNewReport);
    logout=()=>cy.get(locators.sidebar.logout);
}
export class MenuBar{
    toggleNavigation=()=>cy.get(locators.menubar.toggleNavigation);
    createNewReport=()=>cy.get(locators.menubar.cameraIcon);
}

export class HomePage{
    startBtn=()=>cy.get(locators.homepage.startBtn);
}

export class PropertyPage{
    propertyTab=()=>cy.get(locators.navReportDetailsTabs.propertyTab);
    customerTab=()=>cy.get(ocators.navReportDetailsTabs.customerTab);
    reviewTab=()=>cy.get(locators.navReportDetailsTabs.reviewTab);
}

export class PropertySearch{
    searchTextBox=()=>cy.get(locators.propertypage.propertySearch.searchTextBox);
    serchResult=()=>cy.get(locators.propertypage.propertySearch.serchResult);
    propertyItem=()=>cy.get(locators.propertypage.propertySearch.propertyItem);
    searchBtn=()=>cy.get(locators.propertypage.propertySearch.searchBtn);
    propertySave=()=>cy.get(locators.propertypage.propertySearch.propertySave);
}

export class CustomerDetail{
    contactName=()=>cy.get(locators.propertypage.customerDetail.contactName);
    contactNumber=()=>cy.get(locators.propertypage.customerDetail.contactNumber);
    inspectionDate=()=>cy.get(locators.propertypage.customerDetail.inspectionDate);
    weatherConditions=()=>cy.get(locators.propertypage.customerDetail.weatherConditions);
    customerSave=()=>cy.get(locators.propertypage.customerDetail.customerSave);
    editBtn=()=>cy.get(locators.propertypage.customerDetail.editBtn);
    startBtn=()=>cy.get(locators.propertypage.customerDetail.startBtn);
}

export class DampInvestigation{
    controlContainer=()=>cy.get(locators.propertypage.dampInvestigation.controlContainer);
    previous=()=>cy.get(locators.propertypage.dampInvestigation.previous);
    next=()=>cy.get(locators.propertypage.dampInvestigation.next);
}
