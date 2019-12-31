'use strict'

var server = require('server');
var page = module.superModule;

server.extend(page);

server.append('Show', function (req, res, next) {
    // do nothing
    next();
});

module.exports = server.exports();
