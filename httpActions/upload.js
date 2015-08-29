
module.exports = function(req, res, next) {
    console.log("At upload");
    console.log(req.body);
    res.send({"Hi": "Done"});
}
