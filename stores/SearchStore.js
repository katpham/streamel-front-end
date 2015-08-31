var createStore = require('fluxible-app/utils/createStore');

var SearchStore = createStore({
    storeName: 'SearchStore',
    handlers: {
        'SEARCH_RESULTS_RECEIVED': "handleSearchResultsReceived",
        'SEARCH_TERM_UPDATED': "handleSearchTermUpdated"
    },
    initialize: function(dispatcher) {
        this.term = "";
        this.results = [];
    },
    handleSearchResultsReceived: function(payload) {
        this.term = payload.term;
        this.results = payload.results;
        this.emitChange();
    },
    handleSearchTermUpdated: function(payload) {
        this.term = payload.term;
        this.emitChange();
    },
    getTerm: function() {
        return this.term;
    },
    getResults: function() {
        return this.results;
    },
    dehydrate: function() {
        return {
            term: this.term,
            results: this.results
        };
    },
    rehydrate: function(state) {
        this.term = state.term;
        this.results = state.results;
    }
});

module.exports = SearchStore;