var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;

var Header = React.createClass({
    render: function() {
        return (
            <header className="streamel-header">
                <div className="streamel-header-item">
                    <h1>Logo</h1>
                </div>
                <div className="streamel-header-item">
                    <h1>Search</h1>
                </div>
                <div className="streamel-header-item">
                    <h1>Nav</h1>
                </div>
            </header>
        );
    }
});

module.exports = Header;