# heyBuddy

<!-- Put a description of what the project is -->
[HeyBuddy!](https://heynewbuddy.herokuapp.com/)

![Hey Buddy](pic2.png)


Hello Full Stack! I'm here!

This funn project is my first jump to full stack application building, holding together the pieces of client side and the server! It is kind of match maker to find a buddy to hang out or travel with or simply spend your time to read a bood or share thoughts. 

On the front side it provides a survey to the user and gathers all the questions and compares against the locally available database. 

On the serve side application has a modular arcitecture; here is a quick snapshot:

* data:
     * include the data stored in buddy.js. In the future, I will modify this to be connected to a mysql or sequelize database to keep track of real data in real time. But, for now the list of buddies who are lookign for a match is hardcoded in a old school way!
* public
     * This folder contain everything that could be seen by the public including the css style files, images and html files. The client side javascript files are also stored in this folder.
* routing 
     * this folder contains the server side routing codes which dedicate the appropriate responses to the clieent requests. 
     * On the server side, following routes have been defined:
        * /api/buddies ; with both get and post methods; get method gets all the buddies information and sends them as a json object to the page, while the post method adds the new user information to the library of buddies, It then goes through a match function and find the best match base dn the responses that user has provided to the survey questions.
        * /api/match route has defined with a get method that gets the match and sends it as a json object to the page. 
        * "/survey/" and "/" routes were also defined along with a get method to send the corresponding html pages ("/survey.html" and "/home.html") to the window.  
* server.js
    sets up the list of dependencies for the application which inlude express, body-parser, and PORT. It also actually create a server by starting a listen method on the app.

<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->
### Link to deployed site
[HeyBuddy!](https://heynewbuddy.herokuapp.com/)


<!-- # Images -->
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
<!-- ![Hey Buddy]("./app/public/images/pic2.png"); -->
<!-- ![[burger](./public/assets/img/YRBURGER.gif) -->

# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->

- Making a server 
- javascript
- node.js
- API calls from front end to the server
- promise functions
- call backs
- error handling
- handlebars
- npm
- modular design of backend
- using templates for front end using handlebars



# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

This block of the code shows how to get data from api/boddies and how to add the user info to it. Get match and send it back to the from end through url "/api/match"
```
app.get("/api/buddies/",function(req,res){
        res.json(buddyData);
    });
    app.post("/api/buddies/", function(req,res){
        var otherPeops = buddyData;
        var you = req.body;

        var matchId = findMach(you, otherPeops);
        match = buddyData[matchId];

        buddyData.push(req.body);
   
    });
console.log("match is " + match);
    app.get("/api/match",function(req,res){        
        return res.json(match);
    });
```

This block of the code shows the function that calculates the absolute difference of the two array of the  same size. It also checks whether there is null elements in the array and if so, exclude their indeces from having a contribution in calculating the absolute value

```
function absoluteDiff(arr1, arr2){
        // var newArr=[];
        var absDiff = 0;
        for (var i = 0; i < arr1.length; i++) {
            var elem1 = parseInt(arr1[i]);
            var elem2 = parseInt(arr2[i]);

            // if none of the numbers are null
            if ((elem1 || elem2)){
                absDiff += Math.abs(elem1-elem2);
            }   
        }
        return absDiff;
    }

```
This block of the code is the findMatch function which actually finds the best match between user  and a library of other people based on their scores.


```
function findMach(you, otherPeops){        
        var minAbsDiff = absoluteDiff(you.scores,otherPeops[0].scores);
        var id = 0;
        for (var i = 0; i < otherPeops.length; i++) {
            var currentAbsDiff = absoluteDiff(you.scores,otherPeops[i].scores);
            if( currentAbsDiff < minAbsDiff){
                minAbsDiff = currentAbsDiff;
                id = i;
            }  
        }
    return id;
    }
};
```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- Making a server 
- javascript
- node.js
- API calls from front end to the server
- promise functions
- call backs
- error handling
- handlebars
- npm
- modular design of backend through orm, controllers, modles
- using templates for front end using handlebars




# Author 
<!-- make a link to the deployed site and have your name as the link -->
Nasibeh Nourbakhshnia
(www.linkedin.com/in/nasibehnourbakhshnia)

# License
