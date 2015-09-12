var request = require('superagent');
var route = require('../configs/externalRoutes.json').streamelApi;

module.exports = {
    name: "series",
    read: function(req, resource, params, config, callback) {
        console.log(params.id);
        request
            .get(route + '/series/' + params.id)
            .end(function(err, res) {
                if (err) {
                    // TODO: Handle error
                    console.log("error in series service");
                    console.log(err);
                    callback("Error");
                } else {
                    callback(null, res.body);
                }
            });
    }
}