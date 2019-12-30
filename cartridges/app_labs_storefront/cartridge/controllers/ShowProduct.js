'use strict';
var server = require('server');
var ProductMgr = require('dw/catalog/ProductMgr');

server.get('Main', function (req, res, next) {
    var queryObj = req.querystring;
    var productId = queryObj && queryObj['pid'];
    var product = productId && ProductMgr.getProduct(productId);

    if (product) {
        res.render('lab4/product', { Product: product });
    } else {
        res.render('lab4/productnotfound', { Message: 'the product was not found: ' + productId });
    }

    next();
});

module.exports = server.exports();
