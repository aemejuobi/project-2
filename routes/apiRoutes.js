var db = require("../models");

module.exports = function(app) {

  // Get all teams (Read)
  app.get("/api/allTeams", function(req, res) {
    db.Team.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all Users
  app.get("/api/allUsers", function(req, res){
    db.User.findAll({}).then(function(result){
      res.json(result);
    });
  });

  // Create New User
  app.post("/api/newUser", function(req, res){
    db.User.create({
      name: req.body.name,
      password: req.body.password,
      userEmail: req.body.userEmail
    }).then(function(results){
      res.json(results);
    });
  });

  // Create a new Team
  app.post("/api/newTeam", function(req, res) {
    db.Team.create({
      sportName: req.body.sportName,
      teamName: req.body.teamName,
      email: req.body.email,
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete user by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({ 
        where: { 
          id: req.params.id 
        } 
      }).then(function(results){
      res.json(results);
    });
  });
  
  

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

};







