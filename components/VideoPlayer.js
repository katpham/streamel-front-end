var React = require('react');

var VideoPlayer = React.createClass({
	render: function() {
        console.log(this.props.episode);
		return (
			<div>
				<video width="100%" height="100%">
					<source src={this.props.episode.url} type="video/mp4" />
				</video>
			</div>	
		);
	},
});

module.exports = VideoPlayer;