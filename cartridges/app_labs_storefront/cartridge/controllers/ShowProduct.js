'use strict';
var server = require('server');
var ProductMgr = require('dw/catalog/ProductMgr');

server.get('Start', function (req, res, next) {
    var queryObj = req.querystring;
    var productId = queryObj && queryObj['pid'];
    var product = productId && ProductMgr.getProduct(productId);
    var clickStream = req.session.clickStream;

    if (product) {
        res.render('lab4/product', { Product: product });
    } else {
        res.render('lab4/productnotfound', { Message: 'the product was not found: ' + productId });
    }

    next();
});

module.exports = server.exports();
