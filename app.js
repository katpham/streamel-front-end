var Fluxible = require('fluxible');
var Application = require('./components/Application');
//var actionMonitor = require('fluxible-plugin-action-monitor');
var fetchr = require('fluxible-plugin-fetchr');
var fetchrInstance = fetchr({
    xhrPath: '/api'
});

// create new fluxible instance
var app = new Fluxible({
    component: Application
});

//app.plug(actionMonitor.actionMonitor);
app.plug(fetchrInstance);

// register stores
app.registerStore(require('./stores/RouteStore'));
app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/SearchStore'));
app.registerStore(require('./stores/SeriesStore'));
app.registerStore(require('./stores/LoginStore'));
//app.registerStore(actionMonitor.actionMonitorStore);

module.exports = app;
