/// <reference types="cypress" />
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

const {
  addMatchImageSnapshotPlugin
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  require('cypress-react-unit-test/plugins/react-scripts')(on, config);
  addMatchImageSnapshotPlugin(on, config);
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-dev-shm-usage');
      launchOptions.args.push('--window-size=1920,1080');
      return launchOptions;
    }
  });
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
