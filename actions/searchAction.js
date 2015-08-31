module.exports = function(context, payload, callback) {

    // Hard Coded
    payload.results = [
        {
            "name": "The Tommy Show",
            "description": "It's the Tommy Show!",
            "user": "admin",
            "episodes": [
                {
                    "name": "Meet Tommy",
                    "description": "He's Great!",
                    "url": "sampleUrl"
                },
                {
                    "name": "Tommy goes to school",
                    "description": "Will his teacher be mean?",
                    "url": "sampleUrl"
                }
            ]
        },
        {
            "name": "The Tommy Show",
            "description": "It's the Tommy Show!",
            "user": "admin",
            "episodes": [
                {
                    "name": "Meet Tommy",
                    "description": "He's Great!",
                    "url": "sampleUrl"
                },
                {
                    "name": "Tommy goes to school",
                    "description": "Will his teacher be mean?",
                    "url": "sampleUrl"
                }
            ]
        }
    ]

    context.dispatch("SEARCH_RESULTS_RECEIVED", payload);
    callback();
};