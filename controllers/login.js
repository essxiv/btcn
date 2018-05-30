var jwt = require('jwt-simple');
// var user = require('../../controllers/users.js');
var mongoose = require('mongoose');
var User = require('../models/user.js');


var register = {

    login: function(req, res) {
        var username = req.body.username || '';
        var password = req.body.password || '';
        var role = req.body.role || 'Developer';
        console.log(res);

        // RETURN 401 IF CREDENTIALS EMPTY;
        register.isEmpty(req, res, username, password);
        
        var user = register.create(username, password, role);

        // check to see if the credentials are validl
        wrongCredentials(user);
        console.log(wrongCredentials(users));

        if (userObj) {
            res.json(genToken(userObj))
        }
    },

    create(username, password, role) {
        var new_user = new User({
            username: username,
            password: password,
            role: role
        })
        new_user.save(function(err, user) {
            if (err) {
                console.log(err);
            }
            console.log('User Created: ', user);
        })
    },

    wrongCredentials(credentials) {
        if (!credentials) {
            res.status(401);
            res.json({
                status: 401,
                message: "Invalid Credentials"
            })
            return;
        }
    },

    isEmpty(req, res, username, password) {
        this.username = username;
        this.password = password;

        if (this.username === '' || this.password === '') {
            res.status(401);
            res.json({
                status: 401,
                message: "Invalid Username or Password!"
            })
            return;
        }
    },

    validate: function(username, password) {

        this.username = username;
        this.password = password;

        // user.create(username, password)

    },

    validateUser: function(username) {

        var userObj = {
            name: 'greg hasenauer',
            role: 'admin',
            username: 'essxiv'
        }

        return userObj;
    }
}

function genToken(user) {
    var expires = expiresIn(1);
    var token = jwt.encode({
        exp: expires,
    }, require('./secret')());

    return { 
        token: token,
        expires: expires,
        user: user
    }

    function expiresIn(numDays) {
        var date = new Date();
        return date.setDate(date.getDate() + numDays);
    }
}

module.exports = register;