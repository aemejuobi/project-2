var path = require('path');

var db = require("../models");

module.exports = function(app) {
  // Load home page page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', "index.html"));
  });


  // Load clicked sport page that displays the teams for that sport
  app.get("/:sport", function(req, res) {
    db.Team.findOne({
      where: {
        sportName: req.params.sport,
      }
    }).then(function(results) {
      res.sendFile(path.join(__dirname, '..', 'public', "login.html"));
    });
    console.log(db.Team);
  });

  
// Load login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', "login.html"));
  });

//   app.get("/team/:id", function(req, res) {

    
//   // Load Project page and pass in an Project by id
//   app.get("/Project/:id", function(req, res) {
//     db.Project.findOne({ where: { id: req.params.id } }).then(function(
//       dbProject
//     ) {
//       res.render("Project", {
//         Project: dbProject

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {

//     db.User.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(results) {
//       res.render("example", {

//         example: results

//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
}