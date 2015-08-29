var React = require('react');
var VideoPlayer = require('../VideoPlayer');
var connectToStores = require('fluxible-addons-react').connectToStores;
var PlayStore = require('../../stores/PlayStore');

var Watch = React.createClass({
    render: function() {

    	var playerConfig = {
    		playlist: [
	    		{
					id: "1",
					name: "sample2",
					url: "sample2.mp4",
					type: "video/mp4"
				},
				{
					id: "2",
					name: "sample1",
					url: "sample1.mp4",
					type: "video/mp4"
				},
			]
		};

        return (
            <div>
                <VideoPlayer config={this.props.playerConfig}/>
            </div>
        );
    }
});

module.exports = connectToStores(
	Watch,
	[PlayStore],
	function(context, props) {
		return {
			playerConfig: context.getStore(PlayStore).getConfig()
		}
	}
);
