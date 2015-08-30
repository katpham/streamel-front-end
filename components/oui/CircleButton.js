var React = require('react');
var connectToStores = require("fluxible-addons-react").connectToStores;
var ActionMonitorStore = require('fluxible-plugin-action-monitor').actionMonitorStore;

var CircleButton = React.createClass({
    propTypes: {
        action: React.PropTypes.func.isRequired,
        payload: React.PropTypes.object.isRequired,
        actionId: React.PropTypes.string
    },
    contextTypes: {  
        executeAction: React.PropTypes.func.isRequired,
    }, 
    navigate: function() {
        this.context.executeAction(this.props.action, this.props.payload, this.props.actionId);
    },
    render: function() {
        var loading;
        if (typeof this.props.currentlyLoading[this.props.actionId]  !== "undefined") {
            loading = "Loading";
        }
        return (
            <div className="o-circle-button" onClick={this.navigate}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = connectToStores(
    CircleButton,
    [ActionMonitorStore],
    function (context, props) {
        return {
            currentlyLoading: context.getStore(ActionMonitorStore).getActionsInProgress()
        }
    }
);