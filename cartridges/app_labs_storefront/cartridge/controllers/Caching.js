'use strict';

var server = require('server');
var cache = require('../scripts/middleware/cache');

server.get('Show', cache.applyCustomCache, function (req, res, next) {
    res.render('lab11/cacheInfo');

    next();
});

module.exports = server.exports();
