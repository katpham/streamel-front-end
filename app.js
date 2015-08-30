var Fluxible = require('fluxible');
var Application = require('./components/Application');
var ApplicationStore = require('./stores/ApplicationStore');
var RouteStore = require('./stores/RouteStore');
var PlayStore = require('./stores/PlayStore');
var actionMonitor = require('fluxible-plugin-action-monitor');

var fetchr = require('fluxible-plugin-fetchr');
var fetchrInstance = fetchr({
    xhrPath: '/api'
});

// create new fluxible instance
var app = new Fluxible({
    component: Application
});

app.plug(actionMonitor.actionMonitor);
app.plug(fetchrInstance);

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(PlayStore);

app.registerStore(actionMonitor.actionMonitorStore);

module.exports = app;
