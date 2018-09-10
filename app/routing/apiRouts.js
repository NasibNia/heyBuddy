var buddyData = require("../data/buddy.js");


module.exports = function(app){
    app.get("/api/buddies",function(req,res){
        res.json(buddyData);
    });
    app.post("/api/buddies", function(req,res){
        buddyData.push(req.body);
    });
    app.post("/api/match",function(req,res){

    });
};
