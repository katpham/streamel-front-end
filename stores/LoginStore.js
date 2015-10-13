var createStore = require('fluxible/addons/createStore');

var LoginStore = createStore({
	storeName: 'LoginStore',
	handlers: {
		'COUNTER_INCREMENTED': "incrementCounter"
	},
	initialize: function(dispatcher) {
        this.number = 0;
    },
    incrementCounter: function(payload) {
        this.number = payload;
        this.emitChange();
    },
    getNumber: function() {
        return this.number;
    },
    dehydrate: function() { //called on server
        return {
            number: this.number
        };
    },
    rehydrate: function(state) { //for server side rendering, state is from dehydrate
        this.number = state.number;
    }


});

module.exports = LoginStore;