/// <reference path="../scripts/jasmine.js" />
/// <reference path="../../moviereview.web/js/appjstest.js" />
//myAppTest

describe("myapp tests -->",function() {
    
    //it is sub grouping or group of tests
    it("isLocale", function () {
        expect(myapp.isLocale).toEqual(true);
    });

    it("log", function() {
        expect(myapp.log).toBeDefined();
    });
})