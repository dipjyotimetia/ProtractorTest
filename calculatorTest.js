describe("validating the calculator app",function(){
	
	beforeEach(function() {
		browser.get("http://www.way2automation.com");
	});
	
	afterEach(function() {
		browser.sleep(30000);
		console.log("After it block");
	});
	
	it("validate 1+1=2",function(){
		
		element(by.model("first")).sendKeys("1");
		element(by.model("second")).sendKeys("1");
		element(by.buttonText("Go!")).click();
		
		element(by.binding("latest")).getText().then(function(text){
			console.log("Result is :"text);
		});
	});
	
	it("validate 2+2=4",function(){
		
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("2");
		element(by.buttonText("Go!")).click();
		
		element(by.binding("latest")).getText().then(function(text){
			console.log("Result is :"text);
	});
});