## Introduction
Playwright automation project with Cucumber and TypeScript
- Author: Murilo Mattos

## Install
Run command line on terminal to install all dependencies:
- npm install
- npx playwright install

## Script to run tests and generate the report
You can find the scripts on package.json file

- "To run Test": "npm run test" or "npm run dev" 
- "To run in dev": "npm run dev" 
- "To run in prod": "npm run prod" 
- "To run in some ENV with specific TAG: "npm run {env}Tag -- "-t @{tag}" --> Ex.: npm run devTag -- "-t @login01" 

## Important folders of the project
src/features folder
- Contains the feature files strucutured in Gherkin

src/steps folder
- Contains all steps files in your own specific folder

src/pages folder
- Pages folder with page objects

src/faker folder
- Folder with faker data generation

On root folder will have the "index.html" file, this is the report that will be generate after run the tests