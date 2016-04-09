describe("validating the calculator app",function(){

	var title;
	
	beforeEach(function() {

		browser.get("http://www.way2automation.com");
		title=browser.getTitle();
	});

	it("validate exact title",function(){

		title.then(function(text){
			console.log(text);
			expect(title).toEqual("Protractor practice website : calculator")
		});
	});

	it("validate partial title match",function(){

		title.then(function(text){
			console.log(text);
			expect(title).toMatch("Practice"); 
		});
	});

	it("validate title should not match",function(){

		expected_text.then(function(text){
			console.log(text);
			expect(title), 
		});
	});
});