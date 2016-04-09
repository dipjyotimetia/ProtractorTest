// conf.js
exports.config = {
  directConnect: true,									// for this selenium standalone driver not needed to run
  capabilities: {
	  'browserName': 'firefox'
//		  'browserName': 'chrome'
  },
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',    //reqired for manual web driver start
  specs: ['expectAndNotExpect.js']			//Test js  varible test
  
//  jasmineNodeOpts: {
//	  defaultTimeoutInterval: 3000
//  }
}