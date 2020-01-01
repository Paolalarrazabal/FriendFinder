const friendData = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {

        let bestFriendMatch = {
            name: "",
            photo: "",
            scoreDifference: 1000
        }

        let newUser = req.body;
        let userName = newUser.name;
        let userScores = newUser.scores;
        let userPhoto = newUser.photo;

        let comparisonDifference = 0;

        for (let i = 0; i < friendData.length; i++) {
            
            comparisonDifference = 0;

            for (let j = 0; j < userScores.length; j++) {
                comparisonDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));


                if (comparisonDifference <= bestFriendMatch.scoreDifference) {
                    bestFriendMatch.name = friendData[i].name;
                    bestFriendMatch.photo = friendData.photo;
                    bestFriendMatch.scoreDifference = comparisonDifference;
                    console.log(bestFriendMatch);
                }
            }

        }


friendData.push(newUser); 
res.json(bestFriendMatch); 
console.log(bestFriendMatch); 



    });

};