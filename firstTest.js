describe("Test entering into an inputBox",function(){
	it("executing input box",function(){
		
		browser.get("http://www.angularjs.org");
		element(by.model("yourName")).sendKeys("Raman");
		element(by.binding("yourName")).getText().then(function(text){
			console.log(text);
			
		});
	});
});