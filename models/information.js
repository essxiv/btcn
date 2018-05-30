'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var informationSchema = Schema({
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model( 'Information', informationSchema );