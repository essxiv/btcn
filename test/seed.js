var mongoose = require('mongoose')
var User = require('../models/user')

var exampleData = [{
    name: '',
    username: 'p',
    password: 'hash',
    token: 'a',
    role: 'admin',
    date_registered: new Date()
}]

mongoose.connect('mongodb://localhost:27017/apidb', function() {

    User.remove({}, function(error) {
        if (error) {
            return error;
        }
    })

    User.collection.insertMany(exampleData, function(error, result) {
        if (error) {
            return error;
        }
        mongoose.connection.close()
    })
    
})
