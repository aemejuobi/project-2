var db = require("../models");

module.exports = function(app) {
  // Load home page page
  app.get("/", function(req, res) {

    db.User.findAll({}).then(function(results) {
      res.render("index", {
        msg: "Welcome!",
        examples: results
=======

    db.Project.findAll({}).then(function(dbProject) {
=======
    db.User.findAll({}).then(function(dbExamples) {

      res.render("index", {
        msg: "Welcome!",
        Project: dbProject

      });
    });
    console.log(db.User);
  });


  // Load clicked sport page that displays the teams for that sport
  app.get("/sport/:sport", function(req, res) {
    db.Team.findOne({
      where: {
        sportName: req.params.sport
      }
    }).then(function(results) {
      res.render("example", {
        example: results
      });
    });
    console.log(db.Sport);
  });

  app.get("/team/:id", function(req, res) {
=======
    
  // Load Project page and pass in an Project by id
  app.get("/Project/:id", function(req, res) {
    db.Project.findOne({ where: { id: req.params.id } }).then(function(
      dbProject
    ) {
      res.render("Project", {
        Project: dbProject
=======
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {

    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.render("example", {

        example: results
=======
        example: dbExamples

      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
