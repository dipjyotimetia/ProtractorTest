// conf.js
exports.config = {
  directConnect: true,									// for this selenium standalone driver not needed to run
  capabilities: {
	  'browserName': 'firefox'
  },
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',    //reqired for manual web driver start
  specs: ['BankApplicationTest.js']			//Test js
  
//  jasmineNodeOpts: {
//	  defaultTimeoutInterval: 3000
//  }
}