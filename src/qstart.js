/**
 * qstart.js - DOM ready promisified with Q
 */

(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        Qstart = definition();
    }

})(function () {
    return function () {
        var Q = window.Q || require('q'),
            d = Q.defer(),
            successƒ = function () {
                window.removeEventListener("error", errorƒ);
                d.resolve(window.document);
            },
            errorƒ = function (err) { d.reject(err); };

        window.document.addEventListener("readystatechange", function () {
            if (document.readyState == "complete") successƒ();
        }, false);
        window.addEventListener("error", errorƒ, false);
        return d.promise;
    };
});
