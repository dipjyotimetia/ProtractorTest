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
		
//		element(by.binding("latest")).getText().then(function(text) {
//			console.log(text);
//		});
	});
	

	afterEach(function() {
		browser.sleep(30000);
		console.log("After it block");
	});

	it("validate 1+1=2", function() {
		element(by.binding("latest")).getText().then(function(text) {
			console.log("Result is:"+text);
			expect(parseInt(text)).toBe(2);
		});
		element(by.binding("result.timestamp")).getText().then(function(time) {
			console.log(time);
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