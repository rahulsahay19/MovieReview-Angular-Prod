//appJSTest
//Created self executing function with one global variable
(function (myapp) {

    //setting isLocale to true
    myapp.isLocale = true;

    //logging message in console
    //if locale is true
    myapp.log = function (msg) {
        if (myapp.isLocale) {
            console.log(msg);
        }
    };
})(window.myapp = window.myapp || {});