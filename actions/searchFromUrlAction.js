var searchAction = require("./searchAction");

module.exports = function(context, payload, callback) {
    var query = payload.get('query').get('q');
    context.executeAction(searchAction, { term: query });
    callback();
}