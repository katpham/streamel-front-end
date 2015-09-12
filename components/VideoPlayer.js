var React = require('react');

var VideoPlayer = React.createClass({
	render: function() {
        console.log(this.props.episode);
		return (
			<div className="video-container">
				<video width="100%" height="100%" controls autoplay className="video-player">
					<source src={this.props.episode.url} type="video/mp4" />
				</video>
			</div>
		);
	},
});

module.exports = VideoPlayer;