// conf.js
exports.config = {
  directConnect: true,									// for this selenium standalone driver not needed to run
  capabilities: {
	  'browserName': 'firefox'
//		  'browserName': 'chrome'
  },
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',    //reqired for manual web driver start
  specs: ['fromFill.js'],			//Test js  varible test
  
  jasmineNodeOpts: {
	  defaultTimeoutInterval: 40000
  },
  
  // 1st type of reporter
  onPrepare : function() {
	    var AllureReporter = require('jasmine-allure-reporter');
	    var reporter = new AllureReporter({
	        allureReport : {
	            resultsDir : 'allure-results'
	        }
	    });
	    jasmine.getEnv().addReporter(reporter);

	    jasmine.getEnv().topSuite().afterEach({fn: function() {
	        browser.takeScreenshot().then(function(jpeg) {
	            allure.createAttachment('Screenshot', function() {
	                return new Buffer(jpeg, 'base64')
	            }, 'image/jpeg')();
	        })
	    }});
	}
  
  
}