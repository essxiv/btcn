var jwt = require('jwt-simple');
// var user = require('../../controllers/users.js');
var mongoose = require('mongoose');
var User = require('../../models/user.js');
var path = require('path');

var register = {

    register: function(req, res) {

        console.log('this req body: ', req.body);

        var user = {
            name: req.body.name || '',
            username: req.body.username || '',
            password: req.body.password || '',
            token: '',
            role: req.body.role || 'Developer',
        }

        console.log(user);

        // RETURN 401 IF CREDENTIALS EMPTY;
        if (!register.isEmpty(user)) {
            res.json({
                status: 401,
                message: "Invalid Username or Password!"
            })
        } else {
            var newUser = register.create(user);
            console.log('this newUser: ', newUser);

            res.sendFile('client/token.html', { root: './' });

            // res.json({
            //     status: 200,
            //     message: "Successful"
            // });
        }

    },

    create: function(user) {

        console.log('--------------------------: ', user);

        var token = genToken();

        this.name = user.name;
        this.username = user.username;
        this.password = user.password;
        this.token = token;        
        this.role = user.role;  
        
        var new_user = new User({
            name: this.name,
            username: this.username,
            password: this.password,
            token: this.token,
            role: this.role,
        })

        console.log('new user: ', new_user)

        new_user.save(function(err, user) {
            if (err) {
                console.log(err);
                return false;
            }
            console.log('User Created: ', user);
        })

    },
    
    checkAlreadyCreated: function(user) {

        console.log(user);

        return;
        // Compare Username
        // Compare Email
    },

    wrongCredentials(credentials) {
        console.log(credentials);
        if ( !credentials ) {
            res.json({
                status: 401,
                message: "Invalid Credentials"
            })
            return;
        }
    },

    isEmpty: function(user) {
        this.username = user.username;
        this.password = user.password;

        if (this.username === '' || this.password === '') {
            return 0;
        } else {
            return 1;
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

function genToken() {
    var expires = expiresIn(2);
    var token = jwt.encode({
        exp: expires,
    }, require('./secret')());

    var tokenStr = JSON.stringify(token);
    return tokenStr;

    function expiresIn(numDays) {
        var date = new Date();
        return date.setDate(date.getDate() + numDays);
    }
}

module.exports = register;  