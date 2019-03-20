"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
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
    specs: ['src/test/xyzbank.js'],
    //suites:{ bothTest:['src/test/angularCalcu.js', 'src/test/angular.js']},
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    },
    onPrepare: function () {
        // xml report generated for dashboard
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
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
                    protractor_1.browser.getCapabilities().then(function (caps) {
                        let browserName = caps.get('browserName');
                        protractor_1.browser.takeScreenshot().then(function (png) {
                            let stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
                else if (result.status == 'passed') {
                    protractor_1.browser.getCapabilities().then(function (caps) {
                        let browserName = caps.get('browserName');
                        protractor_1.browser.takeScreenshot().then(function (png) {
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
        let capsPromise = protractor_1.browser.getCapabilities();
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
            };
            new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTBDO0FBQzFDLCtEQUErRDtBQUUvRCxxRUFBcUU7QUFDckUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVwRCxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUNuQyxJQUFJLHdCQUF3QixHQUFHLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBRXJFLGdDQUFnQztBQUNoQyxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM3Qix5RUFBeUU7SUFFekUsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QscUNBQXFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvRCxjQUFjLEVBQUUsSUFBSTtZQUNwQixRQUFRLEVBQUUsZ0JBQWdCLEdBQUcsTUFBTTtZQUNuQyxVQUFVLEVBQUUsV0FBVztTQUMxQixDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0Is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