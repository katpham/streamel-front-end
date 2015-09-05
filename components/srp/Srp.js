
var React = require('react');
var connectToStores = require("fluxible-addons-react").connectToStores;
var SearchStore = require('../../stores/SearchStore');

var Srp = React.createClass({
    render: function() {
        return (
            <div className="streamel-search-content">
                {this.props.results.map(function(result) { 
                    console.log("Here");
                    return (
                    <div className="streamel-search-item">
                        <h1>{result.name}</h1>
                        <p>{result.description}</p>
                    </div>
                )})}
            </div>
        );
    }
});

module.exports = connectToStores(
    Srp,
    [SearchStore],
    function (context, props) {
        console.log("RESULTS");
        console.log(context.getStore(SearchStore).getResults());
        return {
            term: context.getStore(SearchStore).getTerm(),
            results: context.getStore(SearchStore).getResults()
        }
    }
);
