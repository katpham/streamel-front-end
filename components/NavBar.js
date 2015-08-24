var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var SearchBar = require('./SearchBar');

var Navbar = React.createClass({
    getDefaultProps: function() {
        return {
            selected: 'home',
            links: {}
        }
    },

    render: function() {
        var selected = this.props.selected;
        var links = this.props.links;

        var linkHTML = Object.keys(links).map(function(name) {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'pure-menu-selected';
            }

            return (
                <div>
                    <li className={className} key={link.path}>
                        <NavLink routeName={link.page} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
                    </li>
                </div>
            );
        });
        return (
            <div className="streamel-navbar">
                <SearchBar />
            </div>
        );
        /*
        return (
            <div className="streamel-navbar">
                <input type="text" className="streamel-searchbar"/>
                <ul className="pure-menu pure-menu-open pure-menu-horizontal">
                    {linkHTML}
                </ul>
            </div>
        );
        */
    }
});

module.exports = Navbar;
