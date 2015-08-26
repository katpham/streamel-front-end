var request = require('superagent');

module.exports = function (context, payload, callback) {
    var formData = new FormData();

    for (var i = 0; i < payload.files.length; i++) {
        formData.append('videos[]', payload.files[i], payload.files[i].name);
    }

    request
        .post('/api/upload')
        .type('form')
        .send(formData)
        .end(function(err, res) {
            console.log("error");
            console.log(err);
            console.log("res")
            console.log(res);
            callback();
        });
};