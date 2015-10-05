var React = require('react');
var VideoPlayer = require('../VideoPlayer');
var connectToStores = require('fluxible-addons-react').connectToStores;
var SeriesStore = require('../../stores/SeriesStore');
var Comments = require('./Comments');

var Watch = React.createClass({
    render: function() {
        var content = (<div></div>);
        if (this.props.id) {
            var currentEpisode = this.props.episodes[this.props.currentEpisode]
            content = (
                <div>
                    <VideoPlayer episode={currentEpisode}/>
                    <div style={{padding: "20px"}}>
                        <h1>{currentEpisode.name}</h1>
                        <p>{currentEpisode.description}</p>
                    </div>
                    <Comments />
                </div>
            )
        }
        return content;
    }
});

module.exports = connectToStores(
	Watch,
	[SeriesStore],
	function(context, props) {
		return {
            id: context.getStore(SeriesStore).getId(),
			episodes: context.getStore(SeriesStore).getEpisodes(),
            info: context.getStore(SeriesStore).getInfo(),
            currentEpisode: context.getStore(SeriesStore).getCurrentEpisode()
		}
	}
);
