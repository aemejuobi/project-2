var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Project.findAll({}).then(function(dbProject) {
      res.render("index", {
        msg: "Welcome!",
        Project: dbProject
      });
    });
  });

  // Load Project page and pass in an Project by id
  app.get("/Project/:id", function(req, res) {
    db.Project.findOne({ where: { id: req.params.id } }).then(function(
      dbProject
    ) {
      res.render("Project", {
        Project: dbProject
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
