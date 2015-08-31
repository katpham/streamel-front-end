
module.exports = function(context, payload, callback) {
    context.dispatch("SEARCH_TERM_UPDATED", payload);
}