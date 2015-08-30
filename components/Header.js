var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;
var CircleButton = require('./oui/CircleButton');
var SearchBar = require('./srp/SearchBar');

var Header = React.createClass({
    render: function() {
        return (
            <header className="streamel-header no-link">
                <div className="streamel-header-item">
                    <NavLink href="/">
                        <h1>Streamel</h1>
                    </NavLink>
                </div>
                <div className="streamel-header-item">
                    <SearchBar />
                </div>
                {/*<nav className="streamel-header-item">
                    <CircleButton action={NavigateAction} payload={{method:"GET", url:"/resume"}} actionId="NavigateBlog">
                        Resume
                    </CircleButton>
                    <span className="clear"></span>
                </nav>*/}
            </header>
        );
    }
});

module.exports = Header;