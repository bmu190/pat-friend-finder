var friendData = require("../data/friends");

console.log(friendData);

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    app.post("/api/friends", function(req, res) {
        console.log(req.body); 
        console.log(friendData);
        friendData.push(req.body); 
        // console.log(friendData);      
    });
};