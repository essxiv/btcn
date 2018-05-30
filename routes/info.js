'use strict';

module.exports = function(app) {

    // console.log('shit');
    var Info = require('../controllers/information.js');
    // console.log(app.route('/api').get(List.list_all_info));

    app.route('/api')
        .get(Info.list_all_info)
        .post(Info.create_a_info)

    app.route('/api/:apiId')
        .get(Info.read_a_info)
        .put(Info.update_a_info)
        .delete(Info.delete_a_info)

};