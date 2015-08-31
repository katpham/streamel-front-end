var React = require('react');
var navigateAction = require('fluxible-router').navigateAction;
var updateSearchTermAction = require('../../actions/updateSearchTermAction');
var connectToStores = require("fluxible-addons-react").connectToStores;
var SearchStore = require('../../stores/SearchStore');

var SearchBar = React.createClass({
    contextTypes: {
        executeAction: React.PropTypes.func.isRequired
    },
    handleChange: function(e) {
        this.context.executeAction(updateSearchTermAction, {
            term: event.target.value
        });
    },
    search: function(e) {
        e.preventDefault();
        this.context.executeAction(navigateAction, {
            url: '/search?q=' + React.findDOMNode(this.refs.search).value.trim()
        });
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <input type="text" className="streamel-search-bar" placeholder="Search for a Show" ref="search" value={this.props.term} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
});

module.exports = connectToStores(
    SearchBar,
    [SearchStore],
    function (context, props) {
        return {
            term: context.getStore(SearchStore).getTerm()
        }
    }
);
