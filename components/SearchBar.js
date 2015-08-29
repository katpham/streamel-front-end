var React = require('react');

var SearchBar = React.createClass({
	render: function() {
		return (
			<div className="streamel-searchbar">
				<input type="text" className="streamel-search-input" />
				<button className="streamel-search-button" />
			</div>
		);
	}
});

module.exports = SearchBar;