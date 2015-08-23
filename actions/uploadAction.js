module.exports = function (context, payload, callback) {
    alert(JSON.stringify(payload));
    callback();
};