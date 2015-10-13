var React = require('react');
var loginAction = require('../../actions/comments/login');
var loginStore = require('../../stores/LoginStore');
var connectToStores = require("fluxible-addons-react").connectToStores; 


var Comments = React.createClass({
	contextTypes: {
		executeAction: React.PropTypes.func.isRequired
	},
	incrementCounter: function() {

		this.context.executeAction(loginAction, {
			number: this.props.num
		});
		//alert(this.props.num);
	},

    render: function() {
    	return (
    		<p> <input id="submit" type="submit" value="submit" onClick={this.incrementCounter} /> 
    		{this.props.num}
    		</p>
    		
    	);
    }
});

//return comments to whatever requires it
module.exports = connectToStores(  
    Comments,  
    [loginStore],  
    function (context, props) {
        return {
            num: context.getStore(loginStore).getNumber()  
        }
    } 
);
