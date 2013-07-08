# DOM ready promisified with Q [![Build Status](https://secure.travis-ci.org/peutetre/qstart.png)](http://travis-ci.org/peutetre/qstart)
## Usage

~~~ javascript
    var Qstart = require('qstart');

    function onSuccess (doc) {
        // do stuff on success...
    }

    function onError (err) {
        // do stuff on error...
    }

    Qstart.then(onSuccess, onError);
~~~

## Install

via npm

~~~ sh
npm install qstart
~~~

## Test

~~~ sh
npm install
grunt test
~~~
