const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'test-results',
  reportPath: './',
  reportName: 'Playwright - Report',
  pageTitle: 'Playwright Typescript',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '126.0.6478.127',
    },
    device: 'Server AWS',
    platform: {
      name: 'Windows',
      version: '11',
    },
  },
  customData: {
    title: 'Test Info',
    data: [
      { label: 'Regression', value: 'Dev' },
      { label: 'Date', value: '08/08/2024' },
    ],
  },
});
