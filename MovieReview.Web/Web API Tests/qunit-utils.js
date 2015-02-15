/**
 * Movie Review utilities to make QUnit testing easier
 * A qunit extension
 * Include this script before your test script on your test html page
 *
 */
QUnit.extend(QUnit, {
    /**
     * Create a string from tokenized format string and token-replacement values.
     * Similar to string.format in .Net
     * Source: http://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery
     *
     * @example stringformat("i like language {lang} and {lang1}",{lang:'C#',lang1:'javascript'}); 
     * @example stringformat("i like language {0} and {1}",'C#','javascript'}); 
     *
     */
    stringformat: function (str, col) {
        col = typeof col === 'object' ? col : Array.prototype.slice.call(arguments, 1);

        return str.replace(/\{\{|\}\}|\{(\w+)\}/g, function (m, n) {
            if (m == '{{') { return '{'; }
            if (m == '}}') { return '}'; }
            return col[n];
        });
    },
    /**
     * Within an async test, if the condition is false,
     * the test should terminate. 
     * When condition is false, call QUnit's start so it can resume
     */
    okAsync: function (condition, action) {
        if (!condition) {
            start();
        }
        ok(condition, action);
    }
});