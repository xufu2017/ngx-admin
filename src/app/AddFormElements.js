/// <reference types="cypress" />

const pagelocator=require("./pagelocator.json")

export default class AddFormElements{

    completeFormButtoncy=()=>cy.get(pagelocator.createForm.completeFormButton)

    createFormButton=()=>cy.get(pagelocator.createForm.createFormButton)

    formNameField=()=>cy.get(pagelocator.createForm.formNameField)

    selectFormType=()=>cy.get(pagelocator.createForm.selectFormType)

    formType=()=>cy.get(pagelocator.createForm.formType)

    startCreatingButton=()=>cy.get(pagelocator.createForm.startCreatingButton)

    getStartedButton=()=>cy.get(pagelocator.createForm.getStartedButton)

    addButton=()=>cy.get(pagelocator.createForm.addButton)

    stepName=()=>cy.get(pagelocator.createForm.stepName)

    questionName=()=>cy.get(pagelocator.createForm.questionName)

    placeholder=()=>cy.get(pagelocator.createForm.placeholder)

    headerEdit=()=>cy.get(pagelocator.createForm.headerEdit)

    headerDelete=()=>cy.get(pagelocator.createForm.headerDelete)

    dropArea=()=>cy.get(pagelocator.createForm.dropArea)

    dropAreaItem=()=>cy.get(pagelocator.createForm.dropAreaItem)

    elementEdit=()=>cy.get(pagelocator.createForm.elementEdit)

    elementHandler=()=>cy.get(pagelocator.createForm.elementHandler)

    toolBoxText=()=>cy.get(pagelocator.toolBox.text)

    toolBoxSelectFromList=()=>cy.get(pagelocator.toolBox.selectFromList)

    toolBoxSingleSelection=()=>cy.get(pagelocator.createForm.singleSelection)

    toolBoxMultipleSelection=()=>cy.get(pagelocator.createForm.multipleSelection)

    toolBoxNumber=()=>cy.get(pagelocator.createForm.number)

    toolBoxDate=()=>cy.get(pagelocator.createForm.date)

}