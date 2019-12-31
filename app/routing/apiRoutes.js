const friendData = require('../data/friends.js'); 

module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData); 
    });

    app.post('/api/friends', function (req,res) {

    let userScore = req.body.scores;
    const friendsArr = [];
    let friendMatch = 0;

    for (let i=0; i < userScore.length; i ++) {
        friendsArr.push(parseInt(userScore[i]))

    }

    userScore = friendsArr;

    for (let i=0; i < friendsData.length; i++) {
        scoreDifference = 0; 
        for (let j = 0; j < userScore.length; j++) {
         scoreDifference += Math.abs(friendData[i].scores[j]-userScore[j]); 
        }
        friendsArr.push(scoreDifference); 

    }

    for (let i = 0; i < friendsArr.length; i ++) {
        if (friendsArr[i] <= friendsArr[friendMatch]) {
            friendMatch = i;
        }
        
    }


let bestMatch = friendData[friendMatch]; 
res.json(bestMatch); 
friendData.push(req.body); 
console.log(req.body);




    
    
    

   
});

};