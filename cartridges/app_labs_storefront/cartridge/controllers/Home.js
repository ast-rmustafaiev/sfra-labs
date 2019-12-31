'use strict';

var server = require('server');    //the server module is used by all controllers
var cache = require('*/cartridge/scripts/middleware/cache');

server.get('Show', cache.applyDefaultCache, server.middleware.https, function (req, res, next) {  //registers the Show route for the Home module
    res.render('/home/homePage');      //renders the hompage template
    next();            //notifies middleware chain that it can move to the next step or terminate if this is the last step.
});

module.exports = server.exports();
