var createStore = require('fluxible-app/utils/createStore');

var PlayStore = createStore({
	storeName: 'PlayStore',
	handlers: {
		'VIDEOS_RECEIVED': "handleVideosReceived"
	},
	initialize: function(dispatcher) {
		this.config = {
			playlist: []
		}
	},
	handleVideosReceived: function(payload) {
		this.config = {
			playlist: payload.videos
		}
		this.emitChange();
	},
	getConfig: function() {
		return this.config;
	},
	dehydrate: function() {
		return {
			config: this.config
		};
	},
	rehydrate: function(state) {
		this.config = state.config;
	}
});

module.exports = PlayStore;