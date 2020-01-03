'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Show', function (req, res, next) {
    var actionUrl = URLUtils.url('CustomPageResult-Show');
    var customForm = server.forms.getForm('customForm');//creates empty JSON object using the form definition
    customForm.clear();

    res.render('custom/customPage', {
        actionUrl: actionUrl,
        customForm: customForm
    });
    next();
});

module.exports = server.exports();
