var React = require('react');
var uploadAction = require('../../actions/uploadAction');

var Upload = React.createClass({
    contextTypes: {  
        executeAction: React.PropTypes.func.isRequired  
    },  
    handleSubmit: function(element) {  
        /*element.preventDefault();
        try {
            var payload = {
                password: React.findDOMNode(this.refs.password).value.trim(),
                json: JSON.parse(React.findDOMNode(this.refs.json).value.trim()),
                files: React.findDOMNode(this.refs.files).files
            }
        } catch(err) {
            alert("Probably invalid JSON");
        }
        this.context.executeAction(uploadAction, payload);*/
    },
    render: function() {
        return (
            <div>
                <h2>The Jank Upload Form!</h2>
                <form onSubmit={this.handleSubmit} name="upload" method="post" action="/api/upload" encType="multipart/form-data">
                    <p>
                        Password:
                        <input type="text" ref="password" />
                    </p>
                    <p>
                        JSON:
                        <textarea ref="json" />
                    </p>
                    <p>
                        Upload your videos:
                        <input type="file" ref="files" name="videos[]" multiple />
                    </p>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>
        );
    }
});

module.exports = Upload;
