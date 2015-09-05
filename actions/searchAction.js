module.exports = function(context, payload, callback) {

    context.service.read('search', {q: payload.term}, {}, function(err, results) {
        if (err) {
            // TODO: Handle error
            console.log("Error on search action");
            console.log(err);
        } else {
            console.log("Success on search action");
            console.log(results);
            payload.results = results;
            context.dispatch("SEARCH_RESULTS_RECEIVED", payload);
            callback();
        }
    });
};