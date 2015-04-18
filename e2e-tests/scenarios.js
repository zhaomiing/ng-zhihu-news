'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /list when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/list");
  });


  describe('list', function() {

    beforeEach(function() {
      browser.get('index.html#/list');
    });


    it('should render list when user navigates to /list', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('detail', function() {

    beforeEach(function() {
      browser.get('index.html#/detail');
    });


    it('should render detail when user navigates to /detail', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
