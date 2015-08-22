var React = require('react');

var VideoPlayer = React.createClass({
	render: function() {
		return (
			<div className="video-player-container">
				<video id="video-player" width="100%" height="100%">
					{this.props.config.playlist.map(function(item){
						return (
							<source key={item.id} src={item.url} type={item.type} />
						);
					})}
				</video>

				<div id="video-player-controls" className="video-player-controls">
					<div className="seek-bar">
						<div className="seek-bar-lower" />
					</div>
					<div>

					</div>
				</div>
			</div>	
		);
	},
});

module.exports = VideoPlayer;