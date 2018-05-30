'use strict';

var mongoose = require('mongoose');
var Task     = mongoose.model('Information');

exports.list_all_info = function(req, res) {

    console.log(req.body);
    
    Task.find({}, function(err, task) {
        if (err) {
            res.send(err);
            res.json(task);
        }
        res.json(task);
    })
}

exports.create_a_info = function(req, res) {
    console.log(req.body);
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err) {
            res.send(err);
            res.json(task);
        }
        res.json(task);
    })
}

exports.read_a_info = function(req, res) {

    console.log(req.body);
    
    Task.findById(req.params.taskId, function(err, task) {
        if (err) {
            res.send(err);
            res.json(task);
        }
        res.json(task);        
    })
}

exports.update_a_info = function(req, res) {

    console.log(req.body);
    
    Task.findOneAndUpdate({ _id: req.params.taskId}, req.body, { new: true }, function(err, task) {
        if (err) {
            res.send(err);
            res.json(task);
        }
        res.json(task);        
    })
}

exports.delete_a_info = function(req, res) {

    console.log(req.body);
    
    Task.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Deleted' });        
        res.json(task);        
    })
}