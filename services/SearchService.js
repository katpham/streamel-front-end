var request = require('superagent');
var route = require('../configs/externalRoutes.json').streamelApi;

module.exports = {
    name: "search",
    read: function(req, resource, params, config, callback) {
        request
            .get(route + '/series/search')
            .query({ q: params.q })
            .end(function(err, res) {
                if (err) {
                    // TODO: Handle error
                    console.log("error in search service");
                    console.log(err);
                } else {
                    callback(null, res.body);
                }
            });
    }
}