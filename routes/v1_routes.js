// var express = require('express');
// var router = express.Router();


// router.post('/login', register.login);

// router.get('/api/v1/products', products.getAll);
// router.get('/api/v1/product/:id', products.getOne);
// router.post('/api/v1/product/', products.create);
// router.put('/api/v1/product/:id', products.update);
// router.delete('/api/v1/product/:id', products.delete);
 
// /*
//  * Routes that can be accessed only by registerenticated & registerorized users
//  */
// router.get('/api/v1/admin/users', user.getAll);
// router.get('/api/v1/admin/user/:id', user.getOne);
// router.post('/api/v1/admin/user/', user.create);
// router.put('/api/v1/admin/user/:id', user.update);
// router.delete('/api/v1/admin/user/:id', user.delete);
 
// module.exports = router;

'use strict';

module.exports = function(app) {

    var register = require('./security/register.js');
    var login = require('../controllers/login.js');
    var products = require('../controllers/products.js');
    var user = require('../controllers/users.js');
    // var token = require('../controllers/token.js');

    app.route('/login')
        .post(login.login)

    app.route('/register')
        .post(register.register)
    
    // app.route('/token')
    //     .get()

    app.route('/api/v1/products')
        .get(products.getAll)

    app.route('/api/v1/product/:id')
        .get(products.getOne)
        .put(products.update)
        .delete(products.delete);

    app.route('/api/v1/product/')
        .post(products.create)

    // Admin+ Routes
    app.route('/api/v1/admin/users')
        .get(user.getAll)

    app.route('/api/v1/admin/user/:id')
        .get(user.getOne)
        .put(user.update)
        .delete(user.delete)

    app.route('/api/v1/admin/user')
        .post(user.create)
        
};