module.exports = function(context, payload, callback) {

    //Temp: these videos need to come from payload
    var videos = [{
        id: "1",
        name: "TEMP",
        url: "/public/TEMP.mp4",
        type: "video/mp4"
    }];

    context.dispatch('VIDEOS_RECEIVED', {
        videos: videos
    });
    callback();
};