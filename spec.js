// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    //browser.get('http://juliemr.github.io/protractor-demo/');
	  browser.get('http://www.gmail.com')
    expect(browser.getTitle()).toEqual('Gmail');
  });
});