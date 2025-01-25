import { defineConfig } from "cypress"
const fs = require('fs')
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const pdf = require('pdf-parse')

const parsePdf = async (pdfFile) => {
  let dataBuffer = fs.readFileSync(pdfFile)
  return await pdf(dataBuffer)  // use async/await since pdf returns a promise 
}

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  viewportWidth: 1960,
  viewportHeight: 1080,
  video: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  videoCompression: false,
  screenshotOnRunFailure: true,
  pageLoadTimeout: 60000,
  redirectionLimit: 40,
  projectId: "",
  numTestsKeptInMemory: 1,
  experimentalStudio: true,
  experimentalMemoryManagement: true,
  watchForFileChanges: false,
  e2e: {
    experimentalStudio: true,
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--window-size=1960,1080')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--js-flags=--expose-gc')
          return launchOptions
        }
      })

      on('task', {
      })
      return config
    },
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}',
    baseUrl: "https://cocounsel.thomsonreuters.com/"
  },
  env: {
    
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    inlineAssets: true,
    saveAllAttempts: true,
    saveJson: true,
    timestamp: true,
    reportFilename: 'CoCounsel-Reports',
    showSkipped: true,
    overwrite: false
  },
  retries: {
    runMode: 1,
    openMode: 0
  },
  experimentalInteractiveRunEvents: false
})
