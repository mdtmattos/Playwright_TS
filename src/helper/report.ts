const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'test-results',
  reportPath: './',
  reportName: 'Playwright - Report',
  pageTitle: 'Playwright Typescript',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chrome'
    },
    platform: {
      name: 'Windows',
      version: '11',
    },
  },
  customData: {
    title: 'Test Info',
    data: [
      { label: 'Regression' }
    ],
  },
});
