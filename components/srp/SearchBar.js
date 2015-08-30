var React = require('react');

var SearchBar = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" className="streamel-search-bar" placeholder="Search for a Show" />
            </div>
        );
    }
});

module.exports = SearchBar;
