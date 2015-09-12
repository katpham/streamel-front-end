var createStore = require('fluxible-app/utils/createStore');

var SearchStore = createStore({
    storeName: 'SeriesStore',
    handlers: {
        'SERIES_CHANGED': "handleSeriesChanged",
    },
    initialize: function(dispatcher) {
        this.id = null;
        this.info = null;
        this.episodes = [];
        this.currentEpisode = null;
    },
    handleSeriesChanged: function(payload) {
        this.id = payload.id;
        this.info = {
            "name": payload.name,
            "description": payload.description,
            "user": payload.user,
            "thumbnail": payload.thumbnail
        },
        this.episodes = payload.episodes,

        /* Hard coded for now */
        this.currentEpisode = 0;
        this.emitChange();
    },
    getId: function() {
        return this.id;
    },
    getInfo: function() {
        return this.info;
    },
    getEpisodes: function() {
        return this.episodes;
    },
    getCurrentEpisode: function() {
        return this.currentEpisode;
    },
    dehydrate: function() {
        return {
            id: this.id,
            info: this.info,
            episodes: this.episodes,
            currentEpisode: this.currentEpisode
        };
    },
    rehydrate: function(state) {
        this.id = state.id;
        this.info = state.info;
        this.episodes = state.episodes;
        this.currentEpisode = state.currentEpisode;
    }
});

module.exports = SearchStore;