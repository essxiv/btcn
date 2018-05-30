'use strict';

var mongoose = require('mongoose');
var Product = require('../models/product.js');

exports.getAll = function(req, res) {
    console.log(req.body);
    Product.find({}, function(err, items) {
        if (err) {
            res.send(err);
            res.json(items);
        }
    })  
    res.json(items);
}

exports.getOne = function(req, res) {
    var id = req.params.id;
    Product.findById(id, function(err, item) {
        if (err) {
            res.send(err);
            res.json(item);
        }
        res.send(item);
    })
}

exports.create = function(req, res) {
    var new_product = new Product( req.body );
    Product.save(function(err, item) {
        if (err) {
            res.send(err);
            res.json(item);
        }
        res.json(item);
    })
}

exports.update = function(req, res) {
    Product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true }, function(err, item) {
        if (err) {
            res.send(err);
            res.json(item);
        }
        res.json(item);        
    })
}

exports.delete = function(req, res) {
    Product.remove({ _id: req.params.productId }, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    })
}
