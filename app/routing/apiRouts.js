var buddyData = require("../data/buddy.js");


module.exports = function(app){
    var match;
    app.get("/api/buddies",function(req,res){
        res.json(buddyData);
    });
    app.post("/api/buddies", function(req,res){
        console.log("other people  " ,  buddyData);
        var otherPeops = buddyData;
        var you = req.body;
        console.log("you are ", you);

        var matchId = findMach(you, otherPeops);
        match = buddyData[matchId];

        buddyData.push(req.body);

        
        
    });
    console.log("match is " + match);
    app.get("/api/match",function(req,res){        
        return res.json(match);
    });

    //===========helper functions =================
    //function to take in toe arrays of same length aand take the minimum diff
    function absoluteDiff(arr1, arr2){
        var newArr=[];
        var absDiff = 0;
        for (var i = 0; i < arr1.length; i++) {
            var elem1 = parseInt(arr1[i]);
            var elem2 = parseInt(arr2[i]);

            if ((elem1 || elem2)){
                console.log(elem1);
                console.log(elem2);
                if (elem1 > elem2){
                    absDiff += (elem1-elem2);
                } else{
                    absDiff += (elem2-elem1);
                }
                console.log( " absDiff   " + absDiff);
            }   
        }
        return absDiff;
    }
    // function to find match between one array you and an array of objects
    function findMach(you, otherPeops){
        console.log("inside findMatch");
        console.log("you " + you);
        console.log("other peaops " + otherPeops  );
        
        var minAbsDiff = absoluteDiff(you.scores,otherPeops[0].scores);
        var id = 0;
        for (var i = 0; i < otherPeops.length; i++) {
            var currentAbsDiff = absoluteDiff(you.scores,otherPeops[i].scores);
            console.log("absDiff  between you and " + otherPeops[i].name + "is " + currentAbsDiff);
            if( currentAbsDiff < minAbsDiff){
                minAbsDiff = currentAbsDiff;
                id = i;
            }  
        }

        console.log("Minimum absDiff is between you and " + otherPeops[id].name + " and value is " + minAbsDiff);
        // console.log("i  ", i);

    return id;
    }
};
