let scoresArray = 
    [
    {
    name: "Bob",
    photo: "Man", 
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]

}
,
{
    name: "Bill",
    photo: "blob", 
    scores: [
        "5",
        "1",
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]

}
]

module.exports = scoresArray; 




function runTableQuery() {
    let currentURL = window.location.origin; 
    $.ajax({url: currentURL + "/api/friends", method:"GET"})
    .done(function(scoresArray){
        console.log("-----------------------");
        console.log("URL:" + currentURL + "/api/friends"); 
        console.log("------------------------"); 
        console.log(scoresArray); 
        console.log("-------------------------")
    });
}

runTableQuery(); 