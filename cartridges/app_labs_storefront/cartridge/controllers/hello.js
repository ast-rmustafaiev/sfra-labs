'use strict';

var server = require('server');


server.get('Show', function (req, res, next) {
    var testObject = {
        name: 'testname',
        email: 'testemail@astoundcommerce.com',
        type: 'object'
    };
    res.render('lab1/helloTemplate', { testObject: testObject });
    next();
});

module.exports = server.exports();
