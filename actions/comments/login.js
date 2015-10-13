module.exports = function(context, payload, callback) { 
//value that you want to be given to a file when you say required
//variable's value will be function
	context.dispatch('COUNTER_INCREMENTED', payload.number+1);

}