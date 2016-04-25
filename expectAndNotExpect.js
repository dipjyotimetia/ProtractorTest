var logger = require('./log');

describe("validating the calculator app",function(){

	var expected_test;
	beforeEach(function() {
		browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
		browser.manage().window().maximize();
		element(by.model("first")).sendKeys("1");
		element(by.model("second")).sendKeys("1");
		element(by.buttonText("Go!")).click();
		//browser.pause();
		expected_test=element(by.binding("latest")).getText();
		logger.log('info','validatinrg the web name');
//		element(by.binding("latest")).getText().then(function(text) {
//			console.log(text);
//		});
		browser.sleep(2000);
	});
	

	afterEach(function() {
		browser.sleep(30000);
		console.log("After it block");
	});

	it("validate 1+1=2", function() {
		element(by.binding("latest")).getText().then(function(text) {
			console.log("Result is:"+text);
			expect(parseInt(text)).toBe(2);
			logger.log('info','validating the count');
			browser.sleep(2000);
		});
		
	});
//	it("validate 1+1=2",function(){
//
//		expected_text.then(function(text){
//			console.log("Result is :"text);
//			expect(parseInt(text)).toBe(14);
//		});
//	});

//	it("validate 2+2!=6",function(){
//
//		expected_text.then(function(text){
//			console.log("Result is :"text);
//			expect(parseInt(text)).not.toBe(10); 
//		});
//	});
//
//	it("validate 2+2=6",function(){
//
//		expected_text.then(function(text){
//			console.log("Result is :"text);
//			expect(parseInt(text)).toBe(4); 
//		});
//	});
});