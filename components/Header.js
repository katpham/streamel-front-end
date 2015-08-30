var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;
var CircleButton = require('./oui/CircleButton');

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
                    <h1>Search</h1>
                </div>
                <nav className="streamel-header-item">
                    {/*<CircleButton action={NavigateAction} payload={{method:"GET", url:"/resume"}} actionId="NavigateBlog">
                        Resume
                    </CircleButton>
                    <span className="clear"></span>*/}
                </nav>
            </header>
        );
    }
});

module.exports = Header;