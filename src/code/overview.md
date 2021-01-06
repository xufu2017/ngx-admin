# Cypress Development

Cypress is a front end testing tool built for the modern web.

## Installation

package installation

```json
"dependencies": {
    "cross-env": "^7.0.2",
    "cypress": "^4.10.0",
    "cypress-image-snapshot": "^3.1.1",
    "lodash": "^4.17.17"
  },
```
if using cucumber/gherkin-syntaxed specs, add the following plugin
to package.json

```json
"cypress-cucumber-preprocessor": "^2.5.3",
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
```

## Folder Structure

the default cypress folder structure looks like this, the files and folder are give below

| Name | Description |
  | --- | --- |
 | cypress | major folder contains all test
  | node_modules | includes all the libraries and files
  | cypress.json | configuration file for the cypress
  | package.json | contains the name and its version of all the dependencies 

<br/>

## Files and folders in cypress folder

cypress in the major folder which contains all the tests, required files, supports, plugins and so on.

> Fixtures: 
This fixtures is the folder which contains all the files which are required while running the tests

> Integration:  integration folder includes all the tests files

> plugins: This plugins has index.js file inside it

> support: This folder contains index.js and commands.js
