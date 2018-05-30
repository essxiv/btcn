'use strict';

var mongoose = require('mongoose');
var User = require('../models/user.js');

exports.getAll = function(req, res) {
    console.log(req.body);
    User.find({}, function(err, users) {
        if (err) {
            res.send(err);
            res.json(users);
        }
    })  
    res.json(users);
}

exports.getOne = function(req, res) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) {
            res.send(err);
            res.json(user);
        }
        res.send(user);
    })
}

exports.create = function(req, res) {
    var new_user = new User( req.body );
    new_user.save(function(err, user) {
        if (err) {
            res.send(err);
            res.json(user);
        }
        res.json(user);
    })
}

exports.update = function(req, res) {
    User.findOneAndUpdate({ _id: req.params.UserId }, req.body, { new: true }, function(err, user) {
        if (err) {
            res.send(err);
            res.json(user);
        }
        res.json(user);        
    })
}

exports.delete = function(req, res) {
    User.remove({ _id: req.params.UserId }, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}
