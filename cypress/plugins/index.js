// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

// eslint-disable-next-line no-unused-vars


// promisified fs module
const fs = require('fs-extra')
const path = require('path')


// selectiong config file
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}


module.exports = (on, config) => {

  // automatically opens Chrome DevTools after opening Cypress in gui mode
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
        launchOptions.args.push('--auto-open-devtools-for-tabs')
        return launchOptions
    }
  })

  // accept a configFile value or use ../config/env.json by default
  const file = config.env.configFile || 'env'
  return getConfigurationByFile(file)

}
