import {Config,browser} from 'protractor';
//import{testConfig,platform} from 'protractor-html-reporter-2'

//let HtmlScreenshotReporter = require('protractor-html-reporter-2');
let jasmineReporters = require('jasmine-reporters');

let reportsDirectory = './reports';
let dashboardReportDirectory = reportsDirectory + '/dashboardReport';

// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs:['src/test/xyzbank.js'],
    //suites:{ bothTest:['src/test/angularCalcu.js', 'src/test/angular.js']},
    
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
    onPrepare: function () {
      // xml report generated for dashboard
      browser.manage().timeouts().implicitlyWait(5000);
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: reportsDirectory + '/xml',
          filePrefix: 'xmlOutput'
      }));

      let fs = require('fs-extra');
      if (!fs.existsSync(dashboardReportDirectory)) {
          fs.mkdirSync(dashboardReportDirectory);
      }

      jasmine.getEnv().addReporter({
          specDone: function (result) {
              if (result.status == 'failed') {
                  browser.getCapabilities().then(function (caps) {
                    let browserName = caps.get('browserName');

                      browser.takeScreenshot().then(function (png) {
                        let stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                          stream.write(new Buffer(png, 'base64'));
                          stream.end();
                      });
                  });
              }else if(result.status == 'passed'){
                browser.getCapabilities().then(function (caps) {
                    let browserName = caps.get('browserName');

                  browser.takeScreenshot().then(function (png) {
                      let stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                      stream.write(new Buffer(png, 'base64'));
                      stream.end();
                  });
              });
              }
          }
      });

  },

  onComplete: function () {
      let browserName, browserVersion;
      let capsPromise = browser.getCapabilities();

      capsPromise.then(function (caps) {
          browserName = caps.get('browserName');
          browserVersion = caps.get('version');
       //let   platform = caps.get('platform');

       let HTMLReport = require('protractor-html-reporter-2');
          let testConfig = {
              reportTitle: 'Protractor Test Execution Report',
              outputPath: dashboardReportDirectory,
              outputFilename: 'index',
              screenshotPath: './',
              testBrowser: browserName,
              browserVersion: browserVersion,
              modifiedSuiteName: false,
              screenshotsOnlyOnFailure: false,
             // testPlatform: platform
          };
          new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
      });
  },
  }

