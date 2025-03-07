/**
 * This leverages Express to create and run the http server.
 * A Fluxible context is created and executes the navigateAction
 * based on the URL. Once completed, the store state is dehydrated
 * and the application is rendered via React.
 */

var express = require('express');
var compression = require('compression');
var path = require('path');
var serialize = require('serialize-javascript');
var {navigateAction} = require('fluxible-router');
var debugLib = require('debug');
var React = require('react');
var app = require('./app');
var HtmlComponent = require('./components/Html');
var { createElementWithContext } = require('fluxible-addons-react');
var htmlComponent = React.createFactory(HtmlComponent);
var env = process.env.NODE_ENV;
var bodyParser = require('body-parser');

var debug = debugLib('fluxible-template');

/* Regeister Services */
app.getPlugin('FetchrPlugin').registerService(require('./services/SearchService'));
app.getPlugin('FetchrPlugin').registerService(require('./services/SeriesService'));


var server = express();
server.use('/public', express.static(path.join(__dirname, '/public')));
server.use(compression());
server.use(bodyParser.json());
server.use(app.getPlugin('FetchrPlugin').getXhrPath(), app.getPlugin('FetchrPlugin').getMiddleware());

server.use(function(req, res, next) {
    var context = app.createContext({
        req: req,
        xhrContext: { // Used as query params for all XHR calls
            lang: 'en-US', // make sure XHR calls receive the same lang as the initial request
            _csrf: 'a3fc2d' // CSRF token to validate on the server using your favorite library
        }
    });

    debug('Executing navigate action');
    context.getActionContext().executeAction(navigateAction, {
        url: req.url
    }, function(err) {
        if (err) {
            if (err.statusCode && err.statusCode === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        debug('Exposing context state');
        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

        debug('Rendering Application component into html');
        var html = React.renderToStaticMarkup(htmlComponent({
            clientFile: env === 'production' ? 'main.min.js' : 'main.js',
            context: context.getComponentContext(),
            state: exposed,
            markup: React.renderToString(createElementWithContext(context))
        }));

        debug('Sending markup');
        res.type('html');
        res.write('<!DOCTYPE html>' + html);
        res.end();
    });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Application listening on port ' + port);

module.exports = server;
