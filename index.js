SpecHelper = {};

// return promises from it{} blocks so we don't need to worry about callback's
require("mocha-as-promised")();

// very tasty assertion library
SpecHelper.chai = require("chai");

// make chai assertions return promises, which enables awesome assertion chaining without callbacks
var chaiAsPromised = require("chai-as-promised");
SpecHelper.chai.use(chaiAsPromised);

// selenium webdriver
SpecHelper.driver = require('wd');

// augment basic chai promises with webdriver magic
chaiAsPromised.transferPromiseness = SpecHelper.driver.transferPromiseness;


// execute this at the top of your mocka describe calls to wire in selenium webdriver
SpecHelper.usesBrowser = function(browserName) {
  browser = null;
  expect = SpecHelper.chai.expect;
  assert = SpecHelper.chai.assert;

  before(function() {
    browser = SpecHelper.driver.promiseChainRemote();
    return browser.init({browserName: browserName});
  });

  after(function() {
    return browser.quit();
  });
};


module.exports = SpecHelper;
