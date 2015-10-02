var React = require('react');
var FilmResult = require('../srp/FilmResult');

var Home = React.createClass({
    render: function() {
        return (
            <div className="streamel-home-content">
                <div className="streamel-home-banner">
        
                </div>
                <FilmResult title="The Most Awesome Film" description="Lorem ipsum dolor sit amet, ei sed falli dissentiet, vis mollis patrioque id, ne diam sapientem dissentias nam. Fierent detraxit expetenda nec id. Est ea homero cetero verear, ad detracto salutandi nam, ad has sanctus maluisset. Ne iisque nominati sententiae eum, atqui munere maiestatis an vix. Ex eam iudico causae eripuit, ne wisi idque verterem sed, mel at tempor suscipit. Ad cum veri numquam intellegat."
                    poster="http://images4.fanpop.com/image/photos/15000000/Star-Trek-Movie-Poster-2-zoe-saldana-15090375-800-1182.jpg"
                    thumbnail="http://nerdreactor.com/wp-content/uploads/2015/08/heart-of-america-movie-poster.jpg" />
            </div>
        );
    }
});

module.exports = Home;
