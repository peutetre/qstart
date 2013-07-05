# DOM ready promisified with Q

## Usage

~~~ javascript
    var Qstart = require('qstart');

    function init (doc) {
        // do stuff on success...
    }

    function onError (err) {
        // do stuff on error...
    }

    Qstart.then(init, onError);
~~~
