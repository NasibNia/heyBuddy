var buddyData = require("../data/buddy.js");


module.exports = function(app){
    app.get("/api/buddies",function(req,res){
        res.json(buddyData);
    });
    app.post("/api/buddies", function(req,res){
        console.log("other people  " +  buddyData);
        var otherPeops = buddyData;
        var you = req.body;
        console.log("you are "+ you);

        findMach(you, otherPeops);

        buddyData.push(req.body);
        
    });
    app.post("/api/match",function(req,res){

    });

    //===========helper functions =================
    //function to take in toe arrays of same length aand take the minimum diff
    function absoluteDiff(arr1, arr2){
        var newArr=[];
        var absDiff = 0;
        for (var i = 0; i < arr1.length; i++) {
            var elem1 = parseInt(arr1[i]);
            var elem2 = parseInt(arr2[i]);

            if (!(elem1.isNull() || elem2.isNull())){
                if (elem1 > elem2){
                    absDiff += (elem1-elem2);
                } else{
                    absDiff += (elem2-elem1);
                }
            }   
        }
        return absDiff;
    }
    // function to find match between one array you and an array of objects
    function findMach(you, otherPeops){
        
        var absDiff = absoluteDiff(you,otherPeops[0]);
        var id = 0;
        for (var i = 0; i < otherPeops.length; i++) {
            var newAbsDiff = absoluteDiff(you,otherPeops[i]);
            if( newAbsDiff < absDiff){
                absDiff = newAbsDiff;
                id = i;
            }  
        }
        console.log("absDiff  " + absDiff);
        console.log("i  ", i);
    return id;
    }
};
