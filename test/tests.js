function fail (err) { console.log(err); throw "Unexpected failure: "+err; }

test("Qstart is defined and is a promise", function () {
    ok(Q.isPromise(Qstart), "Qstart is a promise");
});

asyncTest("successful start of the page", function() {
    Qstart.then(function (doc) {
        ok(doc === window.document, "get the root document");
        equal(doc.getElementById('dummy-div').style.backgroundColor, "red", "dummy div is red");
    })
    .fail(fail)
    .fin(start);
});

asyncTest("call multiple times Qstart", function() {
    Qstart.then(function (doc) {
        ok(doc === window.document, "get the root document");
    })
    .fail(fail)
    .fin(start);
});
