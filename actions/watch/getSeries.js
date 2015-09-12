

module.exports = function(context, payload, callback) {
    var id = payload.get('query').get('id');

    context.service.read('series', {id: id}, {}, function(err, results) {
        if (err) {
            // TODO: Handle error
            console.log("Error on get series action");
            console.log(err);
        } else {
            console.log("Success on get series action");
            console.log(results);
            payload.results = results;
            context.dispatch("SERIES_CHANGED", results);
            callback();
        }
    });
};