'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true,
        meta: {}
    },
    role: {
        type: String,
        required: true
    },
    date_registered: {
        type: String,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model( 'User', userSchema );