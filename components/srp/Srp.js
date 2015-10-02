
var React = require('react');
var connectToStores = require("fluxible-addons-react").connectToStores;
var SearchStore = require('../../stores/SearchStore');
var NavLink = require('fluxible-router').NavLink;
var FilmResult = require('./FilmResult');

var Srp = React.createClass({
    render: function() {
        return (
            <div className="streamel-search-content">
                {this.props.results.map(function(result) { 
                    return (
                    <NavLink href={"/watch?id=" + result.id}>
                        <FilmResult title={result.name} description={result.description}
                            poster={result.thumbnail}
                            thumbnail="http://nerdreactor.com/wp-content/uploads/2015/08/heart-of-america-movie-poster.jpg" />
                    </NavLink>
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
