'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.post('Show', function (req, res, next) {

    var firstname = req.form.firstname;
    var lastname = req.form.lastname;
    var email = req.form.email;
    var comment = req.form.comment;

    res.render('lab12/customPageResult', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        comment: comment
    });

    next();
});

module.exports = server.exports();
