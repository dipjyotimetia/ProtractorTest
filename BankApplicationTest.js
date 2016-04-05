describe("Test automation of bnking app",function(){
	
	
	//Drop down test
	it("Validate customer login test",function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		browser.manage().window().maximize();
		element(by.buttonText("Customer Login")).click()
		
		// to verify the title of the page
		expect(browser.getTitle()).toContain("Protractor practice");
		
		element.all(by.css("#userSelect option")).then(function(items) {
			
			console.log("---- Printing values of dropdown list ----")
			console.log("Total value in dropdown :"+items.length);
			// printing the values of the dropdown list
			for (var i = 0; i < items.length; i++) {
				//items[i].getAttribute("value").then(function(text) {			// to get the attribute values
				items[i].getText().then(function(text) {
				console.log(text);	
				});
			}
			// selecting values from dropdown
//			element(by.model("custId")).element(by.css("[value='2']")).click();
			element(by.model("custId")).$("[value='2']").click();
			browser.sleep(3000); 
			element(by.buttonText("Login")).click();
//			element(by.binding("user")).getText().then(function(text) {
//				console.log(text);
//			});
			expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
		});
	});

});