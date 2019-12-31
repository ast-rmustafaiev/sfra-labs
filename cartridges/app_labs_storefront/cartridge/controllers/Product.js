'use strict'

var page = require('app_storefront_base/cartridge/controllers/Product');
var server = require('server');

server.extend(page);

server.replace('Show', server.middleware.get, function (req, res, next) {
    res.render('lab8/productreplace');
    next();
});

module.exports = server.exports();

