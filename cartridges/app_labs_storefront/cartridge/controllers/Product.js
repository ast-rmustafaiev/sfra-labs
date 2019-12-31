'use strict';

var server = require('server');
// inherits functionality from next Product.js found to the right on the cartridge path
var page = module.superModule;
// extends existing server object with a list of new routes from the Product.js found by module.superModule
server.extend(page);

// adds additional middleware
server.append('Show', function (req, res, next) {
    var viewData = res.getViewData();
    var hasProduct = viewData && viewData.product;
    if (hasProduct) {
        viewData.product.reviews = [{
            text: 'Lorem ipsum dolor sit amet, cibo utroque ne vis, has no sumo graece.' +
                ' Dicta persius his id. Ea maluisset scripserit contentiones quo, est ne movet dicam.' +
                ' Equidem scriptorem vis no. Civibus tacimates interpretaris has et,' +
                ' ei offendit ocurreret vis, eos purto pertinax eleifend ea.',
            rating: 3.5
        }, {
            text: 'Very short review',
            rating: 5
        }, {
            text: 'Lorem ipsum dolor sit amet, cibo utroque ne vis, has no sumo graece.',
            rating: 1.5
        }];

        res.setViewData(viewData);
    }

    next();
});

module.exports = server.exports();

/*
var page = require('* /cartridge/controller/Product');
var server = require('server');

server.extend(page);

server.replace('Variation', server.middleware.get, function (req, res, next) {
    res.render('lab8/productreplace');
    next();
});

module.exports = server.exports();
*/
