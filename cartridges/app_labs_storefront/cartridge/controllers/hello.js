'use strict';

var server = require('server');


server.get('Show', function (req, res, next) {
    var testObject = {
        name: 'testname',
        email: 'testemail@astoundcommerce.com',
        type: 'object'
    }
    res.render('hello/helloTemplate', {testObject: testObject});
    next();
});

module.exports = server.exports();